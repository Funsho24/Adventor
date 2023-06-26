import React from 'react'
import '../styles/Refresh.css'
import ref from '../assets/ref.png'

const Refresh = ({refresh}) => {
  return (
      <div>
          <div className='no-adventure'>
              <img src={ref} alt="" />
              <h2>No Adventures Left</h2>
              <p>Refresh Page to view different adventures from the long list of ideas available</p>
          
              <button onClick={refresh} className='notbtn'>Refresh</button>
          </div>
    </div>
  )
}

export default Refresh