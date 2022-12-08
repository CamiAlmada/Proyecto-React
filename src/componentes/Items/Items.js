import ItemCount from "../ItemCount/ItemCount"
import {Link}from 'react-router-dom'

const Items =({item})=>{
    return(
        <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <img style={{width : "200px"}} src={item.imagen} alt={item.name}/>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <Link to={`/detail/${item.id}`}>Ver Detalle</Link>
                </div>
    )
}

export default Items    