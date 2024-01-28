import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUpload = async () => {
    try {
      //   const formData = new FormData();
      //   formData.append("image", selectedImage);
      //   console.log(formData);
      // Log the FormData object to the console

      const response = await axios.post(
        "http://localhost:3001/api/upload",
        selectedImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Error uploading image");
    }
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    console.log(selectedImage);
  };
  return (
    <div>
      <input
        type="file"
        className="form-control"
        onChange={handleImageChange}
        id="inputGroupFile02"
      />
      <button onClick={handleUpload}>submit</button>
    </div>
  );
};

export default Test;
