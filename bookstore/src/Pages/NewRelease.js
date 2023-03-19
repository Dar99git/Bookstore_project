import React from 'react'
import NR1 from "../Pages/NR1.jpeg"
import NR2 from "../Pages/NR2.jpeg"
import NR3 from "../Pages/NR3.jpeg"
import NR4 from "../Pages/NR4.jpeg"

export default function NewRelease() {
  return (
    <div>
      <div>
      <div className="grid-container8">
        <div className="grid-item8">
        <img src={NR1} alt="" className="NR"/>
            <div className='nrl'>
              <h1>The Song Of The Cell</h1>
            </div> 
            <div className='nrs'>
              <h1>Siddhartha Mukherjee</h1>      
            </div>        
        </div>
        <div className="grid-item8">
          <img src={NR2} alt="" className="NR" />
          <div className='nrl'>
              <h1>Conversations on Love</h1>
            </div> 
            <div className='nrs'>
             <h1>Natasha Lunn</h1>      
            </div>
        </div>
        <div className="grid-item8">
          <img src={NR3} alt="" className="NR" />
          <div className='nrl'>
              <h1>The lady beauty Scarlett</h1>
            </div> 
            <div className='nrs'>
        <h1>Arthur Doyle</h1>      
      </div>
        </div>
        <div className="grid-item8">
          <img src={NR4} alt="" className="NR" />
          <div className='nrl'>
              <h1>Once upon a time</h1>
            </div> 
            <div className='nrs'>
             <h1>Klien Marry</h1>      
            </div>
         </div>
      </div>
    </div>
    </div>
  )
}
