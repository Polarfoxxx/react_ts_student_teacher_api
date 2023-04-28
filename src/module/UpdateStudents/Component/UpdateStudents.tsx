import React from "react"
import "../style/UpdateStudents.style.css"
import { ConfirmationResp } from "../../ConfirmationResp"
import { typeUpdateStudents } from "../type"
import apiServicesUpdateStudents from "../../API/UpdateStudents"
import { typeVerification } from "../../ConfirmationResp/type"

function UpdateStudents(): JSX.Element { 
    const [verification, setVerification] = React.useState<typeVerification>({ success: false, stats: false }) /* overovanie */
    const [updateStudents, setupdateStudents] = React.useState<typeUpdateStudents>({
    TeacherID: "",
    StudentsID: "",
    nameStudents: "",
    classe: "",
})
    const JWTToken = localStorage.getItem("authenticationKey") as string

   
    /* vytvorenie objectu */
    const handleInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
        type keyinObject = keyof typeUpdateStudents
        let keys = event.currentTarget.name as keyinObject
        updateStudents[keys] = event.currentTarget.value
        setupdateStudents({...updateStudents})
    }

  /* odoslanie formulara  do APIs */
  const handleSendForm = () => {

    apiServicesUpdateStudents.apiUpdateStudents(JWTToken, updateStudents)
        .then((data : any) => {
                console.log(data)
                if(data) {
                    setVerification({success: true,stats: true})
                }else {setVerification({success: true,stats: false}); localStorage.clear()}
            })
        .catch(err => console.log(err))

        /* clear */
        setupdateStudents({ TeacherID: "",
        StudentsID: "",
        nameStudents: "",
        classe: "",})
    }





    return (
        <div className="CreateStudents">
             <ConfirmationResp
                verification={verification}
                setVerification={setVerification}
            />
            <div className="CreateStudents">
                <div className="CreateStudentsHeader">
                    <h1>Create Students</h1>
                </div>
                <div className="CreateContent">
                    <div className="searcheTeacherID">
                        <h1>Teacher ID</h1>
                        <input 
                        name="TeacherID"
                        onChange={handleInputChange}
                        type="text" />
                    </div>
                    <div className="searcheStudentsID">
                        <h1>Student ID</h1>
                        <input 
                        name="StudentsID"
                        onChange={handleInputChange}
                        type="text" />
                    </div>
                    <div className="createnewStudents">
                        <div className="inpNameStudent">
                            <h1>Name student</h1>
                            <input 
                        name="nameStudents"
                        onChange={handleInputChange}
                        type="text" />
                        </div>
                        <div className="inpClassStudent">
                            <h1>Class</h1>
                            <input 
                            name="classe"
                        onChange={handleInputChange}
                        type="text" />
                        </div>
                    </div>

                </div>
                <div className="buttonBlocj">
                    <button onClick={handleSendForm}>Create..</button>
                </div>
            </div>
        </div>
    )
}


export default UpdateStudents