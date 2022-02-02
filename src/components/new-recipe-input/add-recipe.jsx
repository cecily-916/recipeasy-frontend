import React from "react";
import "./new-recipe.css";
import "react-dropdown/style.css";
import { useState } from "react";
// import StepsList from "../main-pages/current_recipe/recipe_container/steps_list";
import AddStep from "./step-form";
import axios from 'axios';


function NewRecipeForm() {
  // const [newRecipe, setNewRecipe] = useState({});
  const [title, setTitle] = useState();

  const [description, setDescription] = useState();
  const [prepTime, setPrepTime] = useState();
  const [cookTime, setCookTime] = useState();
  const [mainImage, setMainImage] = useState();

  const createNewRecipe = (newRecipe) => {
    axios
        .post('http://localhost:8080/recipes', newRecipe)
        .then((response) => {
            console.log("Response:", response.data);
            // const recipe = [...recipesData];
            // recipe.push(response.data);
            // setRecipesData(recipe);
        })
        .catch((error) => {
            console.log("Error:", error);
            alert("Couldn't create a new recipe.");
        });
    };

  // const changeHandler = (changeEvent) => {
  //   setFormFields({
  //     title: changeEvent.target.value,
  //   });
  // };

  // NEW CODE HERE:
  const [addStepButton, setAddStepButton] = useState(false);
  const [steps, setSteps] = useState([]);

  const handleSubmit = (e) => {
    const newRecipe = {
      title: title,
      description: description,
      prepTime: prepTime,
      cookTime: cookTime,
      image: mainImage,
      steps: steps,
    };    
    console.log(newRecipe);

    e.preventDefault();
    createNewRecipe(newRecipe);
    // createNewRecipe(newRecipe);
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

  return (
    <div>
        <h1>Add New Recipe</h1>
        <form onSubmit={handleSubmit}>
          <h2>1 | Add Recipe Details</h2>
          <label>Name:</label>
          <br />
          <input
            name="name"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <br />
          <label>Prep Time:</label>
          <br />
          <input
            name="preptime"
            type="text"
            onChange={(e) => setPrepTime(e.target.value)}
            value={prepTime}
            placeholder="PrepTime"
          />
          <br />
          <label>Cook Time:</label>
          <br />
          <input
            name="cooktime"
            type="text"
            onChange={(e) => setCookTime(e.target.value)}
            value={cookTime}
            placeholder="CookTime"
          />
          <br />
          <label>Image:</label>
          <br />
          <input
            name="image"
            type="url"
            onChange={(e) => setMainImage(e.target.value)}
            value={mainImage}
            placeholder="Enter Image URL"
          />
          <br />
          <br />

          {/* <input
            type="Submit"
            // className="close-btn"
          /> */}
        <input type="Submit"/>

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
    </div>
  )
}

export default NewRecipeForm;
