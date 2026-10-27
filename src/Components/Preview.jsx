import { Button, Divider } from '@mui/material';
import React from 'react';

function Preview({ resumeDetails }) {
  return (
    <div className='w-100'>
      <h2>{resumeDetails?.fullname}</h2>
      <p className='lh-1'>Phone: {resumeDetails?.phone}</p>
      <p className='lh-1'>Email: {resumeDetails?.email}</p>
      <p className='lh-1'>LinkedIn: {resumeDetails?.linkedin}</p>
      <p className='lh-1'>GitHub: {resumeDetails?.github}</p>
      <p className='lh-1'>Location: {resumeDetails?.location}</p>
      
      <Divider className='bg-dark mb-3' />
      
      <h2>Professional Summary</h2>
      <p>{resumeDetails?.summary || 'No summary generated yet.'}</p>
      
      <Divider className='bg-dark mb-3' />
      
      <h2>Technical Skills</h2>
      <div className="d-flex flex-wrap gap-2">
        {resumeDetails?.skills?.map((skill, index) => (
          <span key={index}>
            <Button variant='text' className='bg-dark text-light mt-3'>
              {skill}
            </Button>
          </span>
        ))}
      </div>

      <Divider className='bg-dark my-3' />

      <h2>Educational Details</h2>
      <p>Bachelor's Degree: {resumeDetails?.degree}</p>
      <p>University/College Name: {resumeDetails?.college}</p>
      <p>Year of Graduate: {resumeDetails?.year}</p>
    </div>
  );
}

export default Preview;