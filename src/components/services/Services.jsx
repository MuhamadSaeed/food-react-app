import "./services.css";

import I1 from "../../assets/animate_icon1.png";
import I2 from "../../assets/animate_icon2.png";
import I3 from "../../assets/animate_icon3.png";
import I4 from "../../assets/animate_icon4.png";
import Img1 from "../../assets/service_1.jpg";
import Img2 from "../../assets/service_2.jpg";
import Img3 from "../../assets/service_3.jpg";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Services() {
    let data = [
        {
            img: Img1,
            name: "fresh fruits",
            para: "Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are",
        },
        {
            img: Img2,
            name: "fresh vegetables",
            para: "Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are",
        },
        {
            img: Img3,
            name: "natural wheats",
            para: "Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are",
        },
    ];
    return (
        <div className="services">
            <h4 className="forThePage1">What We Offer</h4>
            <h1 className="forThePage2">Service We Offer</h1>
            <div className="images">
                <img
                    style={{ position: "absolute", top: "60px", left: "100px" }}
                    className="img 1"
                    src={I1}
                    alt=""
                />
                <img
                    style={{ position: "absolute", top: "60px", right: "100px" }}
                    className="img 2"
                    src={I2}
                    alt=""
                />
                <img
                    style={{ position: "absolute", bottom: "0px", left: "100px" }}
                    className="img 3"
                    src={I3}
                    alt=""
                />
                <img
                    style={{ position: "absolute", bottom: "0px", right: "100px" }}
                    className="img 4"
                    src={I4}
                    alt=""
                />
            </div>
            <div className="boxs">
                {data.map((item, index) => {
                    return (
                        <div className="box" key={index}>
                                <div className="img">
                                    <img src={item.img} alt="" />
                                </div>
                            <div className="info">
                                <h3>{item.name}</h3>
                                <p>{item.para}</p>
                            </div>
                            <ArrowForwardIcon className="iconServices" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Services;
