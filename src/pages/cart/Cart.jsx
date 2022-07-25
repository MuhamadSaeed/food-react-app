import "./cart.css"

import Footer from "../../components/foooter/Footer"
import Nav from "../../components/nav/Nav"
import ToTop from "../../components/toTop/ToTop"
import Aside from "../../components/aside/Aside"

import BG from "../../assets/header.jpg"
import IMG1 from "../../assets/product_1.png"
import IMG2 from "../../assets/product_1.png"

function Cart({rightt, setRight}) {
    const handleClick = (e) => {
        e.target.parentElement.remove()
    }

  return (
    <div className="cart">
        <Nav rightt={rightt} setRight={setRight}/>
        <Aside rightt={rightt} setRight={setRight}/>
        <div className="mainCart" style={{ backgroundImage: `url(${BG})` }}>
            <div className="info">
                <h1>Our Products</h1>
                <h4>Home {`>`} Shopping Cart</h4>
            </div>
        </div>
        <div className="almostMain">
            <h1>Shopping Cart</h1>
            <div className="table">
            <table>
                <thead>
                <tr>
                    <th>PRODUCT</th>
                    <th>PRODUCTS NAME</th>
                    <th>PRICE</th>
                    <th>QTY</th>
                    <th>TOTAL</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={IMG1} alt="" /></td>
                        <td>Samsung Mobile</td>
                        <td>$160.00</td>
                        <td><input type="number" placeholder="0"/></td>
                        <td>$160.00</td>
                        <td style={{cursor: "pointer"}} onClick={handleClick}>delete</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td><img src={IMG2} alt="" /></td>
                        <td>Samsung Laptop</td>
                        <td>$178.00</td>
                        <td><input type="number" placeholder="0"/></td>
                        <td>$457.00</td>
                        <td style={{cursor: "pointer"}} onClick={handleClick}>delete</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        <div className="information">
            <div className="boxs">
                <div className="box">
                    <h1>Discount Codes</h1>
                    <label htmlFor="">Enter your coupon code if you have one.</label>
                    <input type="text" />
                    <button>Apply</button>
                </div>
                <div className="box">
                    <h1>Estimate Shipping and Tax</h1>
                    <div className="smBox">
                        <label htmlFor="">Country</label>
                        <select name="" id="">
                            <option value="">England</option>
                            <option value="">Egypt</option>
                            <option value="">USA</option>
                            <option value="">France</option>
                        </select>
                    </div>
                    <div className="smBox">
                        <label htmlFor="">State/Province</label>
                        <input type="text" placeholder="Dhaka"/>
                    </div>
                    <div className="smBox">
                        <label htmlFor="">Zip/Postal Code</label>
                        <input type="text" />
                    </div>
                    <button>Get A</button>
                </div>
                <div className="box">
                    <h1>Cart Totals</h1>
                    <div className="divs">
                        <div className="div"><h4>Subtotal</h4> <h4>$230.00</h4></div>
                        <div className="div"><h4>Delivery</h4> <h4>$10.00</h4></div>
                        <div className="div"><h4>Discount</h4> <h4>$20.00</h4></div>
                    </div>
                    <hr />
                    <div className="Total"><h3>Total</h3><div className="num">$200.00</div></div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
        <Footer />
        <ToTop rightt={rightt} setRight={setRight}/>
    </div>
  )
}

export default Cart