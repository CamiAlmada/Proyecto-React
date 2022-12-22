

const Button =(props)=>{
    return (

        <button className="button" style=  {{color: props.colorText }} >{props.children}</button>
        

    )
        
}
export default Button