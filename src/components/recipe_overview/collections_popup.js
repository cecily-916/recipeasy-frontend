import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Userfront from "@userfront/react";

function AddToCollectionPopup({ recipe, trigger, setTrigger }) {
  // Opens a popup that allows user to add the recipe to an existing collection

  const [collectionID, setCollectionID] = useState();
  const [collectionsData, setCollectionsData] = useState([
    "No existing collections",
  ]);
  const user = Userfront.user;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/${user.userId}/collections`)
      .then((response) => {
        console.log(response);
        setCollectionsData(response.data);
      })
      .catch((error) => {
        console.log("error: Get request failed.");
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .patch(
        `http://localhost:8080/recipes/${recipe.id}/collections/${collectionID}`
      )
      .then((response) => {
        console.log(response);
        alert(
          `Recipe successfully assigned to ${collectionID} collection!`
        ).catch((error) => {
          console.log("error: Assignment request failed.");
        });
      });
  };

  const handleChange = (event) => {
    setCollectionID(event.target.value);
  };

  const collectionItems = collectionsData.map((collection, index) => {
    return (
      <option value={collection.name} key={index}>
        {collection.name}
      </option>
    );
  });

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Add to Collection</h1>
        <form onSubmit={handleSubmit}>
          <select
            value={collectionID}
            onChange={handleChange}
            placeholder="Select Collection"
          >
            {collectionItems}
          </select>
          <br />
          <input type="Submit" />
        </form>
        <br />
        <button className="close-btn" onClick={() => setTrigger(false)}>
          Close Form
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AddToCollectionPopup;
