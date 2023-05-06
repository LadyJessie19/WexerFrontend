import { useEffect, useState } from "react";
import ModalService from "../../../../../Modals/ModalService";
import { getPatient } from "../../../../../services/functions";

const ServiceCard = () => {
  const patientObj = {
    name: '',
    birthdate: '',
    profession: '',
    schooling: '',
    personalAnnotations: '',
    _id: ''
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
      <div className="buttonSide">
          <ModalService name={patient.name} id={patient._id}/>
        </div>
      <div>
        <h4>Serviço</h4>
      </div>
      <div>
        <div>
          <span>Data inicial</span>
          <p>14/06/2021</p>
        </div>
        <div>
          <span>Tipo</span>
          <p>Porte de arma</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
