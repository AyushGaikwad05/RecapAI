import React from 'react'
import './../Screens/Upload.css'
import UploadSection from '../Components/UploadSection/UploadSection'
import Navbar from '../Components/Navbar'

const Upload = () => {
  return (
    <div className="upload-screen">
      <Navbar />

      <div className="upload-page">
        <div className="upload-container">
          <UploadSection />
        </div>
      </div>
    </div>
  )
}

export default Upload
