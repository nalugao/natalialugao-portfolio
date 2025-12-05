import "../styles/Home.css";
import html from "../assets/icons_img/html.png"
import css from "../assets/icons_img/css-3.png"
import tailwind from "../assets/icons_img/tailwind.svg"
import git from "../assets/icons_img/git (1).png"
import bootstrap from "../assets/icons_img/bootstrap.png"
import linux from "../assets/icons_img/linux.png"
import python from "../assets/icons_img/python.png"
import javascript from "../assets/icons_img/js.png"
import react from "../assets/icons_img/reactjs.png"
import postgresql from "../assets/icons_img/database.png"
import algorithm from "../assets/icons_img/algorithm.png"
import mongodb from "../assets/icons_img/mongodb.png"


function Skills() {
  return (
    <div className="page">
      <div className="skills_content">
        <h1>Essas são minhas skills</h1>

        <div class="skill-category">
          <ul class="skills-list">
            <li>
              <img src={html} alt="HTML logo" />
              <p>HTML</p>
            </li>
            <li>
              <img src={css} alt="CSS logo" />
              <p>CSS</p>
            </li>
            <li>
              <img src={tailwind} alt="tailwind logo" />
              <p>Tailwind</p>
            </li>
            <li>
              <img src={git} alt="git logo" />
              <p>Git</p>
            </li>
            <li>
              <img src={bootstrap} alt="bootstrap logo" />
              <p>Bootstrap</p>
            </li>
            <li>
              <img src={linux} alt="linux logo" />
              <p>Linux</p>
            </li>
          </ul>
        </div>

        <div class="skill-category">
          <ul class="skills-list">
            <li>
              <img src={python} alt="Python logo" />
              <p>Python</p>
            </li>
            <li>
              <img src={javascript} alt="javascript logo" />
              <p>JavaScript</p>
            </li>
            <li>
              <img src={react} alt="reactjs logo" />
              <p>ReactJS</p>
            </li>
            <li>
              <img src={postgresql} alt="postgresql logo" />
              <p>PostgreSQL</p>
            </li>
            <li>
              <img src={mongodb} alt="mongodb logo" />
              <p>MongoDB</p>
            </li>
            <li>
              <img src={algorithm} alt="algoritmo logo" />
              <p>Algoritmos e Estrutura de Dados</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
