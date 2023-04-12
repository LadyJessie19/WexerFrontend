import '../style.css'

const InterviewType = () => {
  return (
    <>
        <div id="backInterview">
            <div id="headerInterview">
                <input type="checkbox" checked />
                <label><strong> Tipo de entrevistas</strong> 
                <select></select>
                </label>
            </div>
            <div id="bodyInterview">
                <small>Questões da entrevista</small>
                <small>1-</small>
                <small>2-</small>
                <small>3-</small>
                <small>4-</small>
                <small>5-</small>
                <small>6-</small>
                <small>7-</small>
                <small>8-</small>
                <small>9-</small>
                <small>10-</small>
            </div>
            <div id="footerInterview">
                <button>Editar</button>
            </div>
        </div>
    </>
  )
}

export default InterviewType