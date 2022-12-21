import React from "react";

import BookCard from "../components/BookCard";

const Books = ({ books }) => {
    console.log(books);
    return (
        <ul>
            {books.map((book) => (
                <BookCard key={book.seq} book={book} />
            ))}
        </ul>
    );
};

export default Books;
