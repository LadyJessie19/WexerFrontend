type PropsComp = {
  patient:object,
  patientObs: string,
  setPatient: () => void
}

const ObsField = ({patient, patientObs, setPatient}:PropsComp) => {
  return (
    <>
      <div id="obsSpace">
        <label htmlFor="textArea">
          Observações
          <textarea name="textArea" id="textArea" placeholder={patientObs} onChange={(e) => setPatient({...patient, personalAnnotations: e.target.value})}></textarea>
        </label>
      </div>
    </>
  );
};

export default ObsField;
