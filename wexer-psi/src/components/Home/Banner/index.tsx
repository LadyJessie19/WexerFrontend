import "../style.css";

const Banner = () => {
  return (
    <>
      <div className="dFlex">
        <div id="greenBanner">
          <div id="logoBanner">
            <img src="/home/green-gradient.svg" />
            <img src="/home/woman.svg" id="woman" />
          </div>
          <div id="textBanner">
            <h1>Olá, Daniel Silva!</h1>
            <p>Para iniciar o atendimento, selecione ou cadastre um paciente</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
