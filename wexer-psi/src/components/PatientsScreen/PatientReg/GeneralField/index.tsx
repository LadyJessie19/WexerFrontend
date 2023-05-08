import React from 'react'

interface Patient {
    name: string;
    birthdate: string;
    profession: string;
    schooling: string;
    personalAnnotations: string;
  }

  type PropsComp = {
    patient: Patient,
    setPatient: React.Dispatch<React.SetStateAction<Patient>>
  }

const GeneralField = ({patient, setPatient}:PropsComp) => {
  return (
    <>
        <div id="inputsGeneral">
            <div className="inputsLine">
                <div className="inputSolo">
                <label>CPF</label>
                    <input type="number" placeholder="(empty)" disabled/>
                </div>
                <div className="inputSolo">
                <label>Nome</label>
                    <input type="text" value={patient.name} onChange={(e) => setPatient({...patient, name: e.target.value})}/>
                </div>
                <div className="inputSolo">
                    <label>Data de nascimento</label>
                    <input type="date" value={patient.birthdate} onChange={(e) => setPatient({...patient, birthdate: e.target.value})}/>
                </div>
            </div>
            <div className="inputsLine">
                <div className="inputSolo">
                <label>Email</label>
                    <input type="email" placeholder="(empty)" disabled/>
                </div>
                <div className="inputSolo">
                <label>Sexo/Gênero</label>
                    <select disabled>
                        <option value="F">Feminino</option>
                        <option value="M">Masculino</option>
                    </select>
                </div>
                <div className="inputSolo">
                    <label>Nacionalidade</label>
                    <select disabled>
                        <option value="BR">Brasil</option>
                        <option value="DE">Deutschland</option>
                        <option value="US">United States</option>
                        <option value="ME">México</option>
                    </select>
                </div>
            </div>
            <div className="inputsLine">
                <div className="inputSolo">
                <label>Naturalidade</label>
                    <input placeholder="(empty)" disabled type="text"/>
                </div>
                <div className="inputSolo">
                <label>Profissão</label>
                    <input type="text" value={patient.profession} onChange={(e) => setPatient({...patient, profession: e.target.value})}/>
                </div>
                <div className="inputSolo">
                    <label>Escolaridade</label>
                    <select value={patient.schooling} onChange={(e) => setPatient({...patient, schooling: e.target.value})}>
                        <option value="Fundamental">Ensino Fundamental</option>
                        <option value="Médio">Ensino Médio</option>
                        <option value="Superior" selected>Ensino Superior</option>
                    </select>
                </div>
            </div>
            <div className="inputsLine">
                <div className="inputSolo">
                <label>Estado Civil</label>
                    <select disabled>
                        <option value="solteiro">Solteiro(a)</option>
                        <option value="casado">Casado(a)</option>
                        <option value="divorciado">Divorciado(a)</option>
                        <option value="viuvo">Viuvo(a)</option>
                    </select>
                </div>
                <div className="inputSolo">
                <label>Mãe</label>
                    <input type="text" placeholder="(empty)" disabled />
                </div>
                <div className="inputSolo">
                    <label>Pai</label>
                    <input type="text" placeholder="(empty)" disabled/>
                </div>
            </div>
        </div>
    </>
  )
}

export default GeneralField