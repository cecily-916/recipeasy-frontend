import React from "react";
import "./new-recipe.css";
import "react-dropdown/style.css";
import { useState } from "react";
// import StepsList from "../main-pages/current_recipe/recipe_container/steps_list";
import AddStepsForm from "./add_step";
import axios from 'axios';
import { useEffect } from "react";


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

  // const [steps, setSteps] = useState([])


  const handleSubmit=(event)=>{
    // setNewRecipe({ title, description, prepTime, cookTime, image, servings, steps })
    event.preventDefault()
    
    console.log(newRecipe)
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
    
    alert("You've created a new recipe!")
  };

  const handleChange=(event)=>{
    const { name, value } = event.target;
    setNewRecipe(prevState => ({
      ...prevState,
      [name] : value
    }));
  }

  const[newSteps, setNewSteps]=useState([])

  const addStep=(newStep)=>{
    console.log(newStep)    
    setNewSteps(prevState => ([...prevState, newStep]))
    console.log(newSteps);
  }

  useEffect(()=>{
    setNewRecipe(prevState => ({
    ...prevState,
    steps : newSteps
    }));
  },[newSteps])

  // Add step pop up button
  const [newStepButton, setNewStepButton] = useState(false)

  return (
    <div className="overscroll-auto bg-scroll bg-cover pb-24 ">
      <div className="m-auto max-w-lg max-h-fit bg-[#85878ad1] rounded-md shadow-xl">
      <h1 className= "mt-16 pt-4 text-lg font-extrabold text-center text-white">
              Add New Recipe
      </h1>
      {/* <div className='p-8 grid grid-cols-3'>     */}
      <br />
      <form className=" mx-auto h-fit justify-self-auto w-60" onSubmit={handleSubmit}>
        <input 
          placeholder="Title"
          name='title'
          value = {newRecipe.title}
          onChange={handleChange}/>
        <br />
        <br />
        <textarea 
          placeholder="Description"
          name='description'
          value = {newRecipe.description}
          onChange={handleChange}/>
        <br />
        <input
          type="url" 
          placeholder="Enter Image URL"
          name='image'
          value = {newRecipe.image}
          onChange={handleChange}/>
        <br />
        <br />

        <input 
          placeholder="Servings"
          name='servings'
          value = {newRecipe.servings}
          onChange={handleChange}/>
        <br />
        <br />

        <input 
          placeholder = "Prep Time"
          name='prepTime'
          value = {newRecipe.prepTime}
          onChange={handleChange}/>
        <br />
        <br />

        <input 
          placeholder = "Cook Time"
          name='cookTime'
          value={newRecipe.cookTime}
          onChange={handleChange}/>
        <br />
        <br />

    
      <button  type="button"          
        className="inline-block
        py-2
        border border-[#E5E7EB]
        rounded-md 
        text-base text-body-color 
        font-medium 
        shadow-sm 
        bg-emerald-800 text-white"
        onClick={() => setNewStepButton(true)}>
        Add Step to Recipe
      </button>
      <AddStepsForm trigger={newStepButton} setTrigger={setNewStepButton} addStep={addStep}/>
      <br />
      <input type='submit'/>
      </form>
  </div>
  </div>
    // </div>
  )
}

export default NewRecipeForm;

// value={newRecipe.steps}
// onChange={handleChange}

