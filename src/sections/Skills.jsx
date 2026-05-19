import "../styles/skills.css";

import potoshop from "../assets/photoshop.png";
import aftereffects from "../assets/after-effects.png";
import lightroom from "../assets/lightroom.png";
import illustrator from "../assets/illustrator.png";
import figma from "../assets/figma.png";

function Skills() {
  return (
    <section className="skills">
      <div className="skills-container">
        <img src={potoshop} alt="Photoshop" />
        <img src={aftereffects} alt="After Effects" />
        <img src={lightroom} alt="Lightroom" />
        <img src={illustrator} alt="Illustrator" />
        <img
             src={figma}
             alt="Figma"
             className="figma-icon"
        />
      </div>
    </section>
  );
}

export default Skills;
