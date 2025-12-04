import { useState } from "react";
import "../styles/ProjectsList.css";

const exp_projects = [
  {
    company: "LinkAI",
    role: "Web Designer",
    highlights: [
      "O LinkAI é uma extensão de navegador com inteligência artificial desenvolvida para aprimorar a comunicação profissional nas mensagens do LinkedIn. ",
      "Fui responsável pelo desenvolvimento da interface do site utilizando ReactJS e TailwindCSS, criando um layout limpo, responsivo e com foco em desempenho, acessibilidade e design moderno.",
    ],
  },
  {
    company: "SkillsUp",
    role: "Product Designer & Front-end Developer ",
    highlights: [
      "O projeto propõe integrar profissionais a um movimento que acredita no conhecimento compartilhado como solução para impulsionar o desenvolvimento humano e social — uma comunidade em que todos aprendem e ensinam simultaneamente.",
      "Idealizei o layout, funcionalidades e experiência do usuário. Desenvolvi o Front-End das páginas 'Ofereça uma Aula' e 'Meus Agendamentos', além de coordenar a organização e distribuição das tarefas do projeto. Também apoiou no refinamento do código",
      "HTML, CSS, JavaScript, Bootstrap",
    ],
  },
];

export default function ProjectsList() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="projects-container">
      <ul className="projects-list">
        {exp_projects.map((exp, idx) => (
          <li
            key={exp.company}
            className={`project-item ${selected === idx ? "active" : ""}`}
            onClick={() => setSelected(idx)}
          >
            {exp.company}
          </li>
        ))}
      </ul>
      <div className="project-content">
        <h2 className="project-title">{exp_projects[selected].role} </h2>
        <ul className="highlights-list">
          {exp_projects[selected].highlights.map((item, i) => (
            <li key={i} className="highlight-item">
              <span className="bullet">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
