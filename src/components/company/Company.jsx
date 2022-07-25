import "./company.css"
import G1 from "../../assets/client-1.png"
import G2 from "../../assets/client-2.png"
import G3 from "../../assets/client-3.png"
import G4 from "../../assets/client-4.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Company() {

  return (
    <div className="company" style={{padding: "100px 120px", textAlign: "center"}}>
        <Swiper
            spaceBetween={50}
            slidesPerView={window.innerWidth > 991 ? 3 : 2}
            loop={true}
            >
            <SwiperSlide><img src={G1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={G2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={G3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={G4} alt="" /></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Company