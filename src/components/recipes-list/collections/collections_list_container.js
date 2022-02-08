import React from "react";
import Collection from "./collection";

function CollectionsListContainer({ collections, setPageUpdate }) {
  console.log(collections);

  const collectionItems = collections.map((collection, index) => {
    return (
      <Collection
        key={index}
        collection={collection}
        setPageUpdate={setPageUpdate}
      />
    );
  });

  return (
    // title
    <section className="mx-12 mt-10 mb-20 bg-[#b3b5b8b0] rounded-md shadow-xl">
      <div
        className="
                flex 
                flex-wrap 
                flex-row 
                justify-start 
                justify-items-center 
                space-x-5"
      >
        {collectionItems}
      </div>
    </section>
  );
}

export default CollectionsListContainer;
