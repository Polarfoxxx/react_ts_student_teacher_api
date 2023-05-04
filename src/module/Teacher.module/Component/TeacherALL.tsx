import React from "react"
import "../style/TeacherALL.style.css"
import "../style/RespoTable.style.css"
import apiServicesAllTeacher from "../../API/AllTeacher.API"
import { useNavigate } from "react-router-dom"
import { TypeResponzeALLTechers, TypeResponzeALLTechersObject, TypeRespoAllTeacherAndStatus } from "../../API/types"

function TeacherALL(): JSX.Element {
    const JWTToken = localStorage.getItem("authenticationToken")
    const location = useNavigate()
    const [allTeacher, setAllTeacher] = React.useState<TypeResponzeALLTechers>()

    React.useEffect(() => {
        if (JWTToken !== null) {
            apiServicesAllTeacher.apiAllTeacher(JWTToken)
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
                {
                    allTeacher?.map((item: TypeResponzeALLTechersObject, key: number) => (
                        <div
                            key={key}
                            className="respoDATA">
                            <div className="ResId"><h1>{item.id}</h1></div>
                            <div className="Resname"><h1>{item.name}</h1></div>
                            <div className="Ressubject"><h1>{item.subject}</h1></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default TeacherALL