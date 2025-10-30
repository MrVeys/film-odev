import React from "react";
import { ACTIONS } from "../reducer/showReducer";

const WatchlistPanel = ({ watchlist, dispatch }) => {
    return (
        <div className="watchlist-panel">
            <h3>Gösterime Girecekler</h3>
            {watchlist.length === 0 ? (
                <p className="empty-watchlist">Listeniz boş.</p>
            ) : (
                <ul className="watchlist-items">
                    {watchlist.map((show) => (
                        <li key={show.id}>
                            <span>{show.name}</span>
                            <button
                                className="remove-btn"
                                onClick={() =>
                                    dispatch({ type: ACTIONS.REMOVE_WATCHLIST, payload: show })
                                }
                            >
                                Çıkar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WatchlistPanel;