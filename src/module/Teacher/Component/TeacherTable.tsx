import ReactTableUI from 'react-table-ui'
import React from 'react'
import "../style/TeacherALL.style.css"
import { useNavigate } from 'react-router'
import type { TableInstance, DataType } from 'react-table-ui'
import { TypeResponzeALLTechers } from '../../API/types'

/** Structure of data provided foe each row. */
interface User extends DataType {
    id: string,
    name: string,
    subject: string,
    update: HTMLButtonElement
}

type Props = {
    allTeacher: TypeResponzeALLTechers
}

function TeacherTable({ allTeacher }: Props): JSX.Element {
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const teacherId = e.currentTarget.name
        sessionStorage.setItem("teacherID", teacherId)
        navigate("/Content/Teacher/UpdateTeacher")
    }

    let newTeaacherArry: User[] = []
    allTeacher.forEach((item: any) => {
        item.updateBtn = <button className='tableUpdateBtn' name={item.id} onClick={handleClick}>Update</button>
        newTeaacherArry.push(item)
    })


    // Provide data for the table 
    const data: User[] = newTeaacherArry

    // Create an instance ref that will hold the reference to React Table instance.
    const tableInstanceRef = React.useRef<TableInstance<User>>(null)

    return (
        <ReactTableUI
            title="All teacher table"
            data={data}
            tableInstanceRef={tableInstanceRef}
        />
    )
}

export default TeacherTable