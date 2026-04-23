import React from "react";
import { ReactComponent as RightIcon } from "../../assets/right-arrow.svg";
import styles from "../../components/Carousel/Carousel.module.css";

function RightArrow({ className }) {
    return (
        <div className={` ${className}`}>
            <RightIcon />
        </div>
    );
}

export default RightArrow;
