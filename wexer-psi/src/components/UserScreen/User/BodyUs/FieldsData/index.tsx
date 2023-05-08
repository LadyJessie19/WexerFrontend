import { useState } from "react"
import ButtonSave from "../../../../../reusable/Buttons/ButtonSave"
import '../../../../../reusable/Buttons/styleButtons.css'
import ModalConfirm from "../ModalConfirm"

type UserData = {
    id: number;
    name: string;
    email: string;
  }; 

const FieldsData = () => {
    const [ modalOpen, setModalOpen] = useState(false)
    const [ userData, setUserData ] = useState<UserData>()

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

    const setUser = () => {
        const user: UserData | null = JSON.parse(localStorage.getItem('user') ?? '{}');
        if(user !== null){
            setUserData(user)
        }
    }
    
    return (
      <>
          <div id="inputsGeneral">
              <div className="inputsLineUser">
                  <div className="inputSolo">
                  <label>Nome</label>
                      <input value={userData?.name} className="inputSelf" type="text" />
                  </div>
                  <div className="inputSolo">
                  <label>Email</label>
                      <input value={userData?.email} className="inputSelf" type="text" />
                  </div>
                  <div className="inputSolo">
                      <label>CPF</label>
                      <input className="inputSelf" type="text" />
                  </div>
                  <div className="inputSolo">
                      <label>Telefone</label>
                      <input className="inputSelf" type="text" />
                  </div>
              </div>
              <div className="inputsLineUser">
                  <div className="inputSolo">
                  <label>Documento Profissional</label>
                      <input className="inputSelf" type="text" />
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