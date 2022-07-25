import "./gallery.css"
import Nav from "../../components/nav/Nav"
import Footer from "../../components/foooter/Footer"

import ToTop from "../../components/toTop/ToTop"
import Aside from "../../components/aside/Aside"

import BG from "../../assets/header.jpg"
import IMG1 from "../../assets/work-1.jpg"
import IMG2 from "../../assets/work-2.jpg"
import IMG3 from "../../assets/work-3.jpg"
import { Link } from "react-router-dom"

function Gallery({rightt, setRight}) {
    let data = [
        {
            id: 0,
            img: IMG1,
            name: "Native Orange",
            category: "vegetables"
        },
        {
            id: 1,
            img: IMG2,
            name: "Juicy Grapes",
            category: "Fruits"
        },
        {
            id: 2,
            img: IMG3,
            name: "Fresh Banana",
            category: "Fruits"
        },
        {
            id: 3,
            img: IMG1,
            name: "Native Orange",
            category: "vegetables"
        },
        {
            id: 4,
            img: IMG2,
            name: "Red Watermelon",
            category: "Fruits"
        },
        {
            id: 5,
            img: IMG3,
            name: "Juicy Grapes",
            category: "vegetables"
        },
    ]
  return (
    <div className="galleryPage">
        <Nav rightt={rightt} setRight={setRight}/>
        <Aside rightt={rightt} setRight={setRight}/>
        <div className="mainga" style={{backgroundImage: `url(${BG})`}}>
            <div className="info">
                <h1>Our Gallery</h1>
                <h4>Home {`>`} Our Gallery</h4>
            </div>
        </div>
        <div className="almost">
            <h4>Our Latest Work</h4>
            <h1>Special Gallery</h1>
            <div className="images">
                {data.map(({id, img, name, category}) => {
                    return (
                        <div className="image" key={id}>
                            <img src={img} alt="" />
                            <Link to="/shopDetails">
                                <div className="over">
                                    <h4>{name}</h4>
                                    <div className="cate">Category : <small>{category}</small></div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer />
        <ToTop rightt={rightt} setRight={setRight}/>
    </div>
  )
}

export default Gallery