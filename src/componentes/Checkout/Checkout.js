import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const { cart, getTotal, clearCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)   

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:""        
      }) 

    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    } 

    
    const handleCreateOrder = async (e) => {
        e.preventDefault()
        setLoading(true)  

        try {
            const objOrder = {
                buyer: {
                    name: user.name,
                    email: user.email,
                    phone: user.phone
                },
                items: cart,
                total: getTotal()                
            }            
    
            const batch = writeBatch(db)
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
    
            const { docs } = productsAddedToCartFromFirestore
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(orderRef, objOrder)
    
                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 2000)

                console.log(orderAdded.id)
            } else {
                console.error('Hay productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            /* reiniciar formulario */
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('phone').value = ''

            setUser({
                name:"",
                email:"",
                phone:""
            })  

            alert('Pedido confirmado con exito!')

            setLoading(false)
        }
    } 
       

    if(loading) {
        return <h1>Confirmando Pedido...</h1>
        
    }

    return (
        <div>
            <h1 className='title'>Complete con sus datos:</h1>
            <form >

                Nombre:                
                <input required placeholder='Nombre' type="text" id='name' name='name' onChange={handleInputChange}></input>
                <br></br>
                Email:
                <input required placeholder='Email' type="text" id='email' name='email' onChange={handleInputChange}></input>                
                <br></br>
                Tel.:
                <input required placeholder='Telefono' type="text" id='phone' name='phone' onChange={handleInputChange}></input>                
                <br></br>
                
                <button onClick={handleCreateOrder}>Confirmar Pedido</button>
            </form>
            
        </div>


    )
}

export default Checkout