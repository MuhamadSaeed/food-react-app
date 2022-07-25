import "./services.css"

import BG from "../../assets/header.jpg"

import Nav from "../../components/nav/Nav"
import Footer from "../../components/foooter/Footer"
import SVR from "../../components/services/Services"
import ToTop from "../../components/toTop/ToTop"
import Aside from "../../components/aside/Aside"


function Services({rightt, setRight}) {
  return (
    <div className="servicesPage">
        <Nav rightt={rightt} setRight={setRight}/> 
        <Aside rightt={rightt} setRight={setRight}/>
        <div className="mainser" style={{backgroundImage: `url(${BG})`}}>
            <div className="info">
                <h1>Our Services</h1>
                <h4>Home {`>`} Our Services</h4>
            </div>
        </div>
        <div className="svrs">
            <SVR />
            <SVR />
        </div>
        <Footer />
        <ToTop rightt={rightt} setRight={setRight}/>
    </div>
  )
}

export default Services