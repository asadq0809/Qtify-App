import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import AlbumCard from "../AlbumCard/AlbumCard";

function Carousel({ data }) {
    // console.log(data);
    // data.map((ele) => {
    //     console.log(ele);
    // });
    return (
        <>
            <Swiper modules={[Navigation]} spaceBetween={16} slidesPerView="auto" navigation={true} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
                {data.map((ele) => (
                    <SwiperSlide key={ele.id}>
                        <AlbumCard album={ele} />
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide> */}
            </Swiper>
        </>
    );
}

export default Carousel;
