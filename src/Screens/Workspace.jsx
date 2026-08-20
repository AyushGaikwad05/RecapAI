import React, { useEffect, useState } from 'react';

import './../Screens/Workspace.css';

import VideoSection from '../Components/VideoSection/VideoSection';
import ActionSection from '../Components/ActionSection/ActionSection';
import ChatSection from '../Components/ChatSection/ChatSection';
import Navbar from '../Components/Navbar';
import Loading from '../Components/LoadingModal/Loading';



const Workspace = () => {

    const [processing, setProcessing] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [action,setAction]=useState(null);
 

useEffect(() => {

    const handleRefresh = () => {

        localStorage.removeItem("videoid");
        localStorage.removeItem("videoUrl");
    };

    window.addEventListener(
        "beforeunload",
        handleRefresh
    );

    //   window.location.href = "/";

    return () => {

        window.removeEventListener(
            "beforeunload",
            handleRefresh
        );

    };

}, []);
    useEffect(() => {

        const processVideo = async () => {

            try {

                setProcessing(true);
                setError(null);


                const videoUrl =
                    localStorage.getItem("videoUrl");


                if (!videoUrl) {

                    throw new Error(
                        "No uploaded video found. Please upload a video to chat."
                    );

                }

                const videoId =
                    localStorage.getItem("videoid");


                if (!videoId) {

                    throw new Error(
                        "No video ID found in localStorage."
                    );

                }


                const response = await fetch(
                    "https://recapai-backend-8b8n.onrender.com/process",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            video_id: videoId,
                            video_url: videoUrl
                        })
                    }
                );

                if (!response.ok) {

                    const errorText =
                        await response.text();

                    throw new Error(
                        `Backend returned ${response.status}: ${errorText}`
                    );

                }


                const data =
                    await response.json();


                setResult(data);

  

            } catch (error) {

                console.error(
                    "Video processing error:",
                    error
                );

                setError(
                    error.message
                );


            } finally {

                setProcessing(false);

            }

        };

        processVideo();

    }, []);


    return (
 <>
 
         <Navbar className=""></Navbar>
        <div className="workspace-page">
            <div className="left-section">
                <VideoSection />
              {
                action ? <ActionSection action={action} className="action-section" /> :<div className='flex align-center justify-center text-gray-400 '>
                    No Actions to display
                </div>
              }

            </div>


            <div className="right-section">

               {error ?  (

                <div className="processing-error">

                    {error}

                </div>
                
               ) :  <ChatSection
        summary={result?.summary}
        videoId={localStorage.getItem("videoid")}   
        setAction={setAction}    
    />

               }
 

            </div>


        

            {processing && (

               <Loading></Loading>

            )}
      
        </div>
 </>

    );

};


export default Workspace;