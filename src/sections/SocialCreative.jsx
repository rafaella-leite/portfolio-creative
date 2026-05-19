import "../styles/socialCreative.css";

import multidao from "../assets/multidao.png";
import letra from "../assets/letra.png";
import portfolio from "../assets/portfolio.png";
import bonitas from "../assets/bonitas.png";
import lembrado from "../assets/lembrado.png";
import mockup from "../assets/mockup.png";

function SocialCreative() {
  return (
    <section className="social-Creative">

      <div className="grid-container">

        <div className="grid-left">

          <img src={multidao} alt="" />
          <img src={letra} alt="" />
          <img src={portfolio} alt="" />
          <img src={bonitas} alt="" />

        </div>

        <div className="grid-right">

          <img src={lembrado} alt="" />

        </div>

      </div>

        {/* MOCKUP */}
  <img
    src={mockup}
    alt=""
    className="mockup-image"
  />

    </section>
  );
}

export default SocialCreative;