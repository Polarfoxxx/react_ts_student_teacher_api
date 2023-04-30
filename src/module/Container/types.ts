
import { Dispatch, SetStateAction } from "react"

export type Props = {
    children: JSX.Element | JSX.Element[]
}
export type typeContext = {
    logOut: boolean,
    setLogOut: Dispatch<SetStateAction<boolean>>,
}