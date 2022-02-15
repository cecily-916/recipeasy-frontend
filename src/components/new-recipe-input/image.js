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
      </div>
    );
  } else {
    return "";
  }
}

export default DisplayImgPreview;
