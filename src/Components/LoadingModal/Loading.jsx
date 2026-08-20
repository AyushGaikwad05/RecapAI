import React from 'react'
import './../LoadingModal/Loading.css'

const Loading = () => {
  return (
    <div className="processing-overlay">

                    <div className="processing-box">

                        <div className="loader"></div>

                        <h2>
                            Please wait...
                        </h2>

                        <p>
                            We are processing your video.
                        </p>

                        <p className="processing-subtext">
                            Transcribing audio and creating
                            embeddings. This may take a few moments.
                        </p>

                    </div>

                </div>
  )
}

export default Loading
