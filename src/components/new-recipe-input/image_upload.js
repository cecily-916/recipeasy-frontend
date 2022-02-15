import React, { useEffect, useState } from "react";
import axios from "axios";

const UploadAndDisplayImage = ({ setImage, setImageDelete, setImageId }) => {
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

      axios
        .post("https://api.imgur.com/3/image", data, config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setImage(response.data.link);
          setImageDelete(response.data.deletehash);
          setImageId(response.data.id);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [selectedImage]);

  return (
    <div>
      {/* {selectedImage && (
        <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )} */}
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
