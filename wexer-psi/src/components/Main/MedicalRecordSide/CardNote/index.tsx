import AttachmentCard from './AttachmentCard'
import EvaluationCard from './EvaluationCard'
import FactCard from './FactCard'
import SectionCard from './SectionCard'

const CardNote = () => {
  return (
    <div>
        {<AttachmentCard/>}
        {<EvaluationCard/>}
        {<FactCard/>}
        {<SectionCard/>}
    </div>
  )
}

export default CardNote