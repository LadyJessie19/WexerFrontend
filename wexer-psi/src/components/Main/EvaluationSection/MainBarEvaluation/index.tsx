import { Link } from 'react-router-dom'
import '../style.css'

const MainBarEvaluation = () => {
  return (
    <div id="evaluationHeader">
      <Link to="/avaliacao"><span><h5>Entrevista Psicológica</h5></span></Link>
      <Link to="/teste"><span><h5>Aplicação de Teste</h5></span></Link>
      <Link to="/comportamento"><span><h5>Observação Comportamental</h5></span></Link>
    </div>
  )
}

export default MainBarEvaluation