type PropsComp = {
  patientObs: string,
  setPatient: () => void
}

const ObsField = ({patientObs, setPatient}:PropsComp) => {
  return (
    <>
      <div id="obsSpace">
        <label htmlFor="textArea">
          Observações
          <textarea name="textArea" id="textArea" value={patientObs} onChange={(e) => setPatient({...patient, obsField: e.target.value})}></textarea>
        </label>
      </div>
    </>
  );
};

export default ObsField;
