import "./style.css";

type PropsComp = {
  content: string;
  createdOn: string;
  title: string;
  key?: string;
};

const FactCard = ({ content, createdOn, title }: PropsComp) => {
  const date = () => {
    const date = new Date(createdOn);
    let day = date.toLocaleString("pt-BR", { day: "2-digit" });
    const month = date.toLocaleString("pt-BR", { month: "long" });
    const year = date.getFullYear();
    return `${day} de ${month} de ${year}`;
  };

  return (
    <div className="cardName factCard">
      <div className="divImgCard factLogo">
        <img src="/main/pin.svg" width={"28px"} />
        <div>&nbsp;</div>
      </div>
      <button> ... </button>
      <div>
        <h3>Fato relevante</h3>
        <small>{date()}</small>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default FactCard;
