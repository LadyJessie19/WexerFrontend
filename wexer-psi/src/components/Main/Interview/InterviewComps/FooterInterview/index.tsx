import ButtonBack from '../../../../../reusable/Buttons/ButtonBack'
import ButtonSaveList from '../../../../../reusable/Buttons/ButtonSaveList'
import '../../../../../reusable/Buttons/styleButtons.css'

type PropsFooterInterview = {
  backPath:string
}

const FooterInterview = ({backPath}:PropsFooterInterview) => {
  return (
    <>
        <div className="footerInterview">
            <ButtonSaveList />
            <ButtonBack backPath={backPath}/>
        </div>
    </>
  )
}

export default FooterInterview