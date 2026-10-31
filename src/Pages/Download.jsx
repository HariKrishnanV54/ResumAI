import React, { useEffect, useState } from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { getALLDownloadResunmeApi } from '../service/apiService'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Download() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [downloadList, setdownloadList] = useState([])
  const [label,setLabel] = useState([])
  const [value,setValue] = useState([])
  const colorPalate =  ['#873e23','#76b5c5','#eeba95','#090806','#db8142']
  const backgroundColor = label.map((item,index)=>colorPalate[index % colorPalate.length])
    // console.log(downloadList)




    const data = {
      labels:label,
      datasets:[
        {
        label: "Download Count",
        data:value,
        backgroundColor
      }
      ]
    }

 useEffect(() => {
    fetchAllDownloads()
  }, [])


  const fetchAllDownloads = async () => {
    const result = await getALLDownloadResunmeApi()
    setdownloadList(result?.data || [])
    const output = {}
    result?.data?.forEach(item=>{
      const currentJob = item.jobRole
      if(currentJob in output)
      {
        output[currentJob]+=1

      }else{
        output[currentJob]=1
      }
    })

setLabel(Object.keys(output))
setValue(Object.values(output))

  }

 
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center '>
        <h3>Download Resume History</h3>

        <button onClick={handleOpen} className='btn text-light' style={{ backgroundColor: '#a17463' }}>
          View in Chart
        </button>
        <p className='mt-2 fs-3 fw-semibold text-primary'>
          Total download resumes from our site is <span className='fw-bolder text-danger'>{downloadList?.length || 0}</span>
        </p>
      </div>

      <div className='row my-5'>
        {downloadList?.length > 0 ? (
          downloadList.map(resume => (
            <div key={resume?.resumeId || resume?.id} className='col-lg-4 col-12'>
              <div className='rounded shadow p-3 '>
                <h5>Review at : {resume?.timestamp} </h5>
                <div className='mt-4 text-center'>
                  <Link to={`/resume/${resume?.resumeId || resume?.id}`}>
                    <img
                      className='img-fluid rounded border'
                      style={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'contain',
                        backgroundColor: '#f8f9fa'
                      }}
                      src={resume?.resumeImg}
                      alt="resume"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No resume download yet </div>
        )}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ backgroundColor: '#a17463', width: "100%", padding: "10px", color: "white" }}>
            CV Count by Job
          
            </Typography>
           <div>
           <Pie data={data} />
           </div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              This chart porvides an overview of the number of CV downloads associated with differnt jobs on the website. It helps visualize the demand and engagement for CV's accross various career
              catergories, making it easier to identify which job roles attract the highest number of downloads. By compuring downloads counts access roles, the chart can provides useful insights in
               to user preferences and the popularity of differnt career oppertunities on the platform
            </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}

export default Download;