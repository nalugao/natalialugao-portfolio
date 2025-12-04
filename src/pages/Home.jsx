import "../styles/Home.css";

function Home() {
  return (
    <div className="page">
      <div className="home_content">
        <p>oi! me chamo</p>
        <h1>Natalia Lugão</h1>
        <p>
          uma <span className="p_highlight">sonhadora</span> e aspirante a{" "}
          <span className="p_highlight">engenheira</span> de software.
        </p>
        <div className="buttons">
          <a
            href="/src/assets/curriculum.pdf"
            download="CV_NATALIA_LUGAO_PT.pdf"
            className="btn_download"
          >
            Download CV
          </a>
          <a
            href="mailto:nalugao@hotmail.com?subject=Contato%20pelo%20Portfólio&body=Olá%20Natália,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
            className="btn_email"
          >
            Me envie um e-mail
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
