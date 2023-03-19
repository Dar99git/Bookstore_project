import React from 'react'
import booksbook7 from "../Pages/booksbook7.jpeg"
import booksbook8 from "../Pages/booksbook8.jpeg"
import booksbook9 from "../Pages/booksbook9.jpeg"
import booksbook10 from "../Pages/booksbook10.jpg"
import booksbook11 from "../Pages/booksbook11.jpg"

export default function Books() {
  return (
    <div className='booksprg'>
      <div>
      <div className="grid-container">
        <div className="grid-item">
          <img src={booksbook7} alt="" className="booksbook" />
            <div className='educational'>
              <h1>EDUCATION</h1>
            </div>         
        </div>
        <div>
        <h1>Explore our Top Categories</h1>
        </div>
        <div className="grid-item">
          <img src={booksbook8} alt="" className="booksbook" />
          <div className='educational'>
              <h1>NOVELS</h1>
            </div> 
        </div>
        <div className="grid-item">
          <img src={booksbook9} alt="" className="booksbook" />
          <div className='educational'>
              <h1>CHILDREN</h1>
            </div> 
        </div>
        <div className="grid-item">
          <img src={booksbook10} alt="" className="booksbook" />
          <div className='educational'>
              <h1>SHORT STORY</h1>
            </div> 
        </div>
        <div className="grid-item">
          <img src={booksbook11} alt="" className="booksbook" />
          <div className='educational'>
              <h1>FICTION</h1>
            </div> 
        </div>
      </div>
    </div>
    </div>
  )
}
