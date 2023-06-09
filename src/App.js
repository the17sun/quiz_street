import axios from "axios";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header.js";
import Home from "./Pages/Home/Home.js";
import Quiz from "./Pages/Quiz/Quiz.js";
import Result from "./Pages/Result/Result.js";

function App() {
    const [questions, setQuestions] = useState();
    const [name, setName] = useState();
    const [score, setScore] = useState(0);

    const fetchQuestions = async (category = "", difficulty = "") => {
        const { data } = await axios.get(
            `https://opentdb.com/api.php?amount=10${
                category && `&category=${category}`
            }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
        );

        setQuestions(data.results);
    };

    return (
        <>
            <div
                className='app'
                style={{ backgroundImage: 'url("/ques2.jpg")' }}>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Home
                                name={name}
                                setName={setName}
                                fetchQuestions={fetchQuestions}
                            />
                        }
                    />

                    <Route
                        path='/quiz'
                        element={
                            <Quiz
                                name={name}
                                questions={questions}
                                score={score}
                                setScore={setScore}
                                setQuestions={setQuestions}
                            />
                        }
                    />
                    <Route
                        path='/result'
                        element={<Result name={name} score={score} />}
                    />

                    <Route path='*' element={<h1>404 Not Found</h1>} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
