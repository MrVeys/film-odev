import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { initialState, showReducer, ACTIONS } from "../reducer/showReducer";
import SearchBox from "../components/SearchBox";
import TVList from "../components/TVList";
import WatchlistPanel from "../components/WatchlistPanel"; // Yeni import

const API_URL = "https://api.tvmaze.com/search/shows?q=";

const Home = () => {
    const [state, dispatch] = useReducer(showReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: ACTIONS.FETCH_INIT });
            try {
                const response = await axios.get(`${API_URL}${state.query}`);
                dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: response.data });
            } catch (error) {
                dispatch({ type: ACTIONS.FETCH_FAILURE });
            }
        };

        fetchData();
    }, [state.query]);

    const renderContent = () => {
        if (state.isLoading) {
            return <div className="spinner">Yükleniyor...</div>;
        }

        if (state.isError) {
            return (
                <div className="error">
                    <p>Bir hata oluştu.</p>
                    <button onClick={() => dispatch({ type: ACTIONS.SET_QUERY, payload: state.query })}>
                        Tekrar Dene
                    </button>
                </div>
            );
        }

        if (state.data.length === 0) {
            return <div className="empty">Sonuç bulunamadı.</div>;
        }


        return <TVList shows={state.data} dispatch={dispatch} watchlist={state.watchlist} />;
    };

    return (
        <div className="home-container">
            <SearchBox dispatch={dispatch} query={state.query} />

            <div className="main-content">
                <div className="list-area">
                    {renderContent()}
                </div>


                <WatchlistPanel watchlist={state.watchlist} dispatch={dispatch} />
            </div>
        </div>
    );
};

export default Home;