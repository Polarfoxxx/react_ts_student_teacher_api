import React from "react"
import "../style/TeacherALL.style.css"
import "../style/RespoTable.style.css"
import apiServicesAllTeacher from "../../API/AllTeacher.API"
import { useNavigate } from "react-router-dom"
import { TypeResponzeALLTechers } from "../../API/types"
import { TypeResponzeALLTechersObject } from "../../API/types"

function TeacherALL(): JSX.Element {
    const location = useNavigate()
    const [AllReachersResponzeDATA, setAllReachersResponzeDATA] = React.useState<TypeResponzeALLTechers>() // BAD: pouzi lepsie nazvy + nedodrzavas naming convention
    React.useEffect(() => { // NOTE: preco tu pouzivas React. ked inde nie?
        const JWTToken = localStorage.getItem("authenticationKey") as string
        apiServicesAllTeacher.apiAllTeacher(JWTToken)
            .then((data: TypeResponzeALLTechers) => {
                if (!data) {
                    /* localStorage.clear(); location("LoginPage") */ // NOTE:??? toto je co? ak nedostanem data alebo mi token prepadne tak co ma odhlasi?
                } else { setAllReachersResponzeDATA(data) }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="TeacherALL">
            <div className="teacherALLHeader">
                <h1>All list Teacher</h1>
            </div>
            <div className="teacherALLContent">
                {
                    AllReachersResponzeDATA?.map((item: TypeResponzeALLTechersObject, key: number) => (
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