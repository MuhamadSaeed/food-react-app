// main
import "./shopDetails.css";

// react and use state 
import React, { useState } from "react";

// swipper css files
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// imgaes
import BG from "../../assets/header.jpg"
import IMG from "../../assets/testimonial2.jpg"
import G1 from "../../assets/product01.jpg"
import G2 from "../../assets/product02.jpg"
import G3 from "../../assets/product03.jpg"
import G4 from "../../assets/product04.jpg"

// icons
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

// the swipper things
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//components
import Footer from "../../components/foooter/Footer";
import Nav from "../../components/nav/Nav";
import ToTop from "../../components/toTop/ToTop"
import Aside from "../../components/aside/Aside";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function ShopDetails({rightt, setRight}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [value, setValue] = useState(0)
    const [count, setCount] = useState(1)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    const handleClick = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const handleClick2 = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }
    return (
        <div className="shopDetails">
        <Nav rightt={rightt} setRight={setRight}/>
        <Aside rightt={rightt} setRight={setRight}/>
                <div className="mainPro" style={{ backgroundImage: `url(${BG})` }}>
                <div className="info">
                    <h1>Our Products</h1>
                    <h4>Home {`>`} Our Products</h4>
                </div>
            </div>
            <div className="almostMain">
                <div className="swiperDiv">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        loop={true}
                        spaceBetween={0}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img alt="" src={G1} className="bigImg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt="" src={G2} className="bigImg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt="" src={G3} className="bigImg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt="" src={G4} className="bigImg" />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img alt="" src={G1} className="smallImg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt="" src={G2} className="smallImg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt="" src={G3} className="smallImg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt="" src={G4} className="smallImg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="sec">
                    <div className="boxs">
                        <div className="box">
                            <h1>Our Organic Food</h1>
                            <div className="info">
                                <div className="stars">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                                <div className="blablabl">12 Reviews(s)     |    Add Your Review</div>
                            </div>
                            <div className="price">
                                <div className="active">$170.00</div>
                                <div className="unActive">$190.00</div>
                            </div>
                            <div className="Availability">
                                <h3>Availability: </h3> <small>In stock</small>
                            </div>
                            <hr />
                        </div>
                        <div className="box">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                            <hr />
                        </div>
                        <div className="box">
                                <small style={count === 5 ? {display: "block", marginBottom: "6px"} : {display: "none", marginBottom: "6px"}}>you cant add more than 5 items</small>
                            <div className="POrM">
                                <h2 onClick={handleClick} style={{ marginTop: "-18px" }}>_</h2>
                                <h4>{count}</h4>
                                <h2 onClick={handleClick2}>+</h2>
                            </div>
                            <div className="buttons">
                                <button className="add">Add To Cart</button>
                                <FavoriteBorder />
                            </div>
                            <div className="Categories">
                                <h3>Categories: </h3> <small>Cloth,Bags,T-shirt,JeansMen</small>
                            </div>
                            <div className="Tags">
                                <h3>Tags: </h3> <small>Cloth,Bags,T-shirt</small>
                            </div>
                            <div className="icons">
                                <ul className="social">
                                    <li><FacebookIcon /></li>
                                    <li><InstagramIcon /></li>
                                    <li><LinkedInIcon /></li>
                                    <li><WhatsAppIcon /></li>
                                    <li><GitHubIcon /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tabs">
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Product Description" {...a11yProps(0)} />
                            <Tab label="Additional Information" {...a11yProps(1)} />
                            <Tab label="Reviews (1)" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="cont">
                            <img src={IMG} alt="" />
                            <div className="inf">
                                <h4>Adam Crist - <small> Jan 14, 2019</small></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            </div>
                        </div>
                    </TabPanel>
                </Box>
            </div>
            <Footer />
            <ToTop rightt={rightt} setRight={setRight}/>
        </div>
    );
}

export default ShopDetails;