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

function Carousel({ data, id }) {
    // console.log(data);
    // data.map((ele) => {
    //     console.log(ele);
    // });
    return (
        <>
            <div className={styles.carouselWrapper}>
                <LeftArrow className={`${styles.arrow} ${styles.left} prev-${id}`} />
                <RightArrow className={`${styles.arrow} ${styles.right} next-${id}`} />
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={"auto"}
                    navigation={{
                        prevEl: `.prev-${id}`,
                        nextEl: `.next-${id}`,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = `.prev-${id}`;
                        swiper.params.navigation.nextEl = `.next-${id}`;
                    }}
                    // navigation={true}
                >
                    {data.map((ele) => (
                        <SwiperSlide key={ele.id} style={{ width: "200px" }}>
                            <AlbumCard album={ele} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Carousel;
