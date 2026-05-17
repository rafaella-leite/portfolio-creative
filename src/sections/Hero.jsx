import "../styles/hero.css";
import womanImage from "../assets/woman.png";

function Hero() {
  return (
    <section className="hero">

      {/* Nome topo */}
      <div className="hero-top">
        <span className="left-name">
            Rafaella
        </span>

        <span className="right-name">
            Leite
        </span>

      </div>

      {/* Texto gigante */}
      <h1 className="hero-title">PORTFÓLIO</h1>

      {/* Palavra creative */}
      <h2 className="hero-creative">creative</h2>

      {/* Imagem */}
      <div className="hero-image-container">
        <img
          src={womanImage}
          alt="Rafaella"
          className="hero-image"
        />
      </div>

      {/* Textos laterais */}
      <div className="hero-bottom">

        <span className="left-text">
            <p>
            Design estratégico
            <br />
            focado em experiência,
            <br />
            clareza e valor.
            </p>
        </span>

        <span className="right-text">
            <p>
            Strategic design focused
            <br />
            on experience, clarity,
            <br />
            and value.
            </p>
        </span>
      </div>
    </section>
  );
}

export default Hero;