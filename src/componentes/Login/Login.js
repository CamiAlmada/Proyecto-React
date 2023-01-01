import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"



const Login =()=>{

    const [username, setUsername ] = useState('')
    const[password, setPassword]= useState ('')

    const {user, login, logout} = useContext(AuthContext  )


    const handleSubmit=(e)=>{
        e.preventDefault()
        login({username, password})

    }

    if(user){
        return(

            <div>
                <h1 className="title">Cerrar Sesión</h1>
                <button onClick={()=> logout()}>Cerrar Sesión</button>

            </div>
        )
    }

  return(        
                <div>
                    <h1 className="title">Iniciar Sesión</h1>
                    <form onSubmit= {handleSubmit}>
                        Usuario:
                        <input value= {username} onChange={(e)=>setUsername(e.target.value)}/>  
                         <br></br><br></br>
                        Contraseña:  
                        <input value= {password} onChange = {(e)=>setPassword(e.target.value)}/>
                        
                        <br/>
                        <button type= 'submit'>Aceptar</button>
                    </form>
                </div>
            )
       
   
}
export default Login