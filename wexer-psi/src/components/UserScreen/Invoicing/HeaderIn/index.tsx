import { Link } from "react-router-dom"

const SectionHeader = () => {
  return (
    <>
        <div className="sectionHeader">
            <div className="navHeader">
              <Link to="/usuario"><div><h3>Meus dados</h3></div></Link>
              <Link to="/faturamento"><div><h3>Meu faturamento</h3></div></Link>
            </div>
          </div>
    </>
  )
}

export default SectionHeader