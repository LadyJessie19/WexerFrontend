import { useState } from "react";
import { Link } from "react-router-dom";

import GeneralField from "./GeneralField";
import ObsField from "./ObsField";
import SideBar from "../../SideBar";
import MainBar from "../../MainBar";

import ButtonSave from "../../../reusable/Buttons/ButtonSave";
import ButtonBack from "../../../reusable/Buttons/ButtonBack";
import { postPatient } from "../../../services/functions";
import ModalNewPat from "./ModalNewPat";

const PatientReg = () => {
  const patientObj = {
    name: '',
    birthdate: '',
    profession: '',
    schooling: 'Superior',
    personalAnnotations: ''
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const [patient, setPatient] = useState(patientObj)
  const [created, setCreated] = useState(false)

  const menuHandle = () => {
    setMenuOpen(!menuOpen);
  };

  const newPatient = async () => {
    const response = await postPatient(patient)
    localStorage.removeItem('patient_id')
    localStorage.setItem('patient_id', response.data._id)
    if(response.status === 201){
      setCreated(true)
    }
  }

  const modalHandle = () => {
    setCreated(!created)
  }
  return (
    <>
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MainBar menuHandle={menuHandle} />
      <div className="compPatientReg">
        <div id="sectionHeader">
          <div className="dFlexRow">
            <div className="leftSearchBar">
              <span>
                <Link to="/registro-paciente">Dados Cadastrais</Link>{" "}
              </span>
              <span>
                <Link to="/prontuario">Prontuário</Link>
              </span>
            </div>
          </div>
          <div className="dFlexRow">
            <ButtonSave />
            <ButtonBack backPath="/pacientes" />
          </div>
        </div>
        <div id="sectionBody">
          <div className="bannerBody">
            <p>Dados gerais</p>
          </div>
          <GeneralField patient={patient} setPatient={setPatient}/>
          <div className="bannerBody">
            <p>Documentos</p>
          </div>
          <div className="bannerBody">
            <p>Endereços</p>
          </div>
          <div className="bannerBody">
            <p>Contatos</p>
          </div>
          <div className="bannerBody">
            <p>Observações</p>
          </div>
          <ObsField patient={patient} patientObs={patient.personalAnnotations} setPatient={setPatient}/>
          <div className="dFlexRow">
            <ButtonSave onClick={newPatient}/>
            <ButtonBack backPath="/pacientes"/>
          </div>
        </div>
      </div>
      <ModalNewPat modalStatus={created} handleModal={modalHandle}/>
    </>
  );
};

export default PatientReg;
