


const items =[{
    id:"1",
    name: "Camisetas",
    description: "Camiseta Talleres Givova Titular 2022",
    imagen: './images/titular.webp',
    price:'$9500',
    stock: "50",
  },
  
  { 
    id:"2",
    name: "Buzos",
    description: "Buzo Givova Talleres Canguro Frisa",
    imagen: './images/buzo.jpg',
    price: '$12000',
    stock: "50",
  },
  
  {
    id:"3",
    name: "Camperas",
    description: "Campera Givova Talleres Inout Rustico",
    imagen: './images/campera.jpg',
    price: '$15000',
    stock: "50",
  },
  
  {
    id:"4",
    name: "Musculosas",
    description: "Musculosa Talleres Givova Entrenamiento",
    imagen: './images/musculosas.jpg',
    price:'$8500',
    stock: "50",
  }]
  


export const getItems = ()=>{
    return new Promise ((resolve)=>{
      setTimeout(()=>{
        resolve(items)
      }, 2000)
    })
  }


export const getItemsById =(id="1")=>{
    
  return new Promise((resolve)=>{
    setTimeout(()=>{  
      resolve(items.find(item=>item.id===id))
    }, 2000)
  })
} 