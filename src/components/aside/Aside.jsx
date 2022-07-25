import "./aside.css"
// Accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Link } from "react-router-dom";

function Aside({rightt, setRight}) {
    let handleClick = () => {
        window.scrollTo({top: 0})
        setRight(false) 
    }
    return (
    <aside className={rightt ? "right0" : ""}>
        <div className="close" onClick={() => setRight(false)}>X</div>
        <div className="main">
            <div className="search"><input type="text" placeholder="Search..."/></div>
            <div className="links">
            <Accordion>
                <h4><Link to="/"><li onClick={handleClick}>Home</li></Link></h4>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <h4>Pages</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <Link to="/gallery"><li onClick={handleClick}>Gallery</li></Link>
                        <Link to="/services"><li onClick={handleClick}>Services Page</li></Link>
                        <Link to="/servicesDetails"><li onClick={handleClick}>Services Details</li></Link>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <h4>Blog</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <Link to="/blogOne"><li onClick={handleClick}>Blog One</li></Link>
                        <Link to="/blogTwo"><li onClick={handleClick}>Blog Two</li></Link>
                        <Link to="/blogDetails"><li onClick={handleClick}>Blog Details</li></Link>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <h4>Shop</h4>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <Link to="/products"><li onClick={handleClick}>Shop</li></Link>
                        <Link to="/shopDetails"><li onClick={handleClick}>Shop Details</li></Link>
                        <Link to="/cart"><li onClick={handleClick}>Shop Cart</li></Link>
                        <Link to="/checkout"><li onClick={handleClick}>Checkout</li></Link>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                    <h4><Link to="/contact"><li onClick={handleClick}>Contact</li></Link></h4>
            </Accordion>
            </div>
            <div className="more">
                <div className="boxs">
                    <div className="box">
                        <LocalPhoneIcon /> 01020453180
                    </div>
                    <div className="box">
                        <EmailIcon /> mohamedsaeed@gmail.com
                    </div>
                    <div className="box">
                        <PublicIcon /> Egypt/ Emansoura/ Elmatareya
                    </div>
                    <div className="box">
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
    </aside>
  )
}

export default Aside