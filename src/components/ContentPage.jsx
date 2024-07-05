export function ContentPage(props, style){
    return (
        <div className={`contentPage ${style}`}>
            {props.children}
        </div>
    )
}