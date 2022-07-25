import "./products.css"

import Nav from "../../components/nav/Nav"
import Footer from "../../components/foooter/Footer"
import Shop  from "../../components/shop/Shop"
import ToTop from "../../components/toTop/ToTop"
import Aside from "../../components/aside/Aside"

import BG from "../../assets/header.jpg"

function Products({rightt, setRight}) {
  return (
    <div className="products">
        <Nav rightt={rightt} setRight={setRight}/>
        <Aside rightt={rightt} setRight={setRight}/>
        <div className="mainPro" style={{backgroundImage: `url(${BG})`}}>
            <div className="info">
                <h1>Our Products</h1>
                <h4>Home {`>`} Our Products</h4>
            </div>
        </div>
        <div className="almostMain">
            <Shop />
            <Shop />
        </div>
        <Footer />
        <ToTop rightt={rightt} setRight={setRight}/>
    </div>
  )
}

export default Products