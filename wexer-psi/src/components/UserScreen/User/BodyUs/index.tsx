import FieldsClinic from "./FieldsClinic"
import FieldsData from "./FieldsData"
import FieldsPassword from "./FieldsPassword"

const BodyUs = () => {
  return (
    <>
        <div>
            <div className="bannerBody">
              <p>Dados</p>
            </div>
            <FieldsData />
            <div className="bannerBody">
              <p>Dados da clínica</p>
            </div>
            <FieldsClinic />
            <div className="bannerBody">
              <p>Alterar senha</p>
            </div>
            <FieldsPassword />
          </div>
    </>
  )
}

export default BodyUs