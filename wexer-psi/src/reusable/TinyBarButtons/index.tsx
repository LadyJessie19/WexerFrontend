import BuyCredits from "./servicesButtons/BuyCredits"
import MyClients from "./servicesButtons/MyClients"
import NewRegistration from "./servicesButtons/NewRegistration"
import NewService from "./servicesButtons/NewService"

const TinyBarButtons = () => {
  return (
    <>
        <section id='tinyBarButtons'>
            <NewService />
            <NewRegistration />
            <MyClients />
            <BuyCredits />
        </section>
    </>
  )
}

export default TinyBarButtons