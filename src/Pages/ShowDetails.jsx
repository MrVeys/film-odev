import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowDetail = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(false);
            try {

                const showResult = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                const episodesResult = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);

                setShow(showResult.data);
                setEpisodes(episodesResult.data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };

        fetchData();
    }, [id]);

    if (loading) return <div className="spinner">Yükleniyor...</div>;
    if (error) return <div className="error">Detaylar yüklenemedi.</div>;
    if (!show) return null;

    const summary = show.summary ? show.summary.replace(/<[^>]+>/g, "") : "Özet mevcut değil.";
    const image = show.image ? show.image.medium : "https://via.placeholder.com/210x295";

    return (
        <div className="show-detail">
            <img src={image} alt={show.name} />
            <div className="detail-content">
                <h1>{show.name}</h1>
                <p><strong>Tür:</strong> {show.genres.join(", ")}</p>
                <p><strong>Dil:</strong> {show.language}</p>
                <p><strong>Puan:</strong> {show.rating?.average || "N/A"}</p>
                <p>{summary}</p>
            </div>

            <div className="episodes-list">
                <h2>Bölümler</h2>
                {episodes.map((ep) => (
                    <div key={ep.id} className="episode-item">
                        <p>S{ep.season}B{ep.number}: {ep.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowDetail;