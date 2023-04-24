import { Link } from "react-router-dom"


function Teacher(): JSX.Element {
    return(
        <div className="Teacher">
             <div className="Context">
            <div className='toogle-link-container'>
                <div className="link-block">
                    < Link className="link " to="/Teacher/CreateTeacher">CreateTeacher</Link>
                    < Link className="link " to="/Teacher/TeacherALL">TeacherALL</Link>
                </div>
            </div>
        </div>

        </div>
    )
}


 export default Teacher