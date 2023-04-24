
type Props = {
    children: JSX.Element | JSX.Element[] 
}

function Provider({children} : Props): JSX.Element {
    return(
        <div className="Container">
            {children}
        </div>
    )
}


const Container = {
    Provider
}
 export default Container