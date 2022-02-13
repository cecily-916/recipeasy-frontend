import React from "react";

function FeedbackForm({ trigger, setTrigger }) {
  // Opens a popup that allows user restore archived recipes

  return trigger ? (
    <div className="popup z-50">
      <div className="popup-inner content-center min-w-min rounded-md">
        <button
          className="font-bold absolute top-4 right-16 close-btn"
          onClick={() => setTrigger(false)}
        >
          X
        </button>
        <section className="pr-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd6dTBPvbwC4eKFBir_eL0aKJsgA-E8xKMIlajJ2nEYnt7lKw/viewform?embedded=true"
            title="feedback"
            width="640"
            height="701"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </section>
      </div>
    </div>
  ) : (
    ""
  );
}

export default FeedbackForm;
