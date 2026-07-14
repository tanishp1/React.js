import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className='card'>
        <div className='top'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10" alt="" />
          <button>Save <Bookmark /></button>
        </div>
        <div className='center'>
          <h3>Amazon <span>5 day ago</span></h3>
          <h3>Senior UI/UX design</h3>
        </div>
        <div>
          <h3>Part time</h3>
          <h3>Full time</h3>
        </div>
        <div className='bottom'>
          <div>
            <h4>$120/hr</h4>
            <h4>Mumbai India</h4>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default App
