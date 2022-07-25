import "./about.css"
import IMG from "../../assets/about.jpg"

function About() {
  return (
    <div className="about">
        <img src={IMG} alt="" />
        <div className="info">
            <h5>Welcome To Our Fuodborne Farms</h5>
            <h1>Organic Food - Farm Fresh <br></br> Produce Right To Your Door</h1>
            <h4>Natural Products</h4>
            <p>Organically grown crops tend to use natural fertilizers like manure to improve plant growth. Animals raised organically are also not given antibiotic organic hormones most commonly purchased organic .</p>
            <hr />
            <h4>Wheat Cultivation</h4>
            <p>Organically grown crops tend to use natural fertilizers like manure to improve plant growth. Animals raised organically are also not given antibiotic organic hormones most commonly purchased organic </p>
        </div>
    </div>
  )
}

export default About