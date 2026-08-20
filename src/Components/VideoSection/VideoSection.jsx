import React, { useEffect, useState } from "react";
import "./../VideoSection/VideoSection.css";

const VideoSection = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    const url = localStorage.getItem("videoUrl");


    setVideoUrl(url);
  }, []);

  return (
    <div className="video-section">
      {videoUrl ? (
        <video
          controls
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          src={videoUrl}
        />
      ) : (
        <p>No video uploaded</p>
      )}
    </div>
  );
};

export default VideoSection;