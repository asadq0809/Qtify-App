import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import LeftArrow from "../NavigationIcons/LeftArrow";
import RightArrow from "../NavigationIcons/RightArrow";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import AlbumCard from "../AlbumCard/AlbumCard";
import styles from "./Carousel.module.css";

function Carousel({ data, type }) {
    // console.log(data);
    // data.map((ele) => {
    //     console.log(ele);
    // });
    return (
        <>
            <div className={styles.carouselWrapper}>
                <LeftArrow className={`${styles.arrow} ${styles.left} prev-swipper-button`} />
                <RightArrow className={`${styles.arrow} ${styles.right} next-swipper-button`} />
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={"auto"}
                    navigation={{
                        prevEl: `.prev-swipper-button`,
                        nextEl: `.next-swipper-button`,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = `.prev-swipper-button`;
                        swiper.params.navigation.nextEl = `.next-swipper-button`;
                    }}
                    // navigation={true}
                >
                    {data.map((ele) => (
                        <SwiperSlide key={ele.id} style={{ width: "200px" }}>
                            <AlbumCard album={ele} type={type} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Carousel;
