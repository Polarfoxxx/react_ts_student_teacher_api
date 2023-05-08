
import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import "../style/Context.style.css"
import { LogOutButton } from '../../Authentication';
import { servicesValidityCheckJWTsToken } from '../../utils';
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
    }, [logOut, loginPG])

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
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Content