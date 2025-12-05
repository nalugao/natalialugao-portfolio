import "../styles/Home.css";
import html from "../assets/icons_img/html.png"


function Skills() {
  return (
    <div className="page">
      <div className="skills_content">
        <h1>Essas são minhas skills</h1>

        <div class="skill-category">
          <h2>Consolidados:</h2>
          <ul class="skills-list">
            <li>
              <img src={html} alt="HTML logo" />
              <p>HTML</p>
            </li>
            <li>
              <img src="/src/assets/icons_img/css-3.png" alt="CSS logo" />
              <p>CSS</p>
            </li>
            <li>
              <img src="/src/assets/icons_img/tailwind.svg" alt="tailwind logo" />
              <p>Tailwind</p>
            </li>
            <li>
              <img src="/src/assets/icons_img/git (1).png" alt="git logo" />
              <p>Git</p>
            </li>
            <li>
              <img src="/src/assets/icons_img/bootstrap.png" alt="bootstrap logo" />
              <p>Bootstrap</p>
            </li>
            <li>
              <img src="/src/assets/icons_img/linux.png" alt="linux logo" />
              <p>Linux</p>
            </li>
          </ul>
        </div>

        <div class="skill-category">
          <h2>Praticando:</h2>
          <ul class="skills-list">
            <li>
              <img src="/src/assets/icons_img/python.png" alt="Python logo" />
              <p>Python</p>
            </li>
            <li>
              <img src="/src/assets/icons_img/js.png" alt="javascript logo" />
              <p>JavaScript</p>
            </li>
            <li>
              <img src="/src/assets/icons_img/reactjs.png" alt="reactjs logo" />
              <p>ReactJS</p>
            </li>
            <li>
              <img src="/src/assets/icons_img/database.png" alt="postgresql logo" />
              <p>PostgreSQL</p>
            </li>
            <li>
              <img src="/src/assets/icons_img/algorithm.png" alt="algoritmo logo" />
              <p>Algoritmos e Estrutura de Dados</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
