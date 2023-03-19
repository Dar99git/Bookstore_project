import React from 'react'

import book1 from "../Pages/book1.jpeg"
import book2 from "../Pages/book2.jpeg"
import book3 from "../Pages/book3.jpeg"
import book4 from "../Pages/book4.jpeg"
import book5 from "../Pages/book5.jpeg"
import book6 from "../Pages/book6.jpeg"

export default function Home() {
  return (
    <div>
      <h1 className='homebookstore'>BOOKSTORE</h1>
      <div className="grid-container">
        <div className="grid-item">
          <img src={book1} alt="" className="book1" />
        </div>
        <div className="grid-item">
          <img src={book2} alt="" className="book1" />
        </div>
        <div className="grid-item">
          <img src={book3} alt="" className="book1" />
        </div>
        <div className="grid-item">
          <img src={book4} alt="" className="book1" />
        </div>
        <div className="grid-item">
          <img src={book5} alt="" className="book1" />
        </div>
        <div className="grid-item">
          <img src={book6} alt="" className="book1" />
        </div>
      </div>
    </div>
    
  )
}
