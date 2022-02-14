import React, { useEffect } from "react";

function DisplayImgPreview({ image }) {
  if (image) {
    return (
      <div>
        <img
          className="rounded-sm"
          alt="main"
          width={"250px"}
          src={URL.createObjectURL(image)}
        />
        <br />
        {/* <button onClick={() => setImage(null)}>Remove Image</button> */}
      </div>
    );
  } else {
    return "";
  }
}

export default DisplayImgPreview;
