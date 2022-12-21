import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../api/axios";
import requests from "../api/request";
import BookCard from "../components/BookCard";
import Paging from "../components/Paging";

const Books = () => {
    const { keyword } = useParams();
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(0);

    const fetchDate = async () => {
        const params = {
            page: page,
        };
        const resultBest = await instance.get(requests.fetchBest, { params });
        setBooks(resultBest.data.list);
    };

    const pageNext = () => {
        setPage(page + 1);
    };
    const pagePrev = () => {
        setPage(page - 1);
    };

    const changePage = (_page) => {
        if (page !== _page) {
            setPage(_page);
            console.log("페이지바뀌어라", page);
        }
    };

    // useEffect(() => {
    //     fetchDate();
    // }, [keyword]);

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
            <Paging pageNext={pageNext} pagePrev={pagePrev} changePage={changePage} page={page} />
        </>
    );
};

export default Books;

// const search = {
//     keyword: keyword,
//     page: page,
// };
// const resultBest =
//     keyword == undefined
//         ? await instance.get(requests.fetchBest, { parmas })
//         : await instance.get(requests.fetchSearch, {
//               keyword: "가",
//               page: 0,
//           });
