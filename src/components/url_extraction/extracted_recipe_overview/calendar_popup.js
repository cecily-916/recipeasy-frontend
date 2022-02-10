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

  const html_url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${formData.title}&dates=${formData.date}&details=Recipe+Link:${props.recipe.sourceURL}&sf=true&output=xml`;

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
      id: props.recipe.id,
      title: newTitle,
      meal: meal,
      date: formattedDate,
    });
    console.log(formData);
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
      <div className="popup-inner">
        <h1>Add Meal to Calendar</h1>
        <form onSubmit={handleSubmit}>
          <label>Recipe: {props.recipe.title}</label>
          <br />
          <TextField
            id="date"
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
          <input type="Submit" />
        </form>
        <br />
        <button
          onClick={() => {
            window.open(html_url, "_blank");
            props.setTrigger(false);
          }}
        >
          Add to Calendar
        </button>
        <br />
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close Form
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AddToCalendarPopup;
