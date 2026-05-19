import "../styles/socialEstetica.css";

import envelhecimento from "../assets/envelhecimento.png";
import botox from "../assets/botox.png";
import harmonia from "../assets/harmonia.png";
import acido from "../assets/acido.png";
import resultado from "../assets/resultado.png";
import mockupEstetica from "../assets/mockupEstetica.png";

function SocialEstetica() {
  return (
    <section className="social-estetica">

      <div className="grid-container">

        <div className="grid-left">

          <img src={envelhecimento} alt="" />
          <img src={botox} alt="" />
          <img src={harmonia} alt="" />
          <img src={acido} alt="" />

        </div>

        <div className="grid-right">

          <img src={resultado} alt="" />

        </div>

      </div>

        {/* MOCKUP */}
  <img
    src={mockupEstetica}
    alt=""
    className="mockup-image"
  />

    </section>
  );
}

export default SocialEstetica;