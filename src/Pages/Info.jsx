import React from 'react'
import Resumeinput from '../Components/Resumeinput'
import Preview from '../Components/Preview'

function Info() {

   const [resumeDetails, setResumeDetails] = React.useState({
      fullname: "", location: "", job: "", email: "", phone: "", github: "", linkedin: "", degree: "", college: "", year: "", skills: [], summary: ""
    });

  return (
    <div>
     <div className="container">
      <div className="row">
        <div className="col-lg-6">
          < Resumeinput  resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
        </div>
        <div className="col-lg-6">
          {resumeDetails.fullname&&<Preview  resumeDetails={resumeDetails}/>}
        </div>
      </div>
     </div>
    </div>
  )
}

export default Info
