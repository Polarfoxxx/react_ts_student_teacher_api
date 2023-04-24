
import { Link } from "react-router-dom"
import { Route, Routes, } from 'react-router-dom';

import { Home } from "../../Home";
import { Teacher } from "../../Teacher";
import { Students } from "../../Students";

import { CreateTeacher } from "../../CreateTeacher";
import { TeacherALL } from "../../TeacherALL";
import { TeachersByID } from "../../TeachersByID";
import { UpdateTeacher } from "../../UpdateTeacher";

import { CreateStudents } from "../../CreateStudents";
import { StudentsALL } from "../../StudentsALL";
import { UpdateStudents } from "../../UpdateStudents";


function Context(): JSX.Element {

    return (
        <div className="Context">
            <div className='toogle-link-container'>
                <div className="link-block">
                    <Link className="link home" to="/">home</Link>
                </div>
                <div className="link-block">
                    <Link className="link " to="/Teacher">Teacher</Link>
                </div> 
                <div className="link-block">
                    <Link className="link " to="/Students">Students</Link>
                </div> 
            </div>
            <div className="routes-block">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Teacher" >
                        <Route index element={<Teacher />}/>
                        <Route path="CreateTeacher" element={<CreateTeacher />} />
                        <Route path="TeacherALL" element={<TeacherALL />} />
                        <Route path="TeachersByID" element={<TeachersByID />} />
                        <Route path="UpdateTeacher" element={<UpdateTeacher />} />
                    </Route>
                    <Route path="/Students" >
                        <Route index element={<Students />}/>
                        <Route path="CreateStudents" element={<CreateStudents />} />
                        <Route path="StudentsALL" element={<StudentsALL />} />
                        <Route path="UpdateStudents" element={<UpdateStudents />} />
                    </Route>
                </Routes>
            </div>
        </div>

    )
}


export default Context