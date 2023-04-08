import AttachmentCard from './AttachmentCard'
import EvaluationCard from './EvaluationCard'
import FactCard from './FactCard'
import SectionCard from './SectionCard'

const CardNote = () => {
  return (
    <div>
        {<SectionCard/>}
        {<FactCard/>}
        {<AttachmentCard/>}
        {<EvaluationCard/>}
    </div>
  )
}

export default CardNote