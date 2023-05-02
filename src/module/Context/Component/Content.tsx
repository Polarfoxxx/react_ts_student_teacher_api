
import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import "../style/Context.style.css"
import { Home } from "../../Home";
import { Teacher } from "../../Teacher";
import { Students } from "../../Students";
import { CreateStudents } from "../../CreateStudents";
import { StudentsHome } from '../../StudentsHome';
import { StudentsALL } from "../../StudentsALL";
import { UpdateStudents } from "../../UpdateStudents";
import { LogOutButton } from "../../LogOutButton";
import servicesValidityCheckJWTsToken from '../../services/validityCheckJWTsToken.services';

function Content(): JSX.Element {
    const loginPG = useNavigate();
    const JWTToken = localStorage.getItem("authenticationToken")

    /* authentif.. kontrola pri kazdom pohybe*/
    React.useEffect(() => {
        if (JWTToken !== null) {
            !servicesValidityCheckJWTsToken(JWTToken) && loginPG("/LoginPage")
        } else { loginPG("/LoginPage") }
    })

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
                        <Route path="Teacher/*" element={<Teacher />}>
                        </Route>
                        <Route path="Students" element={<Students />}>
                            <Route path='' element={<StudentsHome />} />
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

export default Content