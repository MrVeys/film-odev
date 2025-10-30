import React from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../reducer/showReducer";

const TVCard = ({ show, dispatch, watchlist }) => {
    const navigate = useNavigate(); // Hook'u kullan

    const summary = show.summary ? show.summary.replace(/<[^>]+>/g, "").substring(0, 100) + "..." : "Özet mevcut değil.";
    const image = show.image ? show.image.medium : "https://via.placeholder.com/210x295";


    const isAdded = watchlist.some((item) => item.id === show.id);

    const handleWatchlist = () => {
        if (isAdded) {

            dispatch({ type: ACTIONS.REMOVE_WATCHLIST, payload: show });
        } else {

            dispatch({ type: ACTIONS.ADD_WATCHLIST, payload: show });
        }
    };

    const handleDetail = () => {

        navigate(`/show/${show.id}`);
    };

    return (
        <div className="tv-card">
            <img src={image} alt={show.name} />
            <div className="tv-card-content">
                <h3>{show.name}</h3>
                <p>
                    <strong>Tür:</strong> {show.genres.join(", ") || "Bilinmiyor"}
                </p>
                <p>
                    <strong>Dil:</strong> {show.language || "Bilinmiyor"}
                </p>
                <p>
                    <strong>Puan:</strong> {show.rating?.average || "N/A"}
                </p>
                <p className="summary">{summary}</p>
                <div className="card-buttons">
                    <button onClick={handleDetail}>Detay</button>
                    <button onClick={handleWatchlist}>
                        {isAdded ? "Listeden Çıkar" : "Kısa Listeye Ekle"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TVCard;