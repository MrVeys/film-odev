import React from "react";
import TVCard from "./TvCard";

const TVList = ({ shows, dispatch, watchlist }) => {
    return (
        <div className="tv-list">
            {shows.map((item) => (
                <TVCard
                    key={item.show.id}
                    show={item.show}
                    dispatch={dispatch}
                    watchlist={watchlist}
                />
            ))}
        </div>
    );
};

export default TVList;
