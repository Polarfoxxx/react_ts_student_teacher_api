


type Props = {
    children: JSX.Element | JSX.Element[]
}

function Context({children} : Props): JSX.Element {
    return(
        <div className="Container">
            {children}
        </div>
    )
}


 export default Context