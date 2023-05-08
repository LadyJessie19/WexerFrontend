type PropsComp = {
  patient: {
    name: string;
    birthdate: string;
    profession: string;
    schooling: string;
    personalAnnotations: string;
  },
  setPatient: React.Dispatch<React.SetStateAction<{
    name: string;
    birthdate: string;
    profession: string;
    schooling: string;
    personalAnnotations: string;
  }>>;
}

const ObsField = ({patient, setPatient}:PropsComp) => {
  return (
    <>
      <div id="obsSpace">
        <label htmlFor="textArea">
          Observações
          <textarea name="textArea" id="textArea" placeholder={patient.personalAnnotations} onChange={(e) => setPatient({...patient, personalAnnotations: e.target.value})}></textarea>
        </label>
      </div>
    </>
  );
};

export default ObsField;
