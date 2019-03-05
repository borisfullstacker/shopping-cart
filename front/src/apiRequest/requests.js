

export const getFullList =()=>{
    return new Promise ((resolve,reject)=>{
        fetch('http://localhost:3000/products')
        .then((res)=>res.json(res))
        .then((data)=>{
            resolve(data);
        })
    })
 }


export const addNewProduct=(obj)=>{
    return (dispatch,getState)=>{
        fetch('http://localhost:3000/products',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(obj)
        }).then((res)=>res.json())
          .then((data)=>dispatch({type:"ADD_TO_PRODUCT_LIST",payload:data}));
    }
}

export const getFullOrderList =()=>{
    return (dispatch,getState)=>{
        fetch('http://localhost:3000/buy')
        .then((res)=>res.json(res))
        .then((data)=>{
            dispatch({type:"GET_ALL_ORDERS",payload:data})
        })
    }
}


export const addToOrders =(obj)=>{
    return (dispatch,getState)=>{
        fetch('http://localhost:3000/buy',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(obj)
        }).then((res)=>res.json())
          .then(()=>{dispatch({type:"ADD_TO_LIST",payload:obj})});
    }
}