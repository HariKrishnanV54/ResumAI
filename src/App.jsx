import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Saved from './Pages/Saved'
import Info from './Pages/Info'
import Download from './Pages/Download'
import Pnf from './Pages/Pnf'
import View from './Pages/View'
import Header from './Components/Header'
import Footer from './Components/Footer' 
import { ToastContainer } from 'react-toastify';

function App() {

  //Pages : Homepage, Resume, UserInfo, ViewResume, All saved resume, Download resume, page not found
  //Components : Header, Footer, UserInfo, PreviewSection, EditResume
  return (
    <>

      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/resume-details' element={<Info />} />
        <Route path='/all-resumes' element={<Saved />} />
        <Route path='/downloads' element={<Download />} />
        <Route path='/*' element={<Pnf />} />
        <Route path='/resume/:id' element={<View />} />
      </Routes>
      <Footer/>
     <ToastContainer position="top-right" theme="colored" autoClose={3000} />
    </>
  )
}
export default App
