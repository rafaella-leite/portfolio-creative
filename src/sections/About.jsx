import "../styles/about.css";

import aboutWoman from "../assets/about-woman.png";
import arrow from "../assets/arrow.svg";

function About() {
  return (
    <section className="about">

      <div className="about-left">

        <span className="about-name">
          Rafaella Leite
        </span>

        <img
          src={arrow}
          alt="Arrow"
          className="about-arrow"
        />

        <img
          src={aboutWoman}
          alt="Rafaella"
          className="about-image"
        />

      </div>

      <div className="about-right">

        <span className="about-quote">
          “
        </span>

        <p>
            Sou designer com olhar voltado para estética,
            conceito e construção de experiências visuais autênticas.
            Há mais de 5 anos atuando na área criativa, desenvolvo projetos
            que unem identidade, estratégia e direção criativa, explorando 
            composições modernas, detalhes visuais e narrativas que fortalecem a 
            conexão entre marca e público.

            <br />
            <br />

            Graduanda em Sistemas de Informação, trago uma visão que conecta 
            criatividade e tecnologia, permitindo desenvolver soluções visuais 
            de forma mais estratégica, funcional e contemporânea. Tenho grande 
            interesse por design digital, branding e comunicação visual, buscando 
            transformar ideias em projetos que equilibram personalidade, propósito 
            e impacto visual.

            <br />
            <br />
            <br />

            I am a designer with a focus on
            aesthetics, concept, and the creation of
            authentic visual experiences. With over 5 years
            of experience in the creative field, I develop
            projects that combine identity, strategy, and creative
            direction, exploring modern compositions, visual details,
            and narratives that strengthen the connection between brand
            and audience.
            
            <br />
            <br />
            
            As a graduate student in Information Systems,
            I bring a vision that connects creativity and technology,
            allowing me to develop visual solutions in a more strategic,
            functional, and contemporary way. I have a strong interest in digital
            design, branding, and visual communication, seeking to transform
            ideas into projects that balance personality, purpose,
            and visual impact.
        </p>

      </div>

    </section>
  );
}

export default About;