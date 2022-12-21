import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../api/axios";
import requests from "../api/request";
import BookCard from "../components/BookCard";
import Paging from "../components/Paging";

const Books = () => {
    const { keyword } = useParams();
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);

    const fetchDate = async () => {
        const parmas = {
            page,
        };
        const search = {
            keyword: keyword,
            page: page,
        };
        const resultBest =
            keyword == undefined
                ? await instance.get(requests.fetchBest, { parmas })
                : await instance.get(requests.fetchSearch, {
                      keyword: "가",
                      page: 0,
                  });

        setBooks(resultBest.data.list);
    };

    useEffect(() => {
        fetchDate();
    }, [keyword]);

    useEffect(() => {
        fetchDate();
    }, [page]);

    console.log("books", keyword);
    return (
        <>
            <ul>
                {books.map((book) => (
                    <BookCard key={book.seq} book={book} />
                ))}
            </ul>
            <Paging />
        </>
    );
};

export default Books;
