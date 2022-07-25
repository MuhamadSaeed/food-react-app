import "./contact.css"
import Nav from "../../components/nav/Nav"
import Footer from "../../components/foooter/Footer"
import BG from "../../assets/header.jpg"
import Aside from "../../components/aside/Aside"
import ToTop from "../../components/toTop/ToTop"

import Phone from "@mui/icons-material/Phone"
import Email from "@mui/icons-material/Email"
import Home from "@mui/icons-material/Home"

function Contact({rightt, setRight}) {
  return (
    <div className="contactPage">
        <Nav rightt={rightt} setRight={setRight}/>
        <Aside rightt={rightt} setRight={setRight}/>
        <div className="maincont" style={{backgroundImage: `url(${BG})`}}>
            <div className="info">
                <h1>Contact Us</h1>
                <h4>Home {`>`} Contact Us</h4>
            </div>
        </div>
        <div className="sections">
          <div className="section sectionOne">
            <h4>Get In Touch</h4>
            <h1>Send Us Message</h1>
            <div className="inputs">
              <div className="nameAndEmail">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
              </div>
              <input type="text" placeholder="Subject"/>
              <textarea placeholder="Your Message.."></textarea>
              <button>Send Message</button>
            </div>
          </div>
          <div className="section sectionTwo">
            <h2>Hello there got a project?</h2>
            <div className="contBoxs">
              <div className="contBox">
                <Home />
                <div className="contInfo">
                  <h5>Company Address :</h5>
                  <small>3567 New Alaska, us</small>
                </div>
              </div>
              <div className="contBox">
                <Email />
                <div className="contInfo">
                  <h5>Email Address :</h5>
                  <small>example@email .com</small>
                </div>
              </div>
              <div className="contBox">
                <Phone />
                <div className="contInfo">
                  <h5>Contact Us :</h5>
                  <small>3567 New Alaska, us</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ToTop rightt={rightt} setRight={setRight} />
    </div>
  )
}

export default Contact