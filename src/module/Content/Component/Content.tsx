
import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import "../style/Context.style.css"
import { Home } from "../";
import { Teacher } from '../../Teacher.module';
import { Students } from '../../Student.module';
import { CreateStudents } from "../../Student.module";
import { StudentsHome } from '../../Student.module';
import { StudentsALL } from '../../Student.module';
import { UpdateStudents } from "../../Student.module";
import { LogOutButton } from "../../LogOutButton";
import servicesValidityCheckJWTsToken from '../../services/validityCheckJWTsToken.services';
import { Container } from '../../Container';

function Content(): JSX.Element {
    const { logOut } = React.useContext(Container.Context)
    const loginPG = useNavigate();
    const JWTToken = localStorage.getItem("authenticationToken")

    /* authentif.. kontrola pri kazdom pohybe*/
    React.useEffect(() => {
        if (JWTToken !== null) {
            !servicesValidityCheckJWTsToken(JWTToken) && loginPG("/LoginPage")
        } else { loginPG("/LoginPage") }
    },[logOut])

    return (
        <div className="content">
            <div className="contentBox">
                <div className="contentHeader">
                    <span className="first">W</span><h1>elcome to Teacher and Students Databaze</h1>
                    <span className="logoutBTN"><LogOutButton /></span>  {/* logOut buttton */}
                </div>
                <div className='toogle-link-container'>
                    <div className="link-block">
                        <Link className="link home" to="/Content">Home</Link>
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