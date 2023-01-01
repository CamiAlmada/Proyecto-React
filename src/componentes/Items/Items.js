import {Link}from 'react-router-dom'

const Items =({item})=>{
      
        
  return(
        <div className='list_items'>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <img style={{width : "180px"}} src={item.imagen} alt={item.name}/>
                <p>${item.price}</p>
                 <Link className='button' to={`/detail/${item.id}`}>Ver Detalle</Link>
                
         </div>    

) }

export default Items    