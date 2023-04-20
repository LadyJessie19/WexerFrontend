import ButtonBack from "../../../../../reusable/Buttons/ButtonBack"
import ButtonSave from "../../../../../reusable/Buttons/ButtonSave"


type PropsComp = {
    title: string,
    buttons: boolean
}

const HeaderInterview = ({title, buttons}:PropsComp) => {
  return (
    <>
        <div className="headerInterview">
            <div>
                <h2>{title}</h2>
            </div>
            {buttons && (<div className="headerButtons">
                <ButtonBack />
                <ButtonSave />
            </div>)}
        </div>
    </>
  )
}

export default HeaderInterview