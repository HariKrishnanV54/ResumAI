import React, { useEffect, useRef, useState } from 'react'
import { FaDownload, FaEdit } from 'react-icons/fa'
import Edit from '../Components/Edit'
import { Link, useParams } from 'react-router-dom'
import { IoMdRefresh } from 'react-icons/io'
import { GrFormPrevious } from 'react-icons/gr'
import Preview from '../Components/Preview'
import { downloadResunmeApi, viewResumeApi } from '../service/apiService'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';



function View() {
  // 1. Fixed state declaration syntax using brackets []
  const [resume, setResume] = useState({})

const previewRef = useRef()

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

const downloadCV = async () => {
  const previewtag = previewRef.current
  const canvas = await html2canvas(previewtag)
  canvas.toBlob(async (imgFile) => {            
    const formData = new FormData()
    formData.append("file", imgFile)
    formData.append("upload_preset", "Resume_AI")
    const result = await fetch("https://api.cloudinary.com/v1_1/oqugyb9k/image/upload", {
      method: "POST",                          
      body: formData
    })
    const serverData = await result.json()
    const url = serverData.secure_url
    // console.log(url)
    generatePDF(url)   
  })
}


 const generatePDF = async (resumeImg)=>{
    const pdf = new jsPDF()
    const imageWidth = pdf.internal.pageSize.getWidth()
    const imageHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeImg,"PNG",0,0,imageWidth,imageHeight)
    const today = new Date()
    const timestamp =`${today.toLocaleDateString()},${today.toLocaleTimeString()}`
     console.log(timestamp);

     const result = await downloadResunmeApi({timestamp,resumeImg,resumeId:resume.id,jobRole:resume.job})

     if(result.status===201){
      pdf.save(`${resume.fullName}CV.pdf`)
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
            <button onClick={downloadCV} style={{ color: "brown" }} className='btn'><FaDownload />Download CV</button>
            {/* Edit */}
            <Edit resumeDetails={resume}  setResumeDetails={setResume}/>
            {/* All Resume */}
            {/* <Link style={{ color: "brown" }} to={'/all-resume'} className='btn'><FaEdit />All Resumes</Link> */}
            {/* Download History */}
            {/* <Link style={{ color: "brown" }} to={'/downloads'} className='btn'><IoMdRefresh />Download History</Link> */}

            {/* Back */}
            <Link style={{ color: "brown" }} to={'/resume-details'} className='btn'><GrFormPrevious />Previous</Link>

          </div>
          <div ref={previewRef} className='p-5'>
            <Preview resumeDetails={resume}/>
          </div>
        </div>

        <div className="col-lg-2"></div>
      </div>
    </div>
  )
}

export default View