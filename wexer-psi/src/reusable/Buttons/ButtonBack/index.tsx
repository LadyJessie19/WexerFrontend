import { useNavigate } from "react-router-dom";

type PropsButtonBack = {
  backPath?:string
}

const ButtonBack = ({backPath}:PropsButtonBack) => {
  const navigate = useNavigate();
  
  function navigateTo() {
    navigate(backPath ? backPath : '');
  }
    return (
      <>
        <button className='buttonDesign buttonBack' onClick={navigateTo}> 
          <img src="/buttons/back.svg"/> 
          Retornar á listagem
        </button>
      </>
    )
  }
  
  export default ButtonBack