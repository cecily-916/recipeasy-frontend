import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Userfront from "@userfront/react";

function ArchivePopup({ userID, trigger, setTrigger, setChange, change }) {
  // Opens a popup that allows user restore archived recipes

  const [archiveData, setArchiveData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/${userID}/archive`)
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
      .put(`${process.env.REACT_APP_BACKEND_URL}/archive/${recipeID}}`)
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
        <p className="font-bold inline">{recipe.title}&ensp;</p>
        <button
          className="underline"
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
    <div className="popup z-50">
      <div className="popup-inner">
        <h1>Archived Recipes</h1>
        <br />
        {archivedRecipes}
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

export default ArchivePopup;
