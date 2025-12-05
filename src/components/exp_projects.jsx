import { useState } from "react";
import "../styles/ProjectsList.css";

const exp_projects = [
  {
    company: "API de mulheres",
    role: "Back-end Developer",
    website: "https://front-programaria-react-api.vercel.app/",
    Repositório: "https://github.com/nalugao/learning_API",
    highlights: [
      "O projeto do back-end tem como objetivo praticar a construção, teste e aplicação de API - Banco de Dados, para um website que contém a lista das mulheres na tecnologia. Essa listá é gerenciada pelo BD, e é possível incluir cadastro pelo própio site.",
      "Node.js, JavaScript, HTTP, CRUP, JSON, MongoDB, Mongoose, Insomnia, dotenv, cors",
    ],
  },
  {
    company: "SkillsUp",
    role: "Product Designer & Front-end Developer ",
    website: "https://skillsup-livid.vercel.app/index.html.com",
    Youtube:
      "https://www.youtube.https://www.youtube.com/watch?v=1y66SGXUl3o&list=PLGSIu-X0lEsAwN5t9iVMujf0iDEyBGMtf/watch?v=QzzBAoidNws&list=PLGSIu-X0lEsAmSVSW9CEh4uP_Pw7m14vr",
    Repositório:
      "https://github.https://github.com/Sophia-Coelho/GS---Global-Solucion-/nalugao/agroviva-web",
    highlights: [
      "O projeto propõe integrar profissionais a um movimento que acredita no conhecimento compartilhado como solução para impulsionar o desenvolvimento humano e social — uma comunidade em que todos aprendem e ensinam simultaneamente.",
      "Idealizei o layout, funcionalidades e experiência do usuário. Desenvolvi o Front-End das páginas 'Ofereça uma Aula' e 'Meus Agendamentos', além de coordenar a organização e distribuição das tarefas do projeto. Também apoiou no refinamento do código",
      "HTML, CSS, JavaScript, Bootstrap",
    ],
  },
  {
    company: "AgroViva Web",
    role: "Product Designer & Front-end Developer",
    website: "https://agrovivaweb.com",
    Youtube:
      "https://www.youtube.com/watch?v=QzzBAoidNws&list=PLGSIu-X0lEsAmSVSW9CEh4uP_Pw7m14vr",
    Repositório: "https://github.com/nalugao/agroviva-web",
    highlights: [
      "O AgroViva Web conecta comunidade e agricultor e da visibilidade a produtores, valorizando a produção local e diminuindo intermediários.",
      "Idealizei o layout, funcionalidades e experiência do usuário. Desenvolvi o Front-End da página 'Impacto Social', além de coordenar a organização e distribuição das tarefas do projeto. Também apoiou no refinamento do código",
      "HTML, CSS, JavaScript, Bootstrap",
    ],
  },
  {
    company: "LinkAI",
    role: "Web Designer",
    website: "https://linkai.plugin-ai.com.br/",
    highlights: [
      "O LinkAI é uma extensão de navegador com inteligência artificial desenvolvida para aprimorar a comunicação profissional nas mensagens do LinkedIn. ",
      "Fui responsável pelo desenvolvimento da interface do site utilizando ReactJS e TailwindCSS, criando um layout limpo, responsivo e com foco em desempenho, acessibilidade e design moderno.",
    ],
  },

  {
    company: "CourseHub",
    role: "Full-Stack Developer",
    highlights: [
      "O CourseHub é uma plataforma de gerenciamento de cursos, ideal para quem gosta de estudar bastante mas não consegue gerenciar seus cursos e metas.",
      "Idealizei a ideia, funcionalidades e experiência do usuário. A aplicação está em construção",
      "Next.js, TypeScript, Tailwind CSS, Shadcn/UI, Recharts/Chart.js, Python + FastAPI, PostgreSQL, SQLAlchemy – ORM para facilitar a vida, Docker Compose,Google APIs (Calendar API) – integração principal",
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
        <h2 className="project-title">{exp_projects[selected].role}</h2>

        <div className="project-links">
          {exp_projects[selected].website && (
            <a
              href={exp_projects[selected].website}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          )}

          {exp_projects[selected].Youtube && (
            <a
              href={exp_projects[selected].Youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="bi bi-youtube"></i>
            </a>
          )}

          {exp_projects[selected].Repositório && (
            <a
              href={exp_projects[selected].Repositório}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="bi bi-github"></i>
            </a>
          )}
        </div>

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