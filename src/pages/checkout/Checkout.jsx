import "./checkout.css"

import Nav from "../../components/nav/Nav"
import Footer from "../../components/foooter/Footer"
import Aside from "../../components/aside/Aside";
import ToTop from "../../components/toTop/ToTop";

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import BG from "../../assets/header.jpg"

function Checkout({rightt, setRight}) {
    return (
        <div className="checkout">
        <Nav rightt={rightt} setRight={setRight}/>
        <Aside rightt={rightt} setRight={setRight}/>
            <div className="mainCheckout" style={{ backgroundImage: `url(${BG})` }}>
                <div className="info">
                    <h1>Shopping Cart</h1>
                    <h4>Home {`>`} Shopping Cart</h4>
                </div>
            </div>
            <div className="almostMain">
                <div className="boxs">
                    <div className="box">
                        <h1>Billing details</h1>
                        <form className="main" action="">
                            <div className="names">
                                <div className="one">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" />
                                </div>
                                <div className="one">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <label htmlFor="">Company Name</label>
                            <input type="text" />
                            <label htmlFor="">Address</label>
                            <input type="text" />
                            <label htmlFor="">Town / City</label>
                            <input type="text" />
                            <label htmlFor="">Company Name</label>
                            <input type="text" />
                            <div className="secondDic">
                                <label htmlFor="">Country</label>
                                <input type="text" />
                                <label htmlFor="">Zib Code</label>
                                <input type="text" />
                            </div>
                            <label htmlFor="">Email</label>
                            <input type="email" />
                            <label htmlFor="">Phone Number</label>
                            <input type="text" />
                        </form>
                    </div>
                    <div className="box">
                        <h1>Shipping to the other address</h1>
                        <label htmlFor="">Other Notes</label>
                        <textarea placeholder="Add Other Notes..."></textarea>
                        <div className="smBoxs">
                            <div className="smBox">
                                <CalendarMonthIcon />
                                <small>Returning customer?</small>
                                <h5>Click here to login</h5>
                            </div>
                            <div className="smBox">
                                <CalendarMonthIcon />
                                <small>Have a coupon?</small>
                                <h5>Click Here To Enter Your Code</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="payment">
                <h1>Payment method</h1>
                <form className="paymentForm" >
                    <label className="checkbox">
                        <input type="checkbox" value="option1" />
                        Direct Bank Transfer
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" value="option2" />
                        Cheque Payment
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" value="option3" />
                        PayPal Payment
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" value="option4" />
                        Google Checkout
                    </label>
                    <button className="more-link">Place An Order</button>
                </form>
            </div>
            <Footer />
            <ToTop rightt={rightt} setRight={setRight} />
        </div>
    )
}

export default Checkout