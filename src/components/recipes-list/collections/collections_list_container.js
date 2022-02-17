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
    <section className="mx-12 mt-10 mb-20 rounded-md shadow-xl bg-bg-img bg-bottom bg-cover bg-h-full">
      <div
        className="
                flex 
                flex-wrap 
                flex-row 
                justify-start 
                justify-items-center 
                space-x-5
                "
      >
        {
          {
            0: (
              <div className="max-w-lg  p-16 mx-auto">
                <p className="text-center rounded-md text-emerald-900 text-lg p-12 bg-white">
                  No collections found.
                  <br /> Click "New Collection" to create one!
                </p>
              </div>
            ),
          }[collections.length]
        }
        {collectionItems}
      </div>
    </section>
  );
}

export default CollectionsListContainer;
