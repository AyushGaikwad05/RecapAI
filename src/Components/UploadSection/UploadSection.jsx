import React, { useState } from "react";
import "./../UploadSection/UploadSection.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const UploadSection = () => {
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("video/")) {
      toast.error("Please select a video file");
      return;
    }

    if (file.size > 500 * 1024 * 1024) {
      toast.error("Video must be less than 500 MB");
      return;
    }

    setVideo(file);

  
  };

  const handleUpload = async () => {
    if (!video) {
      toast.error("Please select a video first");
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", video);

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();


      if (!response.ok) {
        throw new Error(
          data.detail?.[0]?.msg ||
          data.message ||
          "Upload failed"
        );
      }

  
      localStorage.setItem("videoid", data.video.video_id);
      localStorage.setItem("videoUrl", data.video.url);

      toast.success("Video uploaded successfully!");

      setTimeout(() => {
  window.location.href = "/workspace";
}, 4000);

    } catch (error) {

      toast.error(error.message);

    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <div className="upload-content">

        <h3>Upload Your Video</h3>

        <div className="file-container">

          <i ><IoMdAddCircleOutline /></i>

          <input
          id="video"
            type="file"
            accept="video/*"
            onChange={handleFileChange}
          />
 <label for="video">Click Here to Choose a video</label>
        </div>

        {video && (
          <p>
            Selected: {video.name}
          </p>
        )}

      </div>

      <button
        className="upload-button "
        onClick={handleUpload}
        disabled={uploading}

      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default UploadSection;