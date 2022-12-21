import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route></Route>
                    <Route path="/" element={<Books />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/books/:keyword" element={<Books />} />
                    <Route path="/books/detail/:id" element={<BookDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
