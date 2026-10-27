import React from 'react'
import { FaFacebookF, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

function Footer() {
  return (
    <div style={{backgroundColor: '#a17463',height:"300px"}} className= 'container-fluid text-light p-5'>
      <div className="row">
        <div className="col-lg-4">
          <h4>ResumAI</h4>
          <p style={{ textAlign: 'justify' }}>
            An AI Powered Resume Builder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.
          </p>
        </div>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <h4>Contact Us</h4>
          <p> <MdOutlineMail />resumal@gmail.com</p>
          <p> <FaPhone /> 95948454651</p>
          <h4>Connect with US</h4>
          <div className='fs-5' >
            <FaInstagram /> 
            <FaFacebookF className='mx-3'/>
            <FaWhatsapp />
        </div>
    </div>
      </div>
      <h4 className='text-center mt-2'>Designed & built with ❤️ using React</h4>
    </div>

  )
}

export default Footer
