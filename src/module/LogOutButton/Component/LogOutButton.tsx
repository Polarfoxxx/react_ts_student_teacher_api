import { useContext } from "react"
import "../style/LogOutBTN.style.css"
import { Container } from "../../Container"

function LogOutButton(): JSX.Element {
    const { setLogOut, logOut } = useContext(Container.Context)

    const handleLogOut = (e: React.MouseEvent<HTMLElement>): void => {
        localStorage.clear() // BAD: preco zase mazes cely localStorage?
        setLogOut(!logOut) // BAD: ty sa logoutujes, takze by si mal nastavit logOut na true
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