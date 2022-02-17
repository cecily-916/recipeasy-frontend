# Recipeasy | Recipes Made Easy

Recipeasy is a React app student capstone project for the Ada Developer Academy. The website makes working through a recipe easy-peasy by breaking instructions down into clear steps and adding visual aids to the ingredients to help users avoid the dreaded tablespoon versus teaspoon confusion. Recipeasy allows users to input their own recipes, organize them into collections, and add them to their Google calendar to assist in meal planning.

## Project Demos
Click the gif to view on YouTube<br>
### Homescreen with Responsive Search Bar:<br>[![Demo CountPages alpha](https://j.gifs.com/EqQ9rm.gif)](https://www.youtube.com/watch?v=PS1KxbDFI_Y)

### Add recipe to Google Calendar:<br>[![Demo CountPages alpha](https://j.gifs.com/28Jvzj.gif)](https://youtu.be/uPYDlCFDkmU)

### Walkthrough recipe with voice recognition to advance steps:<br>
[![Demo CountPages alpha](https://j.gifs.com/GRKvn3.gif)](https://www.youtube.com/watch?v=Pq0m2OyxQdQ)

### Add recipe form:<br>
[![Demo CountPages alpha](https://j.gifs.com/083YR3.gif)](https://youtu.be/KWqMEsoAVH0)

# Feature Set
- Unique user accounts with full sign up, reset password, login features.
- Recipe gallery
- Responsive search bar
- Recipe overview
- Add recipes to Google calendar
- Create and delete recipe collections
- Print recipes
- Archive recipes with restore and permanent delete functionality
- Input new recipes
  - Upload images or use image address 
  - Live preview
  - Rearrange steps using drag and drop
- Recipe walkthrough
  - View either with nav sidebar or full screen
  - Voice recognition to advance step or view previous step
  - Step layouts ingredients using images for tbsp, tsp and cup
  - Embedded measurement conversions chart
 
# Dependencies
Recipeasy relies on:
- React JS
- Userfront
- Tailwind CSS
- Axios
- React-beautiful-dnd
- React-dom-confetti
- React-intersection-obverver
- React-router-dom
- React-speech-recognition
- Postcss
- Autoprefixer
- Google Material Icons and Fonts
- Imugr API
- Heroku

Environment Variables: 
- REACT_APP_BACKEND_URL Connect to the Recipeasy Backend database (postgres)
- REACT_APP_CLIENT_ID Client ID for Imgur API to privately host user-uploaded images

# Visit Recipeasy!
https://reci-peasy.herokuapp.com

# Future Features
- Edit recipe
- Scrape existing recipes from websites
- Share recipe with other users
- Remove recipes from collections
- Expand voice recognition to accept wider range of commands
- Add ingredients to a grocery list
