import React, { useEffect, useState } from 'react'
import { FaDownload, FaEdit } from 'react-icons/fa'
import Edit from '../Components/Edit'
import { Link, useParams } from 'react-router-dom'
import { IoMdRefresh } from 'react-icons/io'
import { GrFormPrevious } from 'react-icons/gr'
import Preview from '../Components/Preview'
import { viewResumeApi } from '../service/apiService'

function View() {
  // 1. Fixed state declaration syntax using brackets []
  const [resume, setResume] = useState({})

  const { id } = useParams()
  console.log(id);
  
  useEffect(() => {
    if (id) {
      getResumeDetails(); // 2. Fixed function call ()
    }
  }, [id])

  const getResumeDetails = async () => {
    try {
      const response = await viewResumeApi(id);
      if (response.status === 200) {
        setResume(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch resume details:", error);
    }
  }

  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* Navigation Icon */}
          <div className="d-flex justify-content-center align-items-center">

            {/* Download icon */}
            <button style={{ color: "brown" }} className='btn'><FaDownload />Download CV</button>
            {/* Edit */}
            <Edit resumeDetails={resume}  setResumeDetails={setResume}/>
            {/* All Resume */}
            {/* <Link style={{ color: "brown" }} to={'/all-resume'} className='btn'><FaEdit />All Resumes</Link> */}
            {/* Download History */}
            {/* <Link style={{ color: "brown" }} to={'/downloads'} className='btn'><IoMdRefresh />Download History</Link> */}

            {/* Back */}
            <Link style={{ color: "brown" }} to={'/resume-details'} className='btn'><GrFormPrevious />Previous</Link>

          </div>
          <div className='p-5'>
            <Preview resumeDetails={resume}/>
          </div>
        </div>

        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View