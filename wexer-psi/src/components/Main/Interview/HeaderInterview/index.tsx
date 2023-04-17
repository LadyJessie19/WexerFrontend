type PropsComp = {
    title: string,
    buttons: boolean
}

const HeaderInterview = ({title, buttons}:PropsComp) => {
  return (
    <>
        <div className="headerInterview">
            <div>
                <h2>{title}</h2>
            </div>
            {buttons && (<div className="headerButtons">
                <button>Retornar á listagem</button>
                <button>Salvar</button>
            </div>)}
        </div>
    </>
  )
}

export default HeaderInterview