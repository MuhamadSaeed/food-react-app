import "./blogOne.css"

import Nav from "../../components/nav/Nav"
import Footer from "../../components/foooter/Footer"
import Aside from "../../components/aside/Aside"
import ToTop from "../../components/toTop/ToTop"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import BG from "../../assets/header.jpg"
import IMG1 from "../../assets/blog1.jpg"
import IMG2 from "../../assets/blog2.jpg"
import IMG3 from "../../assets/blog2.jpg"
import { Link } from "react-router-dom"

function BlogOne({rightt, setRight}) {
    let data = [
        {img: IMG1},
        {img: IMG2},
        {img: IMG3},
        {img: IMG1},
        {img: IMG2},
        {img: IMG3}
    ]

  return (
    <div className="blogone">
        <Nav rightt={rightt} setRight={setRight}/>
        <Aside rightt={rightt} setRight={setRight}/>
        <div className="mainBlogOne" style={{ backgroundImage: `url(${BG})` }}>
            <div className="info">
                <h1>Latest Blog</h1>
                <h4>Home {`>`} Latest Blog</h4>
            </div>
        </div>
        <div className="mainmainmian">
            <div className="titles">
                <h4>Articles & Tips</h4>
                <h1>Latest News</h1>
            </div>
        <div className="boxsblog">
            {data.map((item, ind) => {
                return (
                    <div className="boxblog" key={ind}>
                    <div className="imgblog"><img src={item.img} alt="" /></div>
                    <div className="smBoxblog">
                        <h1>How To Find And Afford Organic Food In Your Area</h1>
                        <hr />
                        <div className="infoblog">
                            <div className="dateblog"><CalendarMonthIcon /> 3 May 2022</div>
                            <Link to="/blogDetails">Read More</Link>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
            </div>
        <Footer />
        <ToTop rightt={rightt} setRight={setRight} />
    </div>
  )
}

export default BlogOne