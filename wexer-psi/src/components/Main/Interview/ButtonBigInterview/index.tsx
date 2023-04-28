import { Link } from "react-router-dom"

type PropsButtonBig = {
    path: string,
    title: string
}

const ButtonBigInterview = ({path, title}:PropsButtonBig) => {
  return (
    <>
        <Link to={path}>
        <div className="buttonBig">
            <div>
                <img className="imgButton" src="/interview/newAddBig.svg" />
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
        </Link>
    </>
  )
}

export default ButtonBigInterview