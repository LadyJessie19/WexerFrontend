import BehObsBody from "./BehObsBody"
import BehObsHeader from "./BehObsHeader"

const BehavioralObservation = () => {
  return (
    <>
      <div className="backScreen">
        <BehObsHeader />
        <hr />
        <BehObsBody />
      </div>
    </>
  )
}

export default BehavioralObservation