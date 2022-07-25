// main
import "./blogDetails.css"

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// images
import BG from "../../assets/header.jpg"
import IG1 from "../../assets/blog1.jpg"
import IG2 from "../../assets/blog2.jpg"
import IMG1 from "../../assets/testimonial1.jpg"
import IMG2 from "../../assets/testimonial2.jpg"

// components
import Nav from "../../components/nav/Nav"
import Footer from "../../components/foooter/Footer"
import ToTop from "../../components/toTop/ToTop"
import Aside from "../../components/aside/Aside"

function BlogDetails({rightt, setRight}) {
    let data2 = [{img: IMG1}, {img: IMG2, classItem: "leftSeca"}]
    let secData = [{img: IG1}, {img: IG2}, {img: IG2}]

  return (
    <div className="blogDetails">
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
                            <div className="package" >
                                <div className="img"><img src={IG1} alt="" /></div>
                                <div className="someInfo">
                                    <small>0 comments</small>  <small> 6 march 2022</small>
                                    <h1>Organic Food Contributes To Better Health Through Reduced.</h1>
                                    <hr />
                                    <p>Conventional farming methods expose produce to chemicals in the form of pesticides, fertilisers, and preser vatives. While these greatly improve productivity, they can be very harmful to human beings, and in large amou nts even cause irreversible damage. Organic food on the other hand, is produced through traditional farming methods, without the use of any artificial compounds or preservatives, making it far safer for human consump tion human beings, and in large amou nts even cause irreversible.</p>
                                    <p>Lorem ipsum dolor sit amet, in urna molestie tristique. Cong erment sed at facilisis lacinia aliqu after fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis euelito an rem ipsum psum dolor sit amet molestie cras morbi in facilisis eu elit Lorem ipsum psum dolor sit amet, in urna molestie tristique</p>
                                    <p>in urna molestie tristique. Cong erment sed at facilisi lacinia aliqua fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis eu elit Lorem ipsum si porta ligula nibh vel congue cras morbi in facilisis eu</p>
                                    <h1>Benefits of summer cleaning tips how to clean office</h1>
                                    <p>Lorem ipsum dolor sit amet, in urna molestie tristique. Cong erment sed at facilisis lacinia aliqu after fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis euelito an rem ipsum psum dolor sit amet molestie cras morbi in facilisis eu elit Lorem ipsum psum dolor sit amet, in urna molestie tristique</p>
                                    <div className="qoute"><q>How to clean office cleaning company offers a full range of daily services facilisis euelito an rem ipsum psum dolor sit molestie cras morbi in</q> <h3>Adam Josef</h3></div>
                                    <p>Lorem ipsum dolor sit amet, in urna molestie tristique. Cong erment sed at facilisis lacinia aliqu after fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis euelito an rem ipsum psum dolor sit amet molestie cras morbi in facilisis eu elit Lorem ipsum psum dolor sit amet, in urna molestie tristique</p>
                                    <p>in urna molestie tristique. Cong erment sed at facilisi lacinia aliqua fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras morbi in facilisis eu elit Lorem ipsum si porta ligula nibh vel congue cras morbi in facilisis eu</p>
                                    <hr />
                                    <div className="lastInfo">
                                        <div className="tags">
                                            <h4>tags: </h4>
                                            <ul className="tags">
                                                <li> Food </li>
                                                <li> Red </li>
                                                <li> Grapes</li>
                                                <li> Fresh</li>
                                            </ul>
                                        </div>
                                        <div className="icons">
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
        <div className="comments">
            <h1>2 Comments</h1>
            {data2.map((item, ind) => {
                return (
                    <div className={`comment ${item.classItem}`} key={ind}>
                        <div className="img"><img src={item.img} alt="" /></div>
                        <div className="commentInfo">
                            <div className="name">John Doe</div>
                            <div className="commentDate">2 Nov 2022</div>
                            <div className="para">Lorem ipsum dolor sit amet, in urna molestie tristique. A fermentum sed at faci lisis lacin ia aliquam fusce wisi porta ligula nibh vel congue diam. Sed ligula erat molestie cras</div>
                            <button className="commentButton">Reply</button>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="leaveAcomment">
            <h1>Leave A Comment</h1>
            <textarea placeholder="Leave a message"></textarea>
            <div className="nameAEmail">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
            </div>
            <button>Post comment</button>
        </div>
        <Footer />
        <ToTop rightt={rightt} setRight={setRight}/>
    </div>
  )
}

export default BlogDetails;