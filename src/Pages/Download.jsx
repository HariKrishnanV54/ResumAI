import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Download() {
  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center my-4'>
        <h3 className='fs-1'>Download Resume History</h3>

        <Link to="/" className='d-flex align-items-center gap-1 text-decoration-none'>
          <IoArrowBackSharp />Back
        </Link>
      </div>
      <div className='row my-5'>
        {/* Duplicate the row according to the resume count */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div style={{ height: '300px' }} className="rounded shadow p-3 d-flex flex-column">
            <h5>Review at : Time stamp</h5>
            <div className='mt-3 text-center flex-grow-1 overflow-hidden'>
              <Link to={'/resume/1'}>
                <img 
                  style={{ maxHeight: '180px', width: 'auto', objectFit: 'contain' }} 
                  className='img-fluid rounded' 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8QFLjFl8ViThW3YEp_2EACOiOTm2NOUb91igVTV22qg&s=10" 
                  alt="resume preview"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download