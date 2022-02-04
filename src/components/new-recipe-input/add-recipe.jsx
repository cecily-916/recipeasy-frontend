import React from "react";
import "./new-recipe.css";
import "react-dropdown/style.css";
import { useState } from "react";
// import StepsList from "../main-pages/current_recipe/recipe_container/steps_list";
import AddStepsForm from "./add_step";
import axios from 'axios';


function NewRecipeForm() {

  // Form allows users to input a new recipe.
  // Each recipe has 1 + steps
  // Each step has 0+ ingredients

  const [newRecipe, setNewRecipe] = useState({
    title: '',
		description: '',
		prepTime:'',
		cookTime: '',
		image: '',
    servings: '',
		steps: []
  });

  const handleSubmit=(event)=>{
    // setNewRecipe({ title, description, prepTime, cookTime, image, servings, steps })
    event.preventDefault()

    console.log(newRecipe)
    // axios
    //   .post('http://localhost:8080/recipes', newRecipe)
    //   .then((response) => {
    //       console.log("Response:", response.data);
    //       // const recipe = [...recipesData];
    //       // recipe.push(response.data);
    //       // setRecipesData(recipe);
    //   })
    //   .catch((error) => {
    //       console.log("Error:", error);
    //       alert("Couldn't create a new recipe.");
    //   });
  };

  const handleChange=(event)=>{
    const { name, value } = event.target;
    setNewRecipe(prevState => ({
      ...prevState,
      [name] : value
    }));
  }

  
  return (
  <div>
    <h1>Add New Recipe</h1>
    <br />
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="Title"
        name='title'
        value = {newRecipe.title}
        onChange={handleChange}/>
      <br />
      <textarea 
        placeholder="Description"
        name='description'
        value = {newRecipe.description}
        onChange={handleChange}/>
      <br />
      <input 
        placeholder="Servings"
        name='servings'
        value = {newRecipe.servings}
        onChange={handleChange}/>
      <br />
      <input 
        placeholder = "Prep Time"
        name='prepTime'
        value = {newRecipe.prepTime}
        onChange={handleChange}/>
      <br />
      <input 
        placeholder = "Cook Time"
        name='cookTime'
        value={newRecipe.cookTime}
        onChange={handleChange}/>
      <br />
      {/* <AddStepsForm value={newRecipe.steps} onChange={handleChange}/> */}
    <input type='submit'/>
  </form>
  </div>
  )
}

export default NewRecipeForm;
