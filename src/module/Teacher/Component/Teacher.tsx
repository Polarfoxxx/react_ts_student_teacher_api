// BAD: formatovanie

import { Link } from "react-router-dom"
import "../style/Teacher.style.css"
import { CreateTeacher } from "../../CreateTeacher";
import { TeacherALL } from "../../TeacherALL";
import { TeachersByID } from "../../TeachersByID";
import { UpdateTeacher } from "../../UpdateTeacher";
import { TeacherHome } from "../../TeacherHome";
import { Route, Routes } from "react-router-dom";


function Teacher(): JSX.Element {
    return (
        <div className="Teacher">
            <div className='teacherContext-link-container'>
                <div className="teacherlink-block">
                    < Link className="Tlink " to="CreateTeacher">Create teacher</Link>
                    < Link className="Tlink " to="TeacherALL">Teacher</Link>
                    < Link className="Tlink " to="TeachersByID">Teachers by ID</Link>
                    < Link className="Tlink " to="UpdateTeacher">Update teacher</Link>
                </div>
            </div>
            <div className="contentRoute">
                <Routes>
                    <Route path="" element={<TeacherHome />} />
                    <Route path="CreateTeacher" element={<CreateTeacher />} />
                    <Route path="TeacherALL" element={<TeacherALL />} />
                    <Route path="TeachersByID" element={<TeachersByID />} />
                    <Route path="UpdateTeacher" element={<UpdateTeacher />} />
                </Routes>
            </div>
        </div>
    )
}


export default Teacher

