import "./clients.css"
import G1 from "../../assets/testimonial1.jpg"
import G2 from "../../assets/testimonial2.jpg"
import G3 from "../../assets/testimonial3.jpg"
import G4 from "../../assets/testimonial4.jpg"

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Clients() {
    let data = [
        {
            img: G3,
            name: "Adam Crew",
            para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eaque distinctio sed magni impedit, doloribus maiores minima eveniet reiciendis debitis quia harum asperiores odit ab dignissimos, a possimus aliquam ex",
            small: "Manager",
        },
        {
            img: G4,
            name: "Sara Crew",
            para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eaque distinctio sed magni impedit, doloribus maiores minima eveniet reiciendis debitis quia harum asperiores odit ab dignissimos, a possimus aliquam ex",
            small: "Manager",
        },
    ]
  return (
    <div className="clients">
        <h4>Client Satisfait</h4>
        <h1>What Client's Say</h1>
        <div className="main">
            <div className="sec">
                <img className="G1" src={G1} alt="" />
                <img className="G2" src={G2} alt="" />
                <img className="G3" src={G3} alt="" />
                <img className="G4" src={G4} alt="" />
            </div>
            <Swiper
                spaceBetween={100}
                slidesPerView={1}
                loop={true}
                >
                    {data.map((item, ind) => {
                        return (
                            <SwiperSlide key={ind}>
                                <div className="sec2">
                                    <p>{item.para}</p>
                                    <div className="info">
                                        <div className="img"><img className="GT" src={item.img} alt="" /></div>
                                        <div className="small">
                                            <h3>{item.name}</h3>
                                            <small>{item.small}</small>
                                        </div>
                                    </div>
                                    <FormatQuoteIcon />
                                </div>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
        </div>
    </div>
  )
}

export default Clients