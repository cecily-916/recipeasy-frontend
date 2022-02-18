import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Userfront from "@userfront/react";
import AddCollectionPopup from "../recipes-list/collections/add_collection_button";

function AddToCollectionPopup({ recipe, trigger, setTrigger }) {
  // Opens a popup that allows user to add the recipe to an existing collection

  const [collectionID, setCollectionID] = useState();
  const [collectionsData, setCollectionsData] = useState([
    "No existing collections",
  ]);
  const [newCollectionTrigger, setNewCollectionTrigger] = useState(false);
  const [pageUpdate, setPageUpdate] = useState(false);
  const user = Userfront.user;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/${user.userId}/collections`)
      .then((response) => {
        console.log(response);
        setCollectionsData(response.data);
      })
      .catch((error) => {
        console.log("error: Get request failed.");
      });
  }, [pageUpdate]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (collectionID === "Add New Collection") {
      setNewCollectionTrigger(true);
    } else {
      console.log(recipe.ID, collectionID);
      axios
        .patch(
          `${process.env.REACT_APP_BACKEND_URL}/recipes/${recipe.ID}/collections/${collectionID}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log("error: Assignment request failed.");
        });
      alert(`Recipe successfully assigned to collection!`);
      setTrigger(false);
    }
  };

  const handleChange = (event) => {
    setCollectionID(event.target.value);
  };

  const collectionItems = collectionsData.map((collection, index) => {
    return (
      <option value={collection.ID} key={index}>
        {collection.name}
      </option>
    );
  });

  return trigger ? (
    <div className="popup">
      <div className="popup-inner text-center">
        <h1>Add to Collection</h1>
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <select
            className="border"
            value={collectionID}
            onChange={handleChange}
          >
            <option>Select a collection</option>
            {collectionItems}
            <option>Add New Collection</option>
          </select>
          <br />

          <br />
          <input
            className="font-bold text-xl border p-3 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 rounded-md shadow-sm text-emerald-900"
            type="Submit"
          />
        </form>
        <AddCollectionPopup
          userid={user.userId}
          trigger={newCollectionTrigger}
          setTrigger={setNewCollectionTrigger}
          setPageUpdate={setPageUpdate}
        ></AddCollectionPopup>
        <br />
        <button
          className="font-bold absolute top-8 right-16 close-btn"
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

export default AddToCollectionPopup;
