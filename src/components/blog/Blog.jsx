import "./blog.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import G1 from "../../assets/blog1.jpg"
import G2 from "../../assets/blog2.jpg"
import { Link } from "react-router-dom";

function Blog() {
    let any = [{}, {}]
    let any2 = [{img: G1}, {img: G2}]
  return (
    <div className='blog'>
        <div className="boxs">
            <div className="box">
                <h4>Articles & Tips</h4>
                <h1>Latest News</h1>
                <div className="smBoxs">
                {any.map((i, index) => {
                    return (
                        <div className="smBox" key={index}>
                            <h1>How to eat orgainc foods</h1>
                            <hr />
                            <div className="info">
                                <div className="date"><CalendarMonthIcon /> 3 May 2022</div>
                                <Link to="/blogDetails">Read More</Link>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
            <div className="boxs2">
            {any2.map((item, index) => {
                return (
                    <div className="box" key={index}>
                        <div className="img"><img src={item.img} alt="" /></div>
                        <div className="smBox">
                            <h1>How To Find And Afford Organic Food In Your Area</h1>
                            <hr />
                            <div className="info">
                                <div className="date"><CalendarMonthIcon /> 3 May 2022</div>
                                <Link to="/blogDetails">Read More</Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default Blog