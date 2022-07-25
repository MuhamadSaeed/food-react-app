import "./team.css"
import M1 from "../../assets/team1.jpg"
import M2 from "../../assets/team2.jpg"
import M3 from "../../assets/team3.jpg"
import BG from "../../assets/bg_3.jpg"

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';

function Team() {
    let data = [
        {
            img: M1,
            name: "Ben Stcoks",
            small: "Food Farmer"
        },
        {
            img: M2,
            name: "Adam Crew",
            small: "Crop Farmer"
        },
        {
            img: M3,
            name: "Moris Jon",
            small: "Fruit Farmer"
        },
    ]
  return (
    <div className="team" style={{backgroundImage: `url(${BG})`}}>
        <h4>Our Team Mamber</h4>
        <h1>Meet Our Farmers</h1>
        <div className="boxs">
            {data.map((item, ind) => {
                return (
                    <div className="box" key={ind}>
                        <img src={item.img} alt="" />
                        <h2>{item.name}</h2>
                        <small>{item.small}</small>
                        <div className="icons">
                            <FacebookRoundedIcon/>
                            <GitHubIcon />
                            <TwitterIcon />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Team