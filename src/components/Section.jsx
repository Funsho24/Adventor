import React, {useState} from 'react'
import '../styles/section.css'
import data from '../data'
import Adventures from './Adventures';

const Section = () => {
    const [adventures, setAdventures] = useState(data);
  return (
      <div className='section1'>
          <div className='sec1-heading'>
              <h2 className='take'>Take Yourself</h2>
              <h2 className='ideas'>Adventure Ideas</h2>
          </div>
          <div>
              <Adventures adventures={adventures} />
          </div>
      </div>
  )
}

export default Section