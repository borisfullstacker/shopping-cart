import React from 'react'
import {connect} from 'react-redux'


function Table(props){
    return(
        
        <table style={{width:"30%",textAlign:"center",margin:"0 auto"}}>
        <thead>
          <tr>
            <th>
              name
            </th>
            
            <th>
              pic
            </th>
            
            <th>
              price
            </th>
          </tr>
        </thead>
        <tbody>
            {props.ordersList.map((item,key)=>{
               return (
                  <tr key={key}>
                    <td>{item.name}</td>
                    <td><img style={{width:50}} src={item.pic}/></td>
                    <td>{item.price}</td>
                  </tr>
               )
            })}
        </tbody>
      </table>
    )
}



const mapStateToProps=(state)=>{
    return{
      ordersList:state.ordersList,
    }
}

export default connect(mapStateToProps)(Table)
  

