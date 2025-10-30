import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import ShowDetail from "./Pages/ShowDetails";
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <header>
                    <h1>Kampüs Film Kulübü</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/show/:id" element={<ShowDetail />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
