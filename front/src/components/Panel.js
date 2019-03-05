import React from 'react'
import './style.css'
import {connect} from 'react-redux'
import {addNewProduct} from '../apiRequest/requests'


function Panel(props){
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Add new product</h1>
            <form style={{width:"fit-content",margin:"0 auto"}}>
                <p>
                <label>Product Name</label>
                <input type="text"  name="name" value={props.name} onChange={props.handleChange}/>
                 </p>
                 <p>
                <label>Product Pic Url</label>
                <input type="text"  name="pic" value={props.pic} onChange={props.handleChange}/>
                 </p>    
                 <p>
                <label>Product Price</label>
                <input type="text"  name="price" value={props.price} onChange={props.handleChange} />
                </p>
                <button type="button" onClick={()=>{props.submit(props)}}>Submit</button>

            </form>
        </div>

)


}

const mapStateToProps=(state)=>{
    return{

        name:state.name,
        pic:state.pic,
        price:state.price,

    }
   
}

const mapDispatchToProps=(dispatch)=>{
    return{
    handleChange:(e)=>{
        dispatch({type:"HANDLE_PANEL_CHANGE", payload:e.target.value, name:e.target.name})
    },
    submit:(e)=>{
        let newItem={
            name:e.name,
            pic:e.pic,
            price:e.price
        }
        dispatch(addNewProduct(newItem))
    }
}
}


export default connect(mapStateToProps,mapDispatchToProps)(Panel)