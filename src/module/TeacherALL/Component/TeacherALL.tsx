import React from "react"
import "../style/TeacherALL.style.css"
import apiServicesAllTeacher from "../../API/AllTeacher.API"
import { useNavigate } from "react-router-dom"

function TeacherALL(): JSX.Element {
const location = useNavigate
    React.useEffect(() => {
        const JWTToken = localStorage.getItem("authenticationKey") as string
        apiServicesAllTeacher.apiAllTeacher(JWTToken)
            .then((data: any) => {
               /*  if (!data) {
                    localStorage.clear(); location("LoginPage")
                    
                } */
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="TeacherALL">
            <div className="teacherALLHeader">
                <h1>All list Teacher</h1>
            </div>
            <div className="teacherALLContent">
                zgxvszgxvzsvxz
            </div>
        </div>
    )
}


export default TeacherALL