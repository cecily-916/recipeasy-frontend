import React from "react";
import "./new-recipe.css";
import "react-dropdown/style.css";
import { useState } from "react";
// import StepsList from "../main-pages/current_recipe/recipe_container/steps_list";
import AddStep from "./step-form";

function NewRecipePopup({ createNewRecipe, trigger, setTrigger }) {
  const [newRecipe, setNewRecipe] = useState({});
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [prepTime, setPrepTime] = useState();
  const [cookTime, setCookTime] = useState();
  const [mainImage, setMainImage] = useState();

  // const changeHandler = (changeEvent) => {
  //   setFormFields({
  //     title: changeEvent.target.value,
  //   });
  // };

  // NEW CODE HERE:
  const [addStepButton, setAddStepButton] = useState(false);
  const [steps, setSteps] = useState([]);

  const handleSubmit = (e) => {
    setNewRecipe({
      title: title,
      description: description,
      preptime: prepTime,
      cooktime: cookTime,
      mainimage: mainImage,
      steps: steps,
    });
    console.log(newRecipe);
    e.preventDefault();
    createNewRecipe(newRecipe);
  };

  // const addRecipe = (newRecipe) => {
  //   let recipe = [...recipeDetails, newRecipe];
  //   setRecipeDetails(recipe);
  // };

  const addStep = (newStep) => {
    console.log(newStep);
    let stepsList = [...steps, newStep];
    setSteps(stepsList);
  };

  const openStepForm = () => {
    return (
      <section>
        <br />

        <h2>Add step:</h2>
        <AddStep addStep={addStep} />
      </section>
    );
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Add New Recipe</h1>
        <form>
          <label>Name:</label>
          <br />
          <input
            name="name"
            type="text"
            onChange={(e) => setTitle}
            value={title}
            placeholder="Recipe name"
            required
          />
          <br />
          <p>Preview: {title}</p>
          <br />
          <label>Description:</label>
          <br />
          <input
            name="description"
            type="text"
            value={description}
            onChange={(e) => setDescription}
            placeholder="Description"
          />
          <br />
          <label>Prep Time:</label>
          <br />
          <input
            name="preptime"
            type="text"
            onChange={(e) => setPrepTime}
            value={prepTime}
            placeholder="PrepTime"
          />
          <br />
          <label>Cook Time:</label>
          <br />
          <input
            name="cooktime"
            type="text"
            onChange={(e) => setCookTime}
            value={cookTime}
            placeholder="CookTime"
          />
          <br />
          <label>Image:</label>
          <br />
          <input
            name="image"
            type="url"
            onChange={(e) => setMainImage}
            value={mainImage}
            placeholder="Enter Image URL"
          />
          <br />
          <br />

          {/* <input
            type="Submit"
            // className="close-btn"
          /> */}
        </form>
        <button
          className="grey-container"
          onClick={() => {
            setAddStepButton(true);
          }}
        >
          Add Step
        </button>
        {addStepButton === true && openStepForm()}
        <br />
        <br />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
        <button className="close-btn" onClick={() => setTrigger(false)}>
          Close Form
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default NewRecipePopup;
