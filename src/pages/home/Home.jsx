//main
import "./home.css"

//button
import { Button } from "@mui/material"

// images
import MIG from "../../assets/landing-1.jpg"
import MIG2 from "../../assets/landing-2.jpg"
import BG from "../../assets/video_bg.jpg"
import IMAGE1 from "../../assets/process_1.png"
import IMAGE2 from "../../assets/process_2.png"
import IMAGE3 from "../../assets/process_3.png"
import MG1 from "../../assets/why_chose.jpg"
import MG2 from "../../assets/why_choose_bg.jpg"
import BGPrice from "../../assets/bg_2.jpg"

// Swiper 
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from "react"

// icons 
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FlashOnIcon from '@mui/icons-material/FlashOn';

// components
import Nav from "../../components/nav/Nav"
import About from "../../components/about/About"
import Services from "../../components/services/Services"
import Shop from "../../components/shop/Shop"
import Gallery from "../../components/gallery/Gallery"
import Team from "../../components/team/Team"
import Clients from "../../components/clients/Clients"
import Blog from "../../components/blog/Blog"
import Company from "../../components/company/Company"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/foooter/Footer"
import Aside from "../../components/aside/Aside"
import ToTop from "../../components/toTop/ToTop"
import { Link } from "react-router-dom"

function Home({rightt, setRight}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let imgData = [
    {img: MIG}, {img: MIG2}
  ]
  let videoData = [
    {
      icon: <AcUnitIcon />,
      num: 175,
      name: 'Award Winner'
    },
    {
      icon: <HomeIcon />,
      num: 275,
      name: 'Visited Farms'
    },
    {
      icon: <PersonOutlineIcon />,
      num: 324,
      name: 'Happy Customers'
    },
  ]
  let stepsData = [
    {
      img: IMAGE1,
      num: "01",
      step: "step 01",
      para: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant.'
    },
    {
      img: IMAGE2,
      num: "02",
      step: "step 02",
      para: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant.'
    },
    {
      img: IMAGE3,
      num: "03",
      step: "step 03",
      para: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant.'
    },
    {
      img: IMAGE3,
      num: "03",
      step: "step 03",
      para: 'Organically grown crops tend use natural fertilizers like manure to improve growth to plant.'
    },
  ]
  let priceData = [
    {
      name: "Basic Plan",
      details: "$27/month",
      active: false
    },
    {
      name: "Premium Plan",
      details: "$29/month",
      active: true
    },
    {
      name: "Standard Plan",
      details: "$68/month",
      active: false
    },
  ]
  return (
    <div className="home">
        <Nav rightt={rightt} setRight={setRight}/>
        <Aside rightt={rightt} setRight={setRight}/>
        <div className="main">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {imgData.map((item, ind) => {
              return (  
            <SwiperSlide key={ind}>
              <div className="landing" style={{backgroundImage: `url(${item.img})`}}>
                  <div className="info">
                    <h4>professional cleaninng services</h4>
                    <h1>A Huge Variety Fruits <br></br> & Vegetables.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione Voluptas accusamus quibusdam, distinctio ullam repudiandae alias minima. Quo porro enim provident sit unde beatae aut magni illo. Magni, hic?</p>
                    <Link to="/contact"><button>Contact</button></Link>
                  </div>
              </div>
            </SwiperSlide>
              )})}
          </Swiper>
          <About />
          <Services />
          <div className="video" style={{backgroundImage: `url(${BG})`}}>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogActions>
                <Button onClick={handleClose}>X</Button>
              </DialogActions>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                <video width="500" height="360" controls>
                    <source src="https://youtu.be/BDYUV7tx_pM" type="video/mp4" />
                    <source src="https://youtu.be/BDYUV7tx_pM" type="video/ogg" />
                </video>       
                </DialogContentText>
              </DialogContent>
          </Dialog>
            <div className="mainInfo">
              <div className="play" style={{cursor: "pointer"}} onClick={handleClickOpen}><PlayArrowIcon className="mIcon" /></div>
              <h4>Watch Our organic food Video</h4>
              <h1>Everyone's body is different, it<br></br> will take to see changes in your<br></br> body.</h1>
            </div>
            <div className="secInfo">
              {videoData.map((item, index) => {
                return (
                  <div className="one" key={index}>
                    <div className="icon">{item.icon}</div>
                    <div className="small">
                      <h1>{item.num}</h1>
                      <small>{item.name}</small>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="process">
            <h4>Working Process</h4>
            <h1 className="mainh1">How Does We Work</h1>
            <div className="steps">
              {stepsData.map((item, index) => {
                return (
                  <div className="step" key={index}>
                    <div className="img">
                      <img src={item.img} alt="" />
                      <small>{item.num}</small>
                    </div>
                    <h1 className="sh1">{item.step}</h1>
                    <p>{item.para}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="whyChose">
            <div className="img" style={{backgroundImage: `url(${MG1})`}}></div>
            <div className="mInfo" style={{backgroundImage: `url(${MG2})`}}>
              <h4>What We Do</h4>
              <h1>Why Choose Us</h1>
              <div className="boxs">
                <div className="box">
                  <ElectricBoltIcon />
                  <div className="info">
                    <h4>Quick Response</h4>
                    <p>Emergency response time is one hour or less guaranteed at live person will answer your call or you can enter service</p>
                  </div>
                </div>
                <hr />
                <div className="box">
                  <FlashOnIcon />
                  <div className="info">
                    <h4>Very Fast Services</h4>
                    <p>Emergency response time is one hour or less guaranteed at live person will answer your call or you can enter service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Shop />
          <div className="price" style={{backgroundImage: `url(${BGPrice})`}}>
            <h4>Our Special Plan</h4>
            <h1>Our Pricing</h1>
            <div className="boxs">
              {priceData.map((item, index) => {
                return (
                  <div className={item.active ? "box active" : "box"} key={index}>
                    <h3>{item.name}</h3>
                    <h2>{item.details}</h2>
                    <ul>
                      <li>3 Bedrooms cleaning</li>
                      <hr />
                      <li>Vacuuming</li>
                      <hr />
                      <li>2 Bathroom cleaning</li>
                      <hr />
                      <li>Mirror Cleaning</li>
                      <hr />
                      <li>1 Livingroom cleaning</li>
                      <hr />
                      <li>Window Sills</li>
                    </ul>
                    <Link to="/checkout"><button onClick={() => window.scrollTo({top: 0})}>Order Now</button></Link>
                  </div>
                )
              })}
            </div>
          </div>
          <Gallery />
          <Team  />
          <Clients />
          <Blog />
          <Company />
          <Contact />
          <Footer />
          <ToTop rightt={rightt} setRight={setRight}/>
        </div>
    </div>
  )
}

export default Home