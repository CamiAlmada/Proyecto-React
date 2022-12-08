const ItemsDetail =({item})=>{
    return(
        <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <img style={{width : "200px"}} src={item.imagen} alt="Fotografia"/>
                </div>
    )
}

export default ItemsDetail