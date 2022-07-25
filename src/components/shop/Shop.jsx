import "./shop.css"
import MG1 from "../../assets/product_1.png"
import MG2 from "../../assets/product_2.png"
import MG3 from "../../assets/product_3.png"
import MG4 from "../../assets/product_4.png"

import StarIcon from '@mui/icons-material/Star';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"

function Shop() {
    let data = [
        {
            img: MG1,
            name: "Juicy Grapes",
            num: "$46.00",
            small: "6%",
        },
        {
            img: MG2,
            name: "Red Watermelon",
            num: "$56.00",
            small: "5%",
        },
        {
            img: MG3,
            name: "Juicy Orange",
            num: "$46.00",
            small: "5%",
        },
        {
            img: MG4,
            name: "Fresh Banana",
            num: "$46.00",
            small: "5%",
        },
    ]
  return (
    <div className="shop">
        <h4>Our Featured Products</h4>
        <h1>Organic Products</h1>
        <div className="boxs">
            {data.map(({img, name, num, small}, index) => {
                return (
                    <div className="box" key={index}>
                        <div className="over"></div>
                        <img src={img} alt="" />
                        <div className="icons">
                            <LocalGroceryStoreIcon />
                            <FavoriteBorder />
                        </div>
                        <h3>{name}</h3>
                        <div className="stars">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                        <div className="num">{num}</div>
                        <small>{small}</small>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Shop