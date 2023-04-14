import GeneralField from "./GeneralField";
import ObsField from "./ObsField";

const PatientReg = () => {
    return (
      <>
        <section>
          <div id="sectionHeader">
            <div className="dFlexRow">
                <span><h5>Dados cadastrais</h5></span>
                <span><h5>Prontuário</h5></span>              
            </div>
            <div>
              <button type="submit">Salvar</button>
              <button type="submit">Retornar á listagem</button>
            </div>
          </div>
          <div id="sectionBody">
            <div className="bannerBody">
                <p>Dados gerais</p>
            </div>
                <GeneralField />
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
                <ObsField />
            <div>
                <button>Salvar</button>
                <button>Retornar á listagem</button>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default PatientReg;
  