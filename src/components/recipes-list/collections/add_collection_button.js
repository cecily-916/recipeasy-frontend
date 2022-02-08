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
      .post("http://localhost:8080/collections", newCollection)
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
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setNewCollection((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Add Collection</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <br />
          <input
            id="name"
            value={newCollection.name}
            placeholder="Collection Name"
            type="text"
            onChange={handleChange}
          />
          <input type="Submit" />
        </form>
        <br />
        <button className="close-btn" onClick={() => setTrigger(false)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AddCollectionPopup;
