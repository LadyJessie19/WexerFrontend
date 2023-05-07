import './style.css'

type PropsComp = {
  content:string,
  createdOn:string
  }

const AttachmentCard = ({content, createdOn}:PropsComp) => {
  const date = () => {
    const date = new Date(createdOn)
    let day = date.toLocaleString('pt-BR', { day: '2-digit' })
    const month = date.toLocaleString('pt-BR', { month: 'long' })
    const year = date.getFullYear()
    return `${day} de ${month} de ${year}`
  }
    return (
      <div className="cardName attachmentCard">
        <div className='divImgCard attachmentLogo'>
          <img src="/main/clip.svg" width={'30px'} />
          <div>&nbsp;</div>
        </div>
          <button> ... </button>
          <div>
          <h3>Anexo</h3>
          <small>{date()}</small>
          </div>
          <div>
              <p>{content}</p>
          </div>
      </div>
    )
  }
  
  export default AttachmentCard