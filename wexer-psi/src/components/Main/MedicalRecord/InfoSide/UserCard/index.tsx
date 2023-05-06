import { useEffect, useState } from "react"
import { getPatient } from "../../../../../services/functions";

const UserCard = () => {
  const patientObj = {
    name: '',
    birthdate: '',
    profession: '',
    schooling: '',
    personalAnnotations: ''
  }
  const [patient, setPatient] = useState(patientObj)
  
  const getUser = async () => {
    const id = localStorage.getItem("patient_id");
    const currentPatient = await getPatient(id);
    return setPatient(currentPatient.data);
  };
  
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="sideCard">
      <div>
        <h4>Identificação do paciente</h4>
      </div>
      <div>
        <div>
          <img src="/side-section/user.svg" width={'14px'} />
          <span>  Paciente</span>
          <p>{patient.name}</p>
        </div>
        <div>
          <img src="/side-section/date.svg" width={'14px'} />
          <span> Nascimento</span>
          <p>{patient.birthdate}</p>
        </div>
        <div>
          <img src="/side-section/bag.svg" width={'14px'} />
          <span> Profissão</span>
          <p>{patient.profession}</p>
        </div>
        <div>
          <img src="/side-section/doc.svg" width={'14px'} />
          <span> Escolaridade</span>
          <p>{patient.schooling}</p>
        </div>                
      </div>
    </div>
  )
}

export default UserCard