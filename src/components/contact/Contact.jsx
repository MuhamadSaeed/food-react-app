import "./contact.css"
import BG from "../../assets/contact_bg.jpg"

function Contact() {
    return (
    <div className="mainContact">
        <div className="corner"></div>
        <div className="contact">
            <div className="bg"><div className="img" style={{backgroundImage: `url(${BG})`}}></div></div>
            <div className="cont">
                <h4>Get In Touch</h4>
                <h1>Send Us Message</h1>
                <div className="inputs">
                    <div className="main">
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <input type="text" placeholder="Subject"/>
                    <textarea placeholder="Your Message"></textarea>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Contact