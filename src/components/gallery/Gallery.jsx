import "./gallery.css"
// images
import BG from "../../assets/bg_1.jpg"
import G1 from "../../assets/work-1.jpg"
import G2 from "../../assets/work-2.jpg"
import G3 from "../../assets/work-3.jpg"
import G4 from "../../assets/work-4.jpg"

// import swiper and react
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";

// icons
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Gallery() {

    let data = [
        {
            img: G1,
            name: "Native Orange"
        },
        {
            img: G2,
            name: "Juicy Crapes"
        },
        {
            img: G3,
            name: "Red Watermelon"
        },
        {
            img: G4,
            name: "Fresh Banana"
        },
    ]

  return (
    <div className='gallery' style={{backgroundImage: `url(${BG})`}}>
        <h4>Our Latest Product</h4>
        <h1>Special Gallery</h1>
        <div className="boxs">
            <Swiper
                slidesPerView={3} 
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay,  Pagination, Navigation]}
                className="mySwiper"
                >
                {data.map(({img, name}, index) => {
                    return (
                        <SwiperSlide  key={index}>
                            <div className="box">
                                <div className="over"></div>
                                <img src={img} alt="" />
                                <div className="info">
                                    <h3>{name}</h3>
                                    <small>view details</small>
                                </div>
                                <div className="icons">
                                    <AddBoxIcon />
                                    <FavoriteBorderIcon />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
        </Swiper>
        <button>View More</button>
      </div>
    </div>
  )
}

export default Gallery