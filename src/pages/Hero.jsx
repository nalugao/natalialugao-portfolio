import "../styles/Home.css";

function Hero() {
  return (
    <div className="page">
      <div className="container">
        <div>
          <h1 className="h1_about">Sobre mim:</h1>
          <p className="p_about">
            Tenho 5 anos na{" "}
            <span className="p_highlight"> área de Negócios</span>, atualmente
            sou estudante de{" "}
            <span className="p_highlight">Engenharia de Software</span>.
          </p>
          <p className="p_about">
            Sempre gostei de{" "}
            <span className="p_highlight">
              automatizar, documentar e inovar
            </span>{" "}
            procedimentos. Com o tempo, percebi que minha curiosidade natural
            pela tecnologia não era só hobby, era um caminho. Descobri nesse
            universo a chance de{" "}
            <span className="p_highlight">
              {" "}
              transformar ideias em soluções reais{" "}
            </span>
            , capazes de facilitar a vida das pessoas e criar{" "}
            <span className="p_highlight">impacto de verdade</span>.
          </p>
          <p className="p_about">
            Hoje, sigo unindo{" "}
            <span className="p_highlight">
              lógica, criatividade e propósito
            </span>
            . Meu principal objetivo é me tornar{" "}
            <span className="p_highlight">desenvolvedora Full Cycle</span> e{" "}
            <span className="p_highlight">desbravar o mundo</span> através do
            código.
          </p>
        </div>
        <div className="div_img">          
            <img
              className="img_about"
              src="/src/assets/icons_img/natalia_funny.png"
              alt="foto pessoal"
            />
          </div>
        </div>
      </div>
  );
}

export default Hero;
