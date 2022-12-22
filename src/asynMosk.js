


const items =[{
    id:"1",
    name: "Camiseta Titular",
    description: "Camiseta Talleres Givova Titular 2022",
    category: "camisetas",
    imagen: '/images/titular.webp',
    price:'$9500',
    stock: "50",
  },
  
  { 
    id:"2",
    name: "Canguro Talleres",
    description: "Buzo Givova Talleres Canguro Frisa",
    category: "buzos",
    imagen: '/images/buzo.jpg',
    price: '$12000',
    stock: "50",
  },
  
  {
    id:"3",
    name: "Campera Givova",
    description: "Campera Givova Talleres Inout Rustico",
    category: "camperas",
    imagen: '/images/campera.jpg',
    price: '$15000',
    stock: "0",
  },
  
  {
    id:"4",
    name: "Musculosa Femenina",
    description: "Musculosa Talleres Givova Entrenamiento",
    category: "musculosas",
    imagen: '/images/musculosas.jpg',
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


export const getItemsById=(id)=>{
  
  return new Promise (resolve =>{
    setTimeout(()=>{
      resolve(items.find(item=>{
        return item.id===id})) }, 2000)

  })
}    

export const getItemsByCategory =(categoryId)=>{
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve (items.filter(item=>item.category===categoryId))
    }, 2000)
  })
}