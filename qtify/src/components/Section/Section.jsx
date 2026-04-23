import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import Carousel from "../Carousel/Carousel";

function Section({ title, apiEndpoint }) {
    const [data, setData] = useState([]);
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(apiEndpoint);
                setData(res.data);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [apiEndpoint]);

    return (
        <div className={styles.section}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <button onClick={() => setCollapsed(!collapsed)}>{collapsed ? "Show All" : "Collapse"}</button>
            </div>

            {data?.length > 0 && collapsed ? (
                <Carousel data={data} />
            ) : (
                <div className={styles.grid}>
                    {data.map((album) => (
                        <AlbumCard key={album.id} album={album} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Section;
