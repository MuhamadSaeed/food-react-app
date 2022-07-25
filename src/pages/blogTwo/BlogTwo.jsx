import "./blogTwo.css"

import Nav from "../../components/nav/Nav"
import Footer from "../../components/foooter/Footer"
import Aside from "../../components/aside/Aside"
import ToTop from "../../components/toTop/ToTop"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import BG from "../../assets/header.jpg"
import G1 from "../../assets/contact_bg.jpg"
import G2 from "../../assets/work-2.jpg"
import IG1 from "../../assets/blog1.jpg"
import IG2 from "../../assets/blog2.jpg"
import { Link } from "react-router-dom"

function BlogTwo({rightt, setRight}) {
    let data = [{img: G1}, {img: G2}]
    let secData = [{img: IG1}, {img: IG2}, {img: IG2}]
    let handleClick = () => {
        window.scrollTo({top: 0})
    }
    return (
    <div className="blogtwo">
        <Nav rightt={rightt} setRight={setRight}/>
        <Aside rightt={rightt} setRight={setRight}/>
        <div className="mainBlogTwo" style={{ backgroundImage: `url(${BG})` }}>
            <div className="info">
                <h1>Latest Blog</h1>
                <h4>Home {`>`} Latest Blog</h4>
            </div>
        </div>
        <div className="almostMain">
            <div className="sections">
                <div className="section">
                    {data.map((item, ind) => {
                        return (
                            <div className="package" key={ind}>
                                <div className="img"><img src={item.img} alt="" /></div>
                                <div className="someInfo">
                                    <small>0 comments</small>  <small> 6 march 2022</small>
                                    <h1>How To Find And Afford Organic Food In Your Area</h1>
                                    <hr />
                                    <p>Conventional farming methods expose produce to chemicals in the form of pesticides, fertilisers, and preser vatives. While these greatly improve productivity, they can be very harmful to human beings, and in large amou nts even cause irreversible damage. Organic food on the other hand, is produced through traditional farming methods, without the use of any artificial compounds or preservatives, making it far safer for human consump tion human beings, and in large amou nts even cause irreversible.</p>
                                    <Link to="/blogDetails"><button onClick={handleClick}>Read More</button></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="pk">
                <div className="search"><input type="search" placeholder="Search.."/></div>
                <div className="one">
                    <h1>Recent Post</h1>
                    {secData.map((item, ind) => {
                        return (
                            <div className="sBox" key={ind}>
                                <img src={item.img} alt="" />
                                <div className="sInfo">
                                    <div className="date"> <CalendarMonthIcon /> 1st dec 2022</div> 
                                    <h2>How To Eat Foods</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="one">
                    <h1>Post Categories</h1>
                    <ul className="postCat">
                        <li>Juicy Grapes</li>
                        <li>Red Watermelon</li>
                        <li>Native Orange</li>
                        <li>Juicy Grapes</li>
                        <li>Fresh Banana</li>
                    </ul>
                </div>
                <div className="one">
                    <h1>Top Tags</h1>
                    <ul className="top">
                        <li>Food</li>
                        <li>Red</li>
                        <li>Grapes</li>
                        <li>Fresh</li>
                        <li>Banana</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
        <ToTop rightt={rightt} setRight={setRight}/>
    </div>
  )
}

export default BlogTwo