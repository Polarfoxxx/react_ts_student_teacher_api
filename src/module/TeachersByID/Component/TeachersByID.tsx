import React from "react"
import apiServicesTeacherById from "../../API/TeacherById.API"
import { useNavigate } from "react-router-dom"
import { TypeResponzeALLTechersObject } from "../../API/types"

function TeachersByID(): JSX.Element {
    const location = useNavigate()
    const [responzeDATA, setResponzeDATA] = React.useState<TypeResponzeALLTechersObject>({ id: "", name: "", subject: "" })
    const [teacherID, setTeacherID] = React.useState("")

    /* values z inputu */
    const handleChancheTeacherID = (event: React.FormEvent<HTMLInputElement>): void => {
        setTeacherID(event.currentTarget.value)
    }

    /* odoslanie formulara do API a jwt JWTToken*/
    const handleSendTeacherID = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const JWTToken = localStorage.getItem("authenticationKey") as string
        apiServicesTeacherById.apiTeacherById(JWTToken, teacherID)
            .then((data: TypeResponzeALLTechersObject) => {
                if (!data.id) { // NOTE: ak nedostanes odpoved to neznaci ze je neautorizovani, moze to byt aj neexistujuci ucitel
                    localStorage.clear(); location("LoginPage")
                } else { setResponzeDATA(data) }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="TeacherALL">
            <div className="teacherALLHeader">
                <h1>Search teacher by ID</h1>
            </div>
            <div className="teacherALLContent">
                <div className="seacheTeacher">
                    <input
                        onChange={handleChancheTeacherID}
                        type="search" />
                </div>
                <div className="/* btbSearche */"> // NOTE: co je toto?
                    <button onClick={handleSendTeacherID}>Search</button>
                </div>
                <div className="seatcheResults">
                    {
                        <div
                            className="respoDATA">
                            <div className="ResId"><h1>{responzeDATA.id}</h1></div>
                            <div className="Resname"><h1>{responzeDATA.name}</h1></div>
                            <div className="Ressubject"><h1>{responzeDATA.subject}</h1></div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default TeachersByID