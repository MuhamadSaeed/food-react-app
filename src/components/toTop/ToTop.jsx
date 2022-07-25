import "./toTop.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";

function ToTop({rightt, setRight}) {
    let [hidden, setHidden] = useState(false)
    let handleClick = () => {
        setTimeout(()  => window.scrollTo({top: 0, behavior: 'smooth'}), 150)
    }
    onscroll = () => {
        if (window.scrollY >= 1100) {
            setHidden(true)
        } else {
            setHidden(false)
        }
        setRight(false)
    }
  return (
    <div id="ToTop" style={hidden ? {display: "block"} : {display: "none"}} onClick={handleClick}>
        <ArrowForwardIosIcon />
    </div>
  )
}

export default ToTop