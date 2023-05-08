import React from "react"
import { api_CRUD_Teacher } from "../../API"
import { useNavigate } from "react-router-dom"
import { TypeResponzeALLTechers, TypeRespoAllTeacherAndStatus } from "../../API/types"
import { TeacherTable } from "../"
import "../style/TeacherALL.style.css"


function TeacherALL(): JSX.Element {
    const JWTToken = localStorage.getItem("authenticationToken")
    const location = useNavigate()
    const [allTeacher, setAllTeacher] = React.useState<TypeResponzeALLTechers>([{
        id: "",
        name: "",
        subject: ""
    }])

    React.useEffect(() => {
        if (JWTToken !== null) {
            api_CRUD_Teacher.apiAllTeacher(JWTToken)
                .then((data: TypeRespoAllTeacherAndStatus) => {
                    if (data.status !== 401) {
                        setAllTeacher(data.responzeALLtecherDATA)
                    } else {
                        localStorage.removeItem("authenticationToken")
                        location("LoginPage")
                    }
                })
                .catch(err => console.error(err))
        }
    }, [])

    return (
        <div className="teacherALL">
            <div className="teacherALLHeader">
                <h1>All list Teacher</h1>
            </div>
            <div className="teacherALLContent">
                <TeacherTable allTeacher={allTeacher} />
            </div>
        </div>
    )
}


export default TeacherALL