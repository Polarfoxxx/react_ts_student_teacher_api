import { useNavigate } from "react-router-dom"

function StudentsALL(): JSX.Element {
const backLogin = useNavigate()

    const hanledClick = () => {
        backLogin("/LoginPage")
    }

    return (
        <div className="StudentsALL">
           <h1>StudentsALL</h1>
              <button onClick={hanledClick}>dssadsd</button>
        </div>
    )
}

export default StudentsALL