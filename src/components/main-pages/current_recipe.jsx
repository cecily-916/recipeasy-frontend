import { useLocation } from 'react-router-dom'
function CurrentRecipe() {

    const location = useLocation()
    const recipe = location.state

    console.log(recipe)
    return (
    <div className="about">
        <div className="container">
        <div className="row align-items-center my-5">
            <div className="col-lg-7">
            <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
                alt=""
            />
            </div>
            <div className="col-lg-5">
            <h1 className="font-weight-light">{recipe.title}</h1>
            <p></p>
            <p>Details about the recipe will go here!
            </p>
            </div>
        </div>
        </div>
    </div>
    );
}

export default CurrentRecipe;