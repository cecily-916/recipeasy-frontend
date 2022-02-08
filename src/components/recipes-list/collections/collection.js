import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Individual collection component that displays the name of the collection,
// an image(?), rating, note icon, servings, num of ingredients, time

function Collection({ collection, setPageUpdate }) {
  console.log(collection);
  const deleteCollection = () => {
    axios
      .delete(`http://localhost:8080/collections/${collection.ID}`)
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
      <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
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
              hover:text-primary
              "
        >
          {collection.name}
        </h3>
        <button
          onClick={() => {
            deleteCollection();
          }}
        >
          🗑
        </button>
        {/* <Link
          // to={`collection/${collection.ID}`}
          // state={collection}
          className="
        inline-block
        py-2
        px-7
        border border-[#E5E7EB]
        rounded-full
        text-base text-body-color
        font-medium
        hover:border-primary hover:bg-emerald-800
        hover:text-white
        transition
        "
        >
          Open Collection
        </Link> */}
      </div>
    </div>
  );
}

export default Collection;
