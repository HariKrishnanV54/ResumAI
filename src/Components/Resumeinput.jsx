import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import jobRole from '../assets/jobRole.json';
import jobSkills from '../assets/jobSkills.json';
import summaries from '../assets/summaries.json';
import { toast } from 'react-toastify';
import saveResumeApi from '../service/apiService';
import { useNavigate, useParams } from 'react-router-dom';

const steps = ['Basic Informations', 'Contact Details', 'Educational Details', 'Review & Submit'];

function ResumeInput({ resumeDetails, setResumeDetails }) {
  const { id } = useParams();
  console.log("Param ID:", id);

  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);

  console.log(resumeDetails);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderFormCount = (stepCount) => {
    switch (stepCount) {
      case 0:
        return (
          <div>
            <h3>Personal Details</h3>
            <div className='row p-3'>
              <TextField 
                value={resumeDetails.fullname} 
                onChange={e => setResumeDetails({ ...resumeDetails, fullname: e.target.value })} 
                id="standard-basic-fullname" 
                label="Full Name" 
                variant="standard" 
              />
              <TextField 
                value={resumeDetails.location} 
                onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} 
                id="standard-basic-loc" 
                label="Location" 
                variant="standard" 
              />
              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label">Choose Job Title</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={resumeDetails.job}
                  onChange={e => setResumeDetails({ ...resumeDetails, job: e.target.value })}
                  label="Job"
                >
                  {jobRole.jobRoles.map((job) => (
                    <MenuItem key={job} value={job}>{job}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3>Contact Details</h3>
            <div className='row p-3'>
              <TextField 
                value={resumeDetails.email}
                onChange={e => setResumeDetails({ ...resumeDetails, email: e.target.value })}
                id="standard-basic-email" 
                label="E-mail" 
                variant="standard" 
              />
              <TextField 
                value={resumeDetails.phone}
                onChange={e => setResumeDetails({ ...resumeDetails, phone: e.target.value })}
                id="standard-basic-contact" 
                label="Contact Number" 
                variant="standard" 
              />
              <TextField 
                value={resumeDetails.linkedin}
                onChange={e => setResumeDetails({ ...resumeDetails, linkedin: e.target.value })}
                id="standard-basic-linkedin" 
                label="LinkedIn Link" 
                variant="standard" 
              />
              <TextField 
                value={resumeDetails.github}
                onChange={e => setResumeDetails({ ...resumeDetails, github: e.target.value })}
                id="standard-basic-github" 
                label="GitHub Link" 
                variant="standard" 
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Educational Details</h3>
            <div className='row p-3'>
              <TextField 
                value={resumeDetails.degree}
                onChange={e => setResumeDetails({ ...resumeDetails, degree: e.target.value })}
                id="standard-basic-degree" 
                label="Bachelors Degree" 
                variant="standard" 
              />
              <TextField 
                value={resumeDetails.college}
                onChange={e => setResumeDetails({ ...resumeDetails, college: e.target.value })}
                id="standard-basic-college" 
                label="University/College" 
                variant="standard" 
              />
              <TextField 
                value={resumeDetails.year}
                onChange={e => setResumeDetails({ ...resumeDetails, year: e.target.value })}
                id="standard-basic-year" 
                label="Year of Graduation" 
                variant="standard" 
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <p>Our AI will generate skills & summary according to your job role. Click the <b>GENERATE SKILLS & SUMMARY</b> button to proceed.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const generateSkillSummary = () => {
    setResumeDetails({
      ...resumeDetails,
      skills: jobSkills[resumeDetails.job] || [],
      summary: summaries[resumeDetails.job] || ''
    });
    handleNext();
  };

  const handleSaveResume = async () => {
    const { fullname, location, job, phone, email, github, linkedin, degree, college, year, skills, summary } = resumeDetails;
  
    if (fullname && location && job && phone && email && github && linkedin && degree && college && year && skills && skills.length > 0 && summary) {
      const response = await saveResumeApi(resumeDetails);
      console.log(response);
      if (response.status === 200) {
        toast.success("Resume added successfully!");
        const resumeId = response.data.id;
        navigate(`/resume/${resumeId}`);
      }
    } else {
      toast.error("Please fill the form completely");
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button variant="contained" color="success" onClick={handleSaveResume}>
              FINISH
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box>
            {renderFormCount(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
            {activeStep === steps.length - 1 ? (
              <Button variant="contained" onClick={generateSkillSummary}>
                GENERATE SKILLS & SUMMARY
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                NEXT
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default ResumeInput;