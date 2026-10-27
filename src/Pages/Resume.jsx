import React from 'react'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { PiDownloadDuotone } from 'react-icons/pi'
import { Link } from 'react-router-dom'



function Resume() {
  return (
    <div>
      <div style={{height:'100vh'}} className='container'>
    <h1 className='text-center mt-5'>Create an AI frendly Resume in Minites </h1>
    <div className="row mt-5 ">
      <div className="col-lg-1"></div>
      <div  className="col-lg-4 rounded shadow text-center p-5">
       <IoDocumentTextOutline  className='fs-1 mb-3 text-primary  '/>
        <h4>Add Your Details</h4>
        <p>Our AI will generte Skills & Summery</p>
        <h5>Step 1</h5>
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-4 rounded shadow text-center p-5 ">
        <PiDownloadDuotone className='fs-1 mb-3 text-danger'  />
       <h4>Download ypur Resume</h4>
        <p>Download PDF and start applying</p>
        <h5>Step 2</h5>
      </div>
      <div className="col-lg-1"></div>
    </div>
    <div className='text-center mt-5'>
      <Link to={'/resume-details'}  style={{backgroundColor:'#a48671'}} className='btn text-light'> Lets Start</Link>
      </div>
    </div>
    </div>
  )
}

export default Resume
