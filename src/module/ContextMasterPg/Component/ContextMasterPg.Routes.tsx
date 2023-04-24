
import { Link } from "react-router-dom"
import { Route, Routes } from 'react-router-dom';

import { Teacher } from "../../Teacher";
import { Students } from "../../Students";

function ContextMasterPg(): JSX.Element {

    return (
        <div className="ContextMasterPg">
            <div className='toogle-link-container'>
                <div className="link-block">
                    <Link className="link home" to="/Teacher">Teacher</Link>
                </div>
                <div className="link-block">
                    <Link className="link " to="/Students">Students</Link>
                </div>
            </div>
            <div className="routes-block">
                <Routes>
                    <Route path="/Teacher.tsx" element={<Teacher />} />
                    <Route path="/Students.tsx" element={<Students />} />
                </Routes>
            </div>
        </div>
    )
}


export default ContextMasterPg