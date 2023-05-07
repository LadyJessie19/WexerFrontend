import './style.css'

type PropsComp = {
  key:string,
  title:string,
  content:string,
  createdOn:string
  }

const EvaluationCard = ({content, createdOn}:PropsComp) => {
  const date = () => {
    const date = new Date(createdOn)
    let day = date.toLocaleString('pt-BR', { day: '2-digit' })
    const month = date.toLocaleString('pt-BR', { month: 'long' })
    const year = date.getFullYear()
    return `${day} de ${month} de ${year}`
  }
    return (
      <div className="cardName evaluationCard">
        <div className='divImgCard evaluationLogo'>
          <img src="/main/note.svg" width={'26px'} />
          <div>&nbsp;</div>
        </div>
          <button> ... </button>
          <div>
          <h3>Avaliação Psicológica</h3>
          <small>{date()}</small>
          </div>
          <div>
              <p>{content}</p>
          </div>
      </div>
    )
  }
  
  export default EvaluationCard