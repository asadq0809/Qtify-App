import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Songs.module.css";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab } from "@mui/material";

function Songs() {
    const [songs, setSongs] = useState([]);
    const [genres, setGenres] = useState([]);
    const [value, setValue] = useState("all");

    //fetch songs
    useEffect(() => {
        const fetchSongs = async () => {
            const res = await axios.get("https://qtify-backend.labs.crio.do/songs");
            setSongs(res.data);
        };

        const fetchGenres = async () => {
            const res = await axios.get("https://qtify-backend.labs.crio.do/genres");
            setGenres(res.data.data);
        };

        fetchSongs();
        fetchGenres();
    }, []);

    const filteredSongs = value === "all" ? songs : songs.filter((song) => song.genre.key === value);

    return (
        <div className={styles.section}>
            {/* Header */}
            <div className={styles.header}>
                <h2>Songs</h2>
            </div>

            {/* Tabs */}
            <Tabs value={value} onChange={(e, newValue) => setValue(newValue)} className={styles.tabs}>
                <Tab label="All" value="all" />

                {genres.map((genre) => (
                    <Tab key={genre.key} label={genre.label} value={genre.key} />
                ))}
            </Tabs>

            {/* Carousel */}
            <Carousel type="song" data={filteredSongs} id="songs-carousel" />
        </div>
    );
}

export default Songs;
