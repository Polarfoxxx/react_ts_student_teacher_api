import React from "react"
import apiServicesTeacherById from "../../API/TeacherById.API"

function TeachersByID(): JSX.Element {
const [ teacherID, setTeacherID ] = React.useState("")


/* values z inputu */
const handleChancheTeacherID = (event:  React.FormEvent<HTMLInputElement>): void => {
    setTeacherID(event.currentTarget.value)
}

/* odoslanie formulara do API a jwt JWTToken*/
const handleSendTeacherID = (event:  React.MouseEvent<HTMLButtonElement>): void => {
    const JWTToken = localStorage.getItem("authenticationKey") as string
        apiServicesTeacherById.apiTeacherById(JWTToken, teacherID)
        .then((data: any) => {
            console.log(data)
         /*    if (data) {
                localStorage.clear()
            } */
        })
        .catch(err => console.log(err))
}

    return(
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
                <div className="/* btbSearche */">
                    <button onClick={handleSendTeacherID}>Search</button>
                </div>
                <div className="seatcheResults">
                    fdsfdfsdfds
                </div>
            </div>
        </div>
    )
}

 export default TeachersByID