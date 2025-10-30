import React, { useState } from "react";
import { ACTIONS } from "../reducer/showReducer";


const SearchBox = ({ dispatch, query }) => {
    const [searchTerm, setSearchTerm] = useState(query);

    const handleSearch = (e) => {
        e.preventDefault();
       
        dispatch({ type: ACTIONS.SET_QUERY, payload: searchTerm });
    };

    return (
        <form onSubmit={handleSearch} className="search-box">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Dizi ara..."
            />
            <button type="submit">Ara</button>
        </form>
    );
};

export default SearchBox;