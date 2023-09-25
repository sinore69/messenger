'use client'
import React from 'react';
import axios from 'axios';
function page() {
  async function handlesubmit(){
    await axios.post('/api/friendrequest');
  }
  return (
    <div className='absolute top-5 left-2/4'>
        <div>
            friend requiest
        </div>
        <div>
          <section>
            <input placeholder='search'></input>
            <button onClick={()=>handlesubmit()}>click</button>
          </section>
        </div>
    </div>
  )
}

export default page