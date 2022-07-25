import "./footer.css"

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

import Logo from "../../assets/footer_logo.png"
import Blog1 from "../../assets/blog1.jpg"
import Blog2 from "../../assets/blog2.jpg"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
        <div className="container">
        <div className="boxs">
            <div className="box boxOne">
                <img src={Logo} alt="" />
                <p>Loren ipsum dolor conse <br /> ctetur at adipis cing elit sed <br /> do eiu smod of tempor inci <br /> didunt know youlab a et <br /> dolore magna aliqua</p>
                <ul className="social">
                    <li><FacebookIcon /></li>
                    <li><InstagramIcon /></li>
                    <li><LinkedInIcon /></li>
                    <li><WhatsAppIcon /></li>
                    <li><GitHubIcon /></li>
                </ul>
            </div>
            <div className="box boxTwo">
                <h1>Quick Link</h1>
                <ul className="links">
                    <li><ArrowForwardIosIcon />Help and Ordering</li>
                    <li><ArrowForwardIosIcon />Return & Cancellation</li>
                    <li><ArrowForwardIosIcon />Online Organic Service</li>
                    <li><ArrowForwardIosIcon />Delevery Schedule</li>
                    <li><ArrowForwardIosIcon />Online Organic Service</li>
                </ul>
            </div>
            <div className="box boxThree">
                <h1>Latest Articles</h1>
                <div className="smBox">
                    <img src={Blog1} alt="" />
                    <div className="info">
                        <small><CalendarMonthIcon /> March 18, 2022</small>
                        <h3>How to Eat Organic Foods</h3>
                    </div>
                </div>
                <div className="smBox">
                    <img src={Blog2} alt="" />
                    <div className="info">
                        <small><CalendarMonthIcon /> March 18, 2022</small>
                        <h3>How to Eat Organic Foods</h3>
                    </div>
                </div>
            </div>
            <div className="box boxFour">
                <h1>Newsletter</h1>
                <p>Subscribe our newsletter to<br /> get more update & join to<br /> fuodborne</p>
                <input type="email" placeholder="Email Adress"/>
                <Link to="/contact" onClick={() => window.scrollTo({top: 0})}><button>Subscribe</button></Link>
            </div>
        </div>
        <div className="copyRight">2022 © Copyright Fuodborne, Mohammed Saeed. All Rights Reserved.</div>
        </div>
    </div>
  )
}

export default Footer