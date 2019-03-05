import React from 'react'
import './style.css'
import { Link } from "react-router-dom";

export default function MainCont() {
  return (

      <nav>
        <ul className="clearfix">
          <Link to="/panel"><li>Panel</li></Link>
          <Link to="/"><li>Store</li></Link>
        </ul>
      </nav>

  )
}
