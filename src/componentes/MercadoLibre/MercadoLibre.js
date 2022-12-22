import {  useState } from "react";


const MercadoLibre = ()=>{

    const [productos, setProductos] = useState([])

    const [input, setInput] = useState('')

    const [isLoading, setIsloading] = useState(false)


    const handleOnSubmit=(e)=>{
        e.preventDefault()
        setIsloading(true)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response=>{
            return (response.json())})

            .then(json=> setProductos(json.results))
                .catch(error=>{
                console.log(error);
            }).finally(()=>{
                setIsloading(false)
            })
        

    }

    if(isLoading){
        return <h1>BUSCANDO...</h1>    }


    console.log(fetch (''));
    return(
        <div>
            <h1>Mercado Libre</h1>
            <form onSubmit={handleOnSubmit}>
                <input value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button type="submit">Buscar</button>
            </form>
            <div>
                {
                    productos.map(productos=>{
                        return(
                            <div key= {productos.id}>
                                <img src= {productos.thumbnail} alt={productos.title}/>
                                <h2>{productos.title}</h2>
                                <h3>${productos.price}</h3>
                           </div>
                        )
                    })
                }
            </div>
        </div>
    )
}   

export default MercadoLibre