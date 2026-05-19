import "../styles/socialChurras.css";

import app from "../assets/app.png";
import familia from "../assets/familia.png";
import qualidade from "../assets/qualidade.png";
import tradicao from "../assets/tradicao.png";
import mockupChurras from "../assets/mockupChurras.png";

function SocialChurras() {
  return (
    <section className="social-Churras">

      {/* GRID SUPERIOR */}
      <div className="churras-grid">

        <img src={app} alt="" />
        <img src={familia} alt="" />
        <img src={qualidade} alt="" />
        <img src={tradicao} alt="" />

      </div>

      {/* MOCKUP */}
      <img
        src={mockupChurras}
        alt=""
        className="churras-mockup"
      />

    </section>
  );
}

export default SocialChurras;