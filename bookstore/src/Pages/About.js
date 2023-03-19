import React from 'react'
import aboutimg from "../Pages/aboutimg.jpeg"


export default function About() {
  return (
    <div>
       <h1 className='aboutusprg'>About Us</h1>
       <div className='container'>
        <div className='item1'><img src={aboutimg} alt="" className="aboutimg" /> </div>
        <div className="item2">
          <p>
                Bookstore is pleasure to sell, all books <br/> in online. We provide the most<br/> comprehensive selection of books for <br/>sale. Our commitment is to give our<br/>clients with a great and devoted<br/> service that provides ease of<br/> purchasing and payment, as well as<br/> rapid and free delivery of the broadest <br/>choice of titles. Our online ordering<br/> service is easy to use and uses<br/> extremely secure payment options.
          </p>
        </div>
       </div>
       
    </div>
  )
}
