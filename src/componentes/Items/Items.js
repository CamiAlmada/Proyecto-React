const Items =({item})=>{
    return(
        <div key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                </div>
    )
}

export default Items