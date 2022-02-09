import axios from "axios";

function ArchiveRecipePopup({ recipe, setTrigger, trigger }) {
  // Opens a popup that allows user to soft delete (archive) the recipe

  const handleArchive = () => {
    axios
      .delete(`http://localhost:8080/recipes/${recipe.ID}`)
      .then((response) => {
        console.log(response);
        alert(`${recipe.title} successfully archived`);
      })
      .catch((error) => {
        console.log("error: Delete request failed.");
      });
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Archive Recipe</h1>
        <br />
        <br />
        <p>Are you sure you want to archive this recipe?</p>
        <button
          onClick={() => {
            handleArchive();
            setTrigger(false);
          }}
        >
          <p className="text-lg font-extrabold">Confirm</p>
        </button>
        <br />
        <button className="close-btn" onClick={() => setTrigger(false)}>
          Cancel
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ArchiveRecipePopup;