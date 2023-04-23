import ButtonBack from "../../../../../reusable/Buttons/ButtonBack"
import ButtonSave from "../../../../../reusable/Buttons/ButtonSave"

type PropsComp = {
    title: string,
    buttons: boolean,
    backPath?: string
}

const HeaderInterview = ({title, buttons, backPath}:PropsComp) => {
  return (
    <>
        <div className="headerInterview">
            <div>
                <h2>{title}</h2>
            </div>
            {buttons && (<div className="headerButtons">
            {backPath ? <ButtonBack backPath={backPath} /> : <ButtonBack />}
                <ButtonSave />
            </div>)}
        </div>
    </>
  )
}

export default HeaderInterview