import "./single.css"

import Nav from "../../components/nav/Nav"
import Footer from "../../components/foooter/Footer"
import ToTop from "../../components/toTop/ToTop"
import Aside from "../../components/aside/Aside"

import BG from "../../assets/header.jpg"
import IMGOne from "../../assets/blog5.jpg"
import IMGTwo from "../../assets/process_3.png"
import IMGThree from "../../assets/process_4.png"

function SingleSer({rightt, setRight}) {
  return (
    <div className="singleSer">
        <Nav rightt={rightt} setRight={setRight}/>
        <Aside rightt={rightt} setRight={setRight}/>
        <div className="mainSingle" style={{backgroundImage: `url(${BG})`}}>
            <div className="info">
                <h1>Single Services</h1>
                <h4>Home {`>`} Single Services</h4>
            </div>
        </div>
        <div className="sections">
            <div className="mainSection">
                <img className="mainimg" src={IMGOne} alt="" />
                <h1>Cleaning company offers a full range of daily services</h1>
                <p>Loren ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt know you labore et dolore magna aliqua consectetur adipiscingLoren ipsum dolor consectetur adipiscing elit sed do eiusmod tempor ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
                <p>Loren ipsum dolor consectetur adipiscing elit sed do eiusmod tempor incididunt know you labore et dolore magna aliqua consectetur adipiscingLoren ipsum dolor conse ctetur sed adipi scing elit to sed do eiusmod tempor ipsum dolor consectetur adipiscing elit sed do eiu smod temp inci did know you labore et dolore magna aliqua consec consectetur elit tapp adipiscingLoren ipsum dol</p>
                <div className="mainBoxs">
                    <div className="mainBox">
                        <img src={IMGTwo} alt="" />
                        <h1>Fresh Vegetable</h1>
                        <p>Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you</p>
                    </div>
                    <div className="mainBox">
                        <img src={IMGThree} alt="" />
                        <h1>Fresh Fruits</h1>
                        <p>Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you</p>
                    </div>
                </div>
            </div>
            <div className="secondSection">
                <ul className="some">
                    <li>Fresh Vegetable</li>
                    <li>Fresh Fruits</li>
                    <li>Natural Wheats</li>
                    <li>Red Watermelon</li>
                    <li>Juicy Grapes</li>
                    <li>Fresh Banana</li>
                </ul>
                <div className="contact">
                    <h1>Contact</h1>
                    <h5>+122 (345) 345 72</h5>
                    <h5>info-revita@acb.com</h5>
                    <h5>#27, East Madison Ave, <br />Melbourne, Australia</h5>
                </div>
                <div className="downloads">
                    <h1>Downloads</h1>
                    <p>Loren ipsum dolor cons ectetur adip iscing elit sed do eiu smod tempor</p>
                    <button>Download As PDF</button>
                    <button>Download As DOC</button>
                </div>
            </div>
        </div>
        <Footer />
        <ToTop rightt={rightt} setRight={setRight}/>
    </div>
  )
}

export default SingleSer