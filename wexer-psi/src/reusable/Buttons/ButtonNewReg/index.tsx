    type PropsButton = {
      btnFunction?: () => void,
      lightTheme: boolean
    }
    
    const ButtonNewReg = ({btnFunction, lightTheme}:PropsButton) => {
    return (
      <>
        {lightTheme ? (
          <button className='buttonDesign buttonNewReg lightTheme' onClick={btnFunction}> Novo Cadastro <img src="/buttons/greenArrow.svg" /> </button>
        ) : (
          <button className='buttonDesign buttonNewReg' onClick={btnFunction}><img src="/buttons/newAdd.svg" /> Novo Cadastro </button>
        )}
      </>
    )
  }
  
  export default ButtonNewReg