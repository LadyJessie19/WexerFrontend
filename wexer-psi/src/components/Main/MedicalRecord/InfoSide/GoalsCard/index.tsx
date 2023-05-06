import { useEffect, useState } from "react";
import ModalService from "../../../../../Modals/ModalService"
import { getPatient } from "../../../../../services/functions";

const GoalsCard = () => {
  
  const [obs, setObs] = useState('')
  
  const getUser = async () => {
    const id = localStorage.getItem("patient_id");
    const currentPatient = await getPatient(id);
    return setObs(currentPatient.data.personalAnnotations);
  };
  
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="sideCard marginBottom">
        <div className="buttonSide">
          <ModalService />
        </div>
        <div>
            <h4>Demandas e objetivos</h4>
        </div>
        <div id="goalText">{obs}</div>
    </div>
  )
}

export default GoalsCard