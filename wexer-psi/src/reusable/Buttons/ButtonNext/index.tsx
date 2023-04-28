type CompProps = {
  onClick?: () => void
}

const ButtonNext = ({onClick}:CompProps) => {
    return (
      <>
        <button className='buttonDesign buttonNext' onClick={onClick}>Prosseguir <img src="/buttons/whiteArrow.svg" /></button>
      </>
    )
  }
  
  export default ButtonNext