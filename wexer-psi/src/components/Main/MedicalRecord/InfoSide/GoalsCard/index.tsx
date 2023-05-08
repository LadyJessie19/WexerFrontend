import { useEffect, useState } from "react";
import ModalService from "../../../../../Modals/ModalService"
import { getPatient } from "../../../../../services/functions";

const GoalsCard = () => {
  let userInfo = {
    name: '',
    id: ''
  }
  const [obs, setObs] = useState('')
  const [user, setUser] = useState(userInfo)
  
  const getUser = async () => {
    const id = localStorage.getItem("patient_id");
    if(id === null){
      console.log('Usuário não encontrado')
      return;
    }
    const currentPatient = await getPatient(id);
    setUser({
      name: currentPatient.data.name,
      id: currentPatient.data._id
    })
    return setObs(currentPatient.data.personalAnnotations);
  };
  
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="sideCard marginBottom">
        <div className="buttonSide">
          <ModalService name={user.name} id={user.id}/>
        </div>
        <div>
            <h4>Demandas e objetivos</h4>
        </div>
        <div id="goalText">{obs}</div>
    </div>
  )
}

export default GoalsCard