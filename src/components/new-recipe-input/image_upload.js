import React, { useEffect, useState } from "react";
import axios from "axios";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      let FormData = require("form-data");
      const data = new FormData();
      data.append("image", selectedImage);
      // let url = URL.createObjectURL(selectedImage);
      const config = {
        headers: {
          Authorization: "Client-ID 15bebad96249efe",
        },
      };

      axios(config)
        .post("https://api.imgur.com/3/image", data, config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [selectedImage]);

  console.log(selectedImage);
  return (
    <div>
      <p>Upload recipe main image</p>
      {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
      <br />
      <input
        type="file"
        name="myImage"
        inputProps={{ accept: "image/*" }}
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
