import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { deleteAllResunmeApi, getAllResunmeApi } from '../service/apiService'
import { resumes } from 'react-dom/server'
import { FaSearch } from 'react-icons/fa'

function Saved() {

  const [allResumes, setAllResumes] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [dummyAllResumes,setDummyAllResumes] = useState([])
  console.log(searchKey);

  useEffect(() => {
    searchKey === "" ? getAPIResumes() : searchCandidate()
  }, [searchKey])

  const searchCandidate =  () => {  
      setAllResumes(dummyAllResumes.filter(item => item.job.toLowerCase().includes(searchKey.toLowerCase())))
  }



  const getAPIResumes = async () => {
    const response = await getAllResunmeApi()
    if (response.status === 200) {
      setAllResumes(response.data)
      setDummyAllResumes(response.data)
    }
  }

  const removeResume = async (id) => {
    if (confirm("Are you sure, do you want to delete this resume")) {
      const response = await deleteAllResunmeApi(id)
      if (response.status === 200) {
        getAPIResumes()
      }
    }
  }

  return (
    <div className='container d-flex justify-content-center align-items-center my-5 flex-column'>
      <h1>All Saved Resume</h1>
      <div className='d-flex justify-content-center align-items-center w-50'>
        <input 
          onChange={(e) => setSearchKey(e.target.value)}
          type='text'
          placeholder='Search candidate by their job name'
          className='form-control'
        />
        <FaSearch style={{ marginLeft: "-30px", color: "#6c757d" }} />
      </div>
      <table className="table table-hover table-stripped my-5">
        <thead>
          <tr className='table-dark'>
            <th>#</th>
            <th>resume</th>
            <th>job role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allResumes?.length > 0 ?
              allResumes?.map((resumes, index) => (
                <tr key={resumes?.id}>
                  <td>{index + 1}</td>
                  <td><Link to={`/resume/${resumes?.id}`}>{resumes.fullname.toUpperCase()}</Link></td>
                  <td>{resumes?.job.toUpperCase()}</td>
                  <td><button onClick={() => { removeResume(resumes.id) }} className='btn btn-danger'><MdDelete /></button></td>
                </tr>
              ))
              :
              <tr>
                <td colSpan="4" className="text-center">NO RESUME ADDED YET</td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Saved