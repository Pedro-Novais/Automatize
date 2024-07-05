export function Buttons(props){
    return(
        <button className={props.style} onClick={props.action}>
            {props.children}
        </button>
    )
}