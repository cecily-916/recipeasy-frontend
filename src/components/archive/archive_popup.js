import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Userfront from "@userfront/react";

function ArchivePopup({ userID, trigger, setTrigger, setChange, change }) {
  // Opens a popup that allows user restore archived recipes

  const [archiveData, setArchiveData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/${userID}/archive`)
      .then((response) => {
        console.log(response);
        setArchiveData(response.data);
      })
      .catch((error) => {
        console.log("error: Get request failed.");
      });
  }, [change]);

  const handleRestore = (recipeID) => {
    axios
      .put(`http://localhost:8080/archive/${recipeID}}`)
      .then((response) => {
        console.log(response);
        alert(`Recipe successfully restored!`);
        setChange(recipeID);
      })
      .catch((error) => {
        console.log("error: Restoration request failed.");
      });
    console.log(recipeID);
  };

  const archivedRecipes = archiveData.map((recipe, index) => {
    return (
      <div key={index}>
        <br />
        <p>{recipe.title}</p>
        <button
          onClick={() => {
            handleRestore(recipe.ID);
          }}
        >
          Restore
        </button>
      </div>
    );
  });

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Archived Recipes</h1>
        <br />
        {archivedRecipes}
        <button className="close-btn" onClick={() => setTrigger(false)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ArchivePopup;
