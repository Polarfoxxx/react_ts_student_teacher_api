
import { Link } from "react-router-dom"
import { Route, Routes, } from 'react-router-dom';

import { Home } from "../../Home";
import { Teacher } from "../../Teacher";
import { Students } from "../../Students";
import { CreateTeacher } from "../../CreateTeacher";

function Context(): JSX.Element {

    return (
        <div className="Context">
            <div className='toogle-link-container'>
                <div className="link-block">
                    <Link className="link home" to="/">home</Link>
                </div>
                <div className="link-block">
                    <Link className="link " to="/Students">Students</Link>
                </div>
                <div className="link-block">
                    <Link className="link " to="/Teacher">Teacher</Link>
                </div> 
            </div>
            <div className="routes-block">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Students" element={<Students />} />
                    <Route path="/Teacher" element={<Teacher />} />
                </Routes>
            </div>
        </div>

    )
}


export default Context