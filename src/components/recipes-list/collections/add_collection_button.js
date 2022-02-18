import React from "react";
import { useState } from "react";
import axios from "axios";

function AddCollectionPopup({ userid, trigger, setTrigger, setPageUpdate }) {
  const [newCollection, setNewCollection] = useState({
    userid: userid,
    name: "",
  });
  console.log(userid);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newCollection);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/collections`, newCollection)
      .then((response) => {
        console.log(response);
        alert("Success!");
        setNewCollection({
          userid: userid,
          name: "",
        });
        setPageUpdate(response);
      })
      .catch((error) => {
        console.log("Error: Post collection failed.");
      });
    setTrigger(false);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setNewCollection((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  return trigger ? (
    <div className="popup z-50">
      <div className="popup-inner text-center">
        <h1>Add Collection</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            value={newCollection.name}
            placeholder="Collection Name"
            type="text"
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="Submit"
            className="font-bold text-xl border p-3 rounded-md shadow-sm text-emerald-900"
          />
        </form>
        <br />
        <button
          className="absolute top-8 right-16 close-btn"
          onClick={() => setTrigger(false)}
        >
          <span class="material-icons">highlight_off</span>
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AddCollectionPopup;
