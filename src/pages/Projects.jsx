import "../styles/Home.css";
import ProjectsList from "../components/exp_projects";
import JobsList from "../components/exp_jobs";

function Projects() {
  return (
    <div className="page">
      <div className="projects_content">
      <h1>Minhas Experiências</h1>

      <div>
          <h2>Projetos:</h2>
            <ProjectsList />
          </div>
          <h2>Profissionais:</h2>
            <JobsList />
          </div>
      </div>
  );
}

export default Projects;
