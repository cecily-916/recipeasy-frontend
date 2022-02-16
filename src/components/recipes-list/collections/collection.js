import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Individual collection component that displays the name of the collection,
// an image(?), rating, note icon, servings, num of ingredients, time

function Collection({ collection, setPageUpdate }) {
  console.log(collection);

  const deleteCollection = () => {
    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/collections/${collection.ID}`
      )
      .then((response) => {
        alert("Collection deleted");
        setPageUpdate(collection.ID, "deleted");
      })
      .catch((error) => {
        console.log("Collection deletion unsuccessful");
      });
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden mx-auto m-4 max-w-xs shadow-lg">
      {/* <img src={collection.image} alt="dish" className="w-auto h-fit" /> */}
      <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center rounded-lg bg-white border-4 border-emerald-900">
        <h3
          className="
              font-semibold
              text-dark text-xl
              sm:text-[22px]
              md:text-xl
              lg:text-[22px]
              xl:text-xl
              2xl:text-[22px]
              mb-4
              block
              hover:text-emerald-900
              "
        >
          {" "}
          <Link
            to={`/collection/${collection.ID}`}
            className="link text-emerald-900 font-quicksand  "
            state={collection}
          >
            {collection.name}
          </Link>
        </h3>
        <p
          className="text-emerald-900
        "
        >
          {collection["Recipes"].length} recipes
        </p>
        <button
          onClick={() => {
            deleteCollection();
          }}
        >
          <span class="material-icons text-3xl">delete_outline</span>
        </button>
        <br />
      </div>
    </div>
  );
}

export default Collection;
