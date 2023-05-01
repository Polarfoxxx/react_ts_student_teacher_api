
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { useEffect, useContext } from "react"
import "../style/Context.style.css"
import { Home } from "../../Home";
import { Teacher } from "../../Teacher";
import { Students } from "../../Students";
import { CreateStudents } from "../../CreateStudents";
import { StudentsHome } from '../../StudentsHome';
import { StudentsALL } from "../../StudentsALL";
import { UpdateStudents } from "../../UpdateStudents";
import { LogOutButton } from "../../LogOutButton";
import { Container } from '../../Container';
import apiServicesValidityAuthen from '../../API/ValidityAuthen.API';


function Context(): JSX.Element {
    const { logOut } = useContext(Container.Context) /* pri buttne na odhlasenie */
    const loginPG = useNavigate();

    /* authentif.. kontrola pri kazdom pohybe*/
    useEffect(() => { // NOTE: validitu kotrolujes popredu alebo pri requeste nie takto
        const JWTToken = localStorage.getItem("authenticationKey") as string // BAD: moze to byt aj null nie len string
        localStorage.getItem("authenticationKey") === null && loginPG("/LoginPage") // BAD: tu si mal kontrolovat ten JWTToken
        apiServicesValidityAuthen.apiValidityAuthen(JWTToken)
            .then((data: number) => {
                if (data !== 200) {
                    loginPG("/LoginPage")
                }
            })
            .catch(err => console.log(err))
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
                    <Routes> // NOTE: tie routy by sa dali napisat vsetky do App, nemusel by si tolko zanorovat
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

export default Context