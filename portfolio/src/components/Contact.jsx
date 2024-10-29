import React from 'react'
import {CONTACT} from '../constants'
const Contact = () => {
  return (
    <div className='border-b pb-4 border-neutral-600'>
        <h2 className='my-20 text-center text-4xl'>Contact Me</h2>
        <div className='tracking-tighter text-center'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="#">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact