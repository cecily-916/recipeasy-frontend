// import React from "react";
// import { useState } from "react";

// function AddIngredientsForm(props) {
//   //Internal form in the new step form
//   //each step has 0+ ingredients

//   const [newIngredient, setNewIngredient] = useState({
//     ingredient: "",
//     unit: "",
//     amount: 0.0,
//   });

//   const handleSubmit = () => {
//     props.addIngredient(newIngredient);
//     resetNewIngredient();
//   };

//   const resetNewIngredient = () => {
//     setNewIngredient({
//       ingredient: "",
//       unit: "",
//       amount: 0.0,
//     });
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setNewIngredient((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const units = [
//     "pinch",
//     "tbsp",
//     "tsp",
//     "cup",
//     "pint",
//     "quart",
//     "gallon",
//     "fluid ounce",
//     "ml",
//     "l",
//     "pound",
//     "mg",
//     "g",
//     "kg",
//   ];

//   let unitCount = 0;
//   const unitOptions = units.map((unit) => {
//     unitCount++;
//     return (
//       <option key={unitCount} name={unit}>
//         {unit}
//       </option>
//     );
//   });

//   return props.trigger ? (
//     <div>
//       <p className="font-extrabold">Add Ingredient</p>
//       <input
//         type="text"
//         placeholder="Ingredient"
//         name="ingredient"
//         value={newIngredient.ingredient}
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="number"
//         step=".1"
//         placeholder="Amount"
//         name="amount"
//         value={newIngredient.amount}
//         onChange={handleChange}
//       />
//       <br />
//       <select name="unit" value={newIngredient.unit} onChange={handleChange}>
//         <option>Select Unit</option>
//         {unitOptions}
//       </select>
//       <br />
//       <button
//         type="button"
//         onClick={() => {
//           handleSubmit();
//         }}
//       >
//         Save Ingredient
//       </button>
//     </div>
//   ) : (
//     ""
//   );
// }

// export default AddIngredientsForm;
