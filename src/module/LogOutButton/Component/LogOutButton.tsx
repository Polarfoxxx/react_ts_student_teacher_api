import { useContext } from "react"
import "../style/LogOutBTN.style.css"
import { Container } from "../../Container"

function LogOutButton(): JSX.Element {
    const { setLogOut, logOut } = useContext(Container.Context)

    const handleLogOut = (e: React.MouseEvent<HTMLElement>): void => {
        localStorage.clear()
        setLogOut(!logOut)
    }

    return (
        <div className="LogOutContext">
            <button onClick={handleLogOut}>
                Log Out
            </button>
        </div>
    )
}
export default LogOutButton