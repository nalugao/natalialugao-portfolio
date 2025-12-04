import { useState } from "react";
import "../styles/ProjectsList.css";

const exp_jobs = [
  {
    company: "Bayer",
    role: "Analista Júnior de Operações Comerciais",
    highlights: [
      "Aumentei a eficiência operacional em 15% ao aplicar soluções de automação e análise de dados em processos de pós-venda.",
      "Redução de 5 horas semanais no tempo de processamento e diminuição de erros em relatórios corporativos.",
      "Implementação de governança de dados para assegurar conformidade em contratos do setor público.",
    ],
  },
  {
    company: "Bayer",
    role: "Estagiária",
    highlights: [
      "Melhorei a tomada de decisão em vendas B2B ao criar ferramentas automatizadas de controle de estoque e gestão de vendas.",
      "Utilização de SAP e automações em Excel para entrada de dados e relatórios.",
      "Maior integridade das informações e fluxo de trabalho eficiente entre equipes comerciais.",
      "Aplicação de melhoria contínua para reduzir tarefas manuais e aumentar a precisão operacional.",
    ],
  },
];

export default function JobsList() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="projects-container">
      <ul className="projects-list">
        {exp_jobs.map((exp, idx) => (
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
        <h2 className="project-title">
          {exp_jobs[selected].role}{" "}
          
        </h2>
        <ul className="highlights-list">
          {exp_jobs[selected].highlights.map((item, i) => (
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