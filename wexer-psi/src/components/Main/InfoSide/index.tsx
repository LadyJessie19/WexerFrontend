import GoalsCard from "./GoalsCard"
import ServiceCard from "./ServiceCard"
import UserCard from "./UserCard"

const InfoSide = () => {
  return (
    <div id='infoSide'>
        <UserCard />
        <ServiceCard />
        <GoalsCard />
    </div>
  )
}

export default InfoSide