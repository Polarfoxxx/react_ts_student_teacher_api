
import { Link } from "react-router-dom"

type Props = {
    children: JSX.Element
}


function ContextMasterPg({children} : Props): JSX.Element {



    return (
        <div className="ContextMasterPg">
            <div className='toogle-link-container'>
                <div className="link-block">
                    <Link className="link home" to="/">Temperature</Link>
                </div>
                <div className="link-block">
                    <Link className="link " to="/RouterCloud">Cloud</Link>
                </div>
                <div className="link-block">
                    <Link className="link " to="/RouterPressure">Pressure</Link>
                </div>
                <div className="link-block">
                    <Link className="link " to="/createTeacher">Wind</Link>
                </div>
            </div>
            <div className="routes-block">
                {children}
            </div>
        </div>
    )
}


export default ContextMasterPg