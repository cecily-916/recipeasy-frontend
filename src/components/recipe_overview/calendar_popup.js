import React, { useEffect } from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";

function AddToCalendarPopup(props) {
  // Opens a popup that allows user to select a date and add notes, then opens a calendar event page on their screen
  //Calendar event

  const updatedDate = new Date().toISOString().replace(/-|:|\.\d\d\d/g, "");
  const editedDate = updatedDate.slice(0, -1);
  const formattedDate = `${editedDate}/${editedDate}`;

  const [formData, setFormData] = useState({});
  const [meal, setMeal] = useState("Dinner");
  const [date, setDate] = useState(formattedDate);

  useEffect(() => {
    setFormData({
      title: props.recipe.title,
    });
  }, [props.recipe.title]);

  const html_url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${formData.title}&dates=${formData.date}&details=Link+to+recipe+on+Recipeasy:+http://reci-peasy.herokuapp.com/recipe/${props.recipe.ID}&sf=true&output=xml`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTitle = `${meal}: ${props.recipe.title}`;
    const updatedDate = new Date(date)
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");
    const editedDate = updatedDate.slice(0, -1);
    const formattedDate = `${editedDate}/${editedDate}`;
    console.log(formattedDate);
    setFormData({
      id: props.recipe.ID,
      title: newTitle,
      meal: meal,
      date: formattedDate,
    });
    console.log(formData);
    console.log(html_url);
  };

  const handleMealChange = (event) => {
    setMeal(event.target.value);
  };

  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner text-center">
        <h1>Add Meal to Calendar</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <label className="italic">Recipe: {props.recipe.title}</label>
          <br />
          <br />
          <TextField
            id="date"
            className="p-2 mr-5"
            value={date}
            label="Select a date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleDateChange}
          />
          <select value={meal} onChange={handleMealChange}>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Snack">Snack</option>
          </select>
          <br />
          <br />
          <input
            className="font-bold text-mg border p-3 rounded-md shadow-sm text-emerald-900"
            type="Submit"
          />
        </form>
        <br />
        <button
          className=" font-bold text-xl border p-3 rounded-md shadow-sm text-emerald-900"
          onClick={() => {
            window.open(html_url, "_blank");
            props.setTrigger(false);
          }}
        >
          Add to Calendar
        </button>
        <button
          className="font-bold absolute top-6 right-8 close-btn"
          onClick={() => props.setTrigger(false)}
        >
          <span class="material-icons">highlight_off</span>
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AddToCalendarPopup;
