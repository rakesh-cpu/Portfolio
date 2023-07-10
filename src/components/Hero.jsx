import "./style.css";
import image from "../images/rakeshdontula.jpg";

function Hero() {
  return (
    <div>
      <div className="Hero">
        <div className="left">
          <h3 className="hero-titile">
            <span>Transforming ideas into </span>
            <span>elegant solutions through</span>
            <span> the art of coding.</span>
          </h3>
          <h3 className="hero-subtitle">
            <span>Web Developer | </span>
            <span>Java Developer | </span>
            <span>Full Stack Developer</span>
          </h3>
          <button className="hire-button">Hire me</button>
        </div>
        <div className="right">
          <img src={image} alt="hero" style={{ height: "500px", width: "500px" }} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
