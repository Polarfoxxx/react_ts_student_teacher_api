
import { Dispatch, SetStateAction } from "react"

export type Props = {
    children: JSX.Element | JSX.Element[]
}
export type TypeContext = {
    logOut: boolean,
    setLogOut: Dispatch<SetStateAction<boolean>>,
}