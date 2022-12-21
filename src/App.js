import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import instance from "./api/axios";
import requests from "./api/request";
import "./App.css";
import Header from "./components/Header";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";

function App() {
    const [books, setBooks] = useState([]);

    const fetchDate = async () => {
        const params = {
            page: 0,
        };
        const resultBest = await instance.get(requests.fetchBest, { params });

        setBooks(resultBest.data.list);
    };

    useEffect(() => {
        fetchDate();
    }, []);

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Books books={books} />} />
                    <Route path="/books" element={<Books books={books} />} />
                    <Route path="/books/detail/:id" element={<BookDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
