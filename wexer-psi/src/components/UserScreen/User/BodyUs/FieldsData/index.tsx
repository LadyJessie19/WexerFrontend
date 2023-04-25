import { useState } from "react"
import ButtonSave from "../../../../../reusable/Buttons/ButtonSave"
import '../../../../../reusable/Buttons/styleButtons.css'
import ModalConfirm from "../ModalConfirm"

const FieldsData = () => {
    const [ modalOpen, setModalOpen] = useState(false)
    const handleModal = () => {
        setModalOpen(!modalOpen)
    }
    return (
      <>
          <div id="inputsGeneral">
              <div className="inputsLineUser">
                  <div className="inputSolo">
                  <label>Nome</label>
                      <input value="Daniel" className="inputSelf" type="text" />
                  </div>
                  <div className="inputSolo">
                  <label>Email</label>
                      <input value="daniel@gmail.com" className="inputSelf" type="text" />
                  </div>
                  <div className="inputSolo">
                      <label>CPF</label>
                      <input value="132.655.595.466" className="inputSelf" type="text" />
                  </div>
                  <div className="inputSolo">
                      <label>Telefone</label>
                      <input value="(31)" className="inputSelf" type="text" />
                  </div>
              </div>
              <div className="inputsLineUser">
                  <div className="inputSolo">
                  <label>Documento Profissional</label>
                      <input value="464654165196514" className="inputSelf" type="text" />
                  </div>
                  <div className="inputSolo">
                  <label>Sexo/Gênero</label>
                        <select className="inputSelf">
                            <option value="F">Feminino</option>
                            <option value="M">Masculino</option>
                        </select>
                  </div>                
                  <ButtonSave onClick={handleModal}/>
                  <ModalConfirm modalStatus={modalOpen} handleModal={handleModal} />
              </div>
          </div>
      </>
    )
  }
  
  export default FieldsData