import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getFullList, addToOrders,getFullOrderList} from '../apiRequest/requests'

 class Item extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
    <div>
      <div style={{margin:"0 auto", width:"fit-content"}}>
          <h3>{this.props.products[this.props.index].name}</h3>
          <img style={{width:200,height:100}} src={this.props.products[this.props.index].pic}/>
          <p>{this.props.products[this.props.index].price}</p>
      </div>
      <div style={{margin:"0 auto", width:"fit-content"}}>
        <button type="button" onClick={this.props.prev}>PREV</button>
        <button type="button" onClick={this.props.next}>NEXT</button>
        <button type="button" onClick={this.props.addToOrders.bind(this,this.props.products[this.props.index])}>BUY</button>
      </div>
     </div>
  )
}


componentDidMount(){
  this.props.getAll();
}

}

const mapStateToProps=(state)=>{
  return{
    products:state.products,
    index:state.currentProductView,
  }
}

const mapDisptachToProps=(dispatch)=>{
  return{

   next:()=>dispatch({type:"NEXT"}),
   
   prev:()=>dispatch({type:"PREV"}),
   
   addToOrders:(obj)=>dispatch(addToOrders(obj)),

   getAll:()=>{
     getFullList().then((data)=>{
      dispatch({type:"GET_ALL",payload:data})
      dispatch(getFullOrderList())
     })  
    },

 }
}

export default connect(mapStateToProps,mapDisptachToProps)(Item)
