import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Landing Section */}
      <div
        style={{
          height: '100vh',
          backgroundImage: 'url(/landing.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        className='d-flex justify-content-center align-items-center'
      >
        <div
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          className='text-center rounded p-5 w-75 text-light'
        >
          <h1 className='fw-bold mb-4'>Designed to Hire. Your Skills, Your Story, Your Next Job - All in One</h1>

          <Link
            to={'/resume'}
            style={{ backgroundColor: '#a48671' }}
            className='btn text-white btn-lg px-4 py-2 mt-2'
          >
            Make your RESUME with AI
          </Link>
        </div>
      </div>
      {/*about*/}

      <div className='container'>
        <h1 className='text-center my-5'>What's ResumAI</h1>
        <div className='row aligh-item-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <p style={{ testAlign: "justify", fontSize: "20px" }}>An AI rBuilder is a web application that helps users create professional
               resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult,
                especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

              <p style={{ testAlign: "justify", fontSize: "20px" }}>
                The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more
                 effective and ATS (Applicant Tracking System) friendly.
              </p>

              <p style={{ testAlign: "justify", fontSize: "20px" }}>
                The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, 
                well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.
  
              </p>

              <p style={{ testAlign: "justify", fontSize: "20px" }}>
                This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that 
                increase their chances of getting shortlisted for job interviews.
              </p>

          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <img style={{height:"75%"}} className='img-fluid' src="/about.png" alt="About" />
          </div>
        </div>
      </div>
      {/*Image*/}

       <div>
      <div
        style={{
          height: '100vh',
          backgroundImage: 'url(/meeting.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        className='d-flex justify-content-center align-items-center'>
          </div>
        </div>
      {/*testimony*/}

      <div className='container'>
        <h1 className='text-center my-5'>Testimony</h1>
        <div className='row aligh-item-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <h4>trusted by professionals worldwide.</h4>
            <p style={{ testAlign: "justify", fontSize: "20px" }}>At Livecareer, we don't just help you create resumes - we help you land job. Weather
              you're a sessional professional or just starting out, our tools are designed to get results. </p>

              <p style={{ testAlign: "justify", fontSize: "20px" }}> 
                In fact, users who used LiveCareer reported getting hired an arrange of 48  days faster.
              </p>

              <p style={{ testAlign: "justify", fontSize: "20px" }}>
                Join thousands of job-centers who've fast teacked their careers witth a resume that truly stands out.
  
              </p>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <div className="row">
              <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="About" />
              </div>

               <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="About" />
              </div>

               <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="About" />
              </div>

               <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="About" />
              </div>

               <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="About" />
              </div>

               <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://tse3.mm.bing.net/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=Api&P=0&h=180" alt="About" />
              </div>

               <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="About" />
              </div>

               <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="About" />
              </div>

               <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="About" />
              </div>

               <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://tse3.mm.bing.net/th/id/OIP.wPWx97qT9JbAIeh4t6TDVQHaHa?pid=Api&P=0&h=180" alt="About" />
              </div>

               <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://img.freepik.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="About" />
              </div>

               <div className="col-md-3 p-3">
                 <img style={{height:"75%"}} className='img-fluid' src="https://tse2.mm.bing.net/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?pid=Api&P=0&h=180" alt="About" />
              </div>
              
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home