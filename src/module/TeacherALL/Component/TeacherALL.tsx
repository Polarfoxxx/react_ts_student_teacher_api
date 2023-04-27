import React from "react"
import "../style/TeacherALL.style.css"
import apiServicesAllTeacher from "../../API/AllTeacher.API"

function TeacherALL(): JSX.Element {

React.useEffect(() => {

const JWTToken = localStorage.getItem("authenticationKey") as string

    apiServicesAllTeacher.apiAllTeacher(JWTToken)
        .then(data => console.log(data))
        .catch(err => console.log(err))

        
}, [])

    return(
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