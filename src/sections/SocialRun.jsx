import "../styles/socialRun.css";

import mapa from "../assets/mapa.png";
import blur from "../assets/blur.png";
import run from "../assets/run.png";
import evento from "../assets/evento.png";
import dados from "../assets/dados.png";
import mockupRun from "../assets/mockupRun.png";

function SocialRun() {
  return (
    <section className="social-run">

      <div className="grid-container">

        <div className="grid-left">

          <img src={mapa} alt="" />
          <img src={blur} alt="" />
          <img src={run} alt="" />
          <img src={evento} alt="" />

        </div>

        <div className="grid-right">

          <img src={dados} alt="" />

        </div>

        <div className="project-note">

  <p>
    Por questões contratuais e de confidencialidade,
    o nome da empresa e conteúdo não pode ser divulgado.
  </p>

  <p>
    Due to contractual and confidentiality reasons,
    the company name and content cannot be disclosed.
  </p>

</div>

      </div>

        {/* MOCKUP */}
  <img
    src={mockupRun}
    alt=""
    className="mockup-image"
  />

    </section>
  );
}

export default SocialRun;