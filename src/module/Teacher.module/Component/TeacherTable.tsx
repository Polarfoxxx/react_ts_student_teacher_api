import ReactTableUI from 'react-table-ui'
import React from 'react'
import type { TableInstance, DataType } from 'react-table-ui'
import { TypeResponzeALLTechers } from '../../API/types'


/** Structure of data provided foe each row. */
interface User extends DataType {
    id: string,
    name: string,
    subject: string
}

type Props = {
    allTeacher: TypeResponzeALLTechers
}
function TeacherTable({ allTeacher }: Props): JSX.Element {
    // Provide data for the table
    const data: User[] = allTeacher

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