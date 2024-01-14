'use client'
import React from 'react';
import Searchfriend from '@/form/Searchfriend';
function page() {


  return (
    <div className='absolute top-5 left-2/4'>
        <div>
            friend request
        </div>
        <div>
          <Searchfriend></Searchfriend>
        </div>
    </div>
  )
}

export default page