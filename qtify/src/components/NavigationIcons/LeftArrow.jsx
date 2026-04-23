import React from "react";
import { ReactComponent as LeftIcon } from "../../assets/left-arrow.svg";
import styles from "../../components/Carousel/Carousel.module.css";

function LeftArrow({ className }) {
    return (
        <div className={`${className} `}>
            <LeftIcon />
        </div>
    );
}

export default LeftArrow;
