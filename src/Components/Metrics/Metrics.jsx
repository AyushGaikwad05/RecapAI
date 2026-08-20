import React from 'react'
import './../Metrics/Metrics.css'
const Metrics = () => {
  return (
    <div className='metrics-container '>
        <div className='metrics-content'>
                <h3>2.4M+</h3>
                <p>Hours Transcribed</p>
        </div>
        <div className='horizontal-divider'> </div>
        <div className='metrics-content'>
                <h3>18M+</h3>
                <p>Action Extracted</p>
        </div>
           <div className='horizontal-divider'> </div>
        <div className='metrics-content'>
                <h3>12,400+</h3>
                <p>Team Onboarded</p>
        </div>
           <div className='horizontal-divider'> </div>
        <div className='metrics-content'>
                <h3>97.3%</h3>
                <p>Transcription Accuracy</p>
        </div>
        
    </div>
  )
}

export default Metrics
