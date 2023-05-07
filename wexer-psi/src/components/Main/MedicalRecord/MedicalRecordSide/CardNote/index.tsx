import { useEffect, useState } from 'react'
import { getOccurrences } from '../../../../../services/functions'
import AttachmentCard from './AttachmentCard'
import EvaluationCard from './EvaluationCard'
import FactCard from './FactCard'
import SectionCard from './SectionCard'

type PropsObjOcc = {
  type:string,
  key:string,
  title:string,
  content:string,
  createdOn:string
}

const CardNote = () => {
  const [occurrences, setOccurrences] = useState([])
  const timelineId = '64407e0bdafc988a50bd2602'

  const getTimeline = async () => {
    const response = await getOccurrences(timelineId)
    setOccurrences(response.data.timeline.occurrences)
  }
  
  useEffect(() => {
  getTimeline()
  }, [])
  
  return (
    <div>
        {occurrences.map((item) => {
          if(item.type === "relevant_fact") return <FactCard key={item._id} title={item.title} content={item.content} createdOn={item.createdOn} />
          else if(item.type === "attachment") return <AttachmentCard key={item._id} title={item.title} content={item.content} createdOn={item.createdOn}/>
          else if(item.type === "session") return <SectionCard key={item._id} title={item.title} content={item.content} createdOn={item.createdOn}/>
          else return <EvaluationCard key={item._id} title={item.title} content={item.content} createdOn={item.createdOn}/>
        })}
    </div>
  )
}

export default CardNote