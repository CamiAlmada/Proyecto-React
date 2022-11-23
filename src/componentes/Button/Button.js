const Button =(props)=>{
    return (
        <button style=  {{color: props.colorText }} >{props.children}</button>
    )
}
export default Button