import React from "react";

function ConversionPopup({ trigger, setTrigger }) {
  // Conversion button opens up the conversions table from maya kitchen
  // Includes a close button

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="p-16 overflow-y-scroll">
          <img
            className="w-auto pt-6 "
            src="https://www.tablespoon.com/-/media/Images/Articles/Images-for-Posts-PrePandoNext/2009/09/week2/Tbsp_conversion_Updated2.jpg"
            alt="conversionchart"
          />
          <button className="close-btn" onClick={() => setTrigger(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
export default ConversionPopup;
