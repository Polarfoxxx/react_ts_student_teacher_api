
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useEffect, useContext } from "react"
import "../style/Context.style.css"

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

import { LogOutButton } from "../../LogOutButton";
import { Container } from '../../Container';


function Context(): JSX.Element {
    const { logOut } = useContext(Container.Context) /* pri buttne na odhlasenie */
    const loginPG = useNavigate();

    /* authentif.. kontrola pri kazdom pohybe*/
    useEffect(() => {
        localStorage.getItem("authenticationKey") === null && loginPG("/LoginPage")
    }, [loginPG, logOut])

    return (
        <div className="Context">
            <div className="contextBox">
                <div className="ContextHeader">
                    <span className="first">W</span><h1>elcome to Teacher and Students Databaze</h1>
                    <span className="logoutBTN"><LogOutButton /></span>  {/* logOut buttton */}
                </div>
                <div className='toogle-link-container'>
                    <div className="link-block">
                        <Link className="link home" to="/Context">Home</Link>
                    </div>
                    <div className="link-block">
                        <Link className="link " to="Teacher">Teacher</Link>
                    </div>
                    <div className="link-block">
                        <Link className="link " to="Students">Students</Link>
                    </div>
                </div>
                <div className="routes-block">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="Teacher" element={<Teacher />}>
                            <Route path="CreateTeacher" element={<CreateTeacher />} />
                            <Route path="TeacherALL" element={<TeacherALL />} />
                            <Route path="TeachersByID" element={<TeachersByID />} />
                            <Route path="UpdateTeacher" element={<UpdateTeacher />} />
                        </Route>
                        <Route path="Students" element={<Students />}>
                            <Route path="CreateStudents" element={<CreateStudents />} />
                            <Route path="StudentsALL" element={<StudentsALL />} />
                            <Route path="UpdateStudents" element={<UpdateStudents />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Context