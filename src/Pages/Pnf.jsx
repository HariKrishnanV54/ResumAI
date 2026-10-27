import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{ height: '90vh' }} className='d-flex justify-content-center align-items-center flex-column text-center p-3'>
      <img style={{ maxWidth: '300px' }} className='w-50 img-fluid mb-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-gU6OqhofUYshqfxIXvaufTHHo5TfuTSti0XbWtmjAd3-2LDoopnwbKP&s=10" alt="Page Not Found" />

      <h1 className='fs-3 fw-bold mb-4'>WE ARE SORRY, LOOKS LIKE YOU'RE LOST</h1>

      <Link to={'/'} className='btn btn-dark px-4 py-2'>Back to Home</Link>
    </div>
  )
}

export default Pnf