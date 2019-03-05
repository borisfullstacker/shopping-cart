import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

let initialState={
    products:[
      {  name:"",
         price:"",
         pic:"",}
    ],

    currentProductView:0,

    ordersList:[{
        name:"",
        price:"",
        pic:""
        }],
   
            name:"",
            price:"",
            pic:"",
      


}

let reducer = (state= initialState, action)=>{
    switch(action.type){
        case "GET_ALL":

            return Object.assign({},state, {products :[...action.payload]});

        case "NEXT":
        if (state.products.length-1>state.currentProductView){
            return Object.assign({},state,{currentProductView:state.currentProductView+1});
        }
        return {...state}

        case "PREV":
        if(state.currentProductView>0){
            return Object.assign({},state, {currentProductView:state.currentProductView-1});
        }
        return {...state}

        case "GET_ALL_ORDERS":
            let newProductList = action.payload.map((item, index)=>{
                for (let i=0; i<state.products.length; i++){
                    if (item.id===state.products[i]._id){
                        return state.products[i]
                    }
                }  
            })
           return Object.assign({},state,{ordersList:newProductList});

        case "ADD_TO_LIST":

           return Object.assign({},state,{ordersList:[action.payload].concat(state.ordersList)})

        case "HANDLE_PANEL_CHANGE":
            
            return Object.assign({},state, {[action.name]:action.payload})
        
        case "ADD_TO_PRODUCT_LIST":
            
            return Object.assign({},state,{products:state.products.concat(action.payload),name:"",pic:"",price:""})
       
            default:
           return state;
        }


}


let store= createStore(reducer, applyMiddleware(thunk))

export default store;