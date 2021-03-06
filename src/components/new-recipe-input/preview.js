import React, { useEffect, useState } from "react";
import StepsList from "../recipe_overview/steps_list";
import RecipeOverview from "../recipe_overview/recipe_container";
import StepCard from "./step_card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DisplayImgPreview from "./image";
import Parser from "./parser";

function NewRecipePreview({ newRecipe, setFinalStepOrder }) {
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    setSteps(newRecipe.steps);
  }, [newRecipe]);
  console.log(newRecipe.steps);
  const handleOnDragEnd = (result) => {
    const items = Array.from(steps);
    const [recordedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, recordedItem);
    setSteps(items);
    setFinalStepOrder(items);
  };

  const stepDisplay = steps.map((displayStep, index) => {
    // index += 1;
    return (
      // <Step
      //   key={index}
      //   recipe={recipe}
      //   num={num}
      //   step={displayStep}
      //   setCurrentStepNum={setCurrentStepNum}
      //   bg={bg}
      // />
      <Draggable
        key={displayStep.details}
        draggableId={displayStep.details}
        index={index}
      >
        {(provided) => (
          <li
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <StepCard step={displayStep} order={index + 1} />
          </li>
        )}
      </Draggable>
    );
  });

  return (
    <div className="max-w-lg  max-h-fit rounded-md mx-auto mt-8 pb-24  bg-[#67704C] bg-opacity-60 p-2 shadow-xl">
      <div className="bg-white p-4">
        <p className="text-lg font-bold text-emerald-900 italic">Preview:</p>
        <div className="align-center">
          <h1>{newRecipe.title}</h1>
          <br />
          <DisplayImgPreview image={newRecipe.image} />
          {newRecipe.author ? (
            <p className="font-bold text-emerald-900">By: {newRecipe.author}</p>
          ) : (
            ""
          )}
          <br />
          <section>
            {newRecipe.prepTime ? (
              <p className="font-bold inline">
                Prep Time:&nbsp;{newRecipe.prepTime}&ensp;&ensp;{" "}
              </p>
            ) : (
              ""
            )}
            {newRecipe.cookTime ? (
              <p className="font-bold inline">
                Total Time:&nbsp;{newRecipe.cookTime}&ensp;&ensp;
              </p>
            ) : (
              ""
            )}
            {newRecipe.servings ? (
              <p className="font-bold inline-flex">
                Servings:&nbsp; {newRecipe.servings}&ensp;&ensp;
              </p>
            ) : (
              ""
            )}
          </section>
          <br />
          <h2>{newRecipe.description}</h2>
          <br />
          {newRecipe.ingredients ? (
            <p className="font-bold">Ingredients:</p>
          ) : (
            ""
          )}
          <Parser ingredients={newRecipe.ingredients} />
          <br />
          <hr />
          <br />
          {newRecipe.steps.length >= 1 ? (
            <p className="italic text-sm mb-2">
              Drag and drop the step cards to change the order
            </p>
          ) : (
            ""
          )}
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="steps">
              {(provided) => (
                <ul
                  className="steps space-y-3"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {/* <StepCard steps={newRecipe.steps} /> */}
                  {/* {newRecipe.steps.map((step.details, index) => {
                  let num = index + 1;
                  return (
                    <Draggable
                      key={index}
                      draggableId={step.details}
                      index={num}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {step}
                        </li>
                      )}
                    </Draggable>
                  );
                })} */}
                  {stepDisplay}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
          <br />
        </div>
      </div>
    </div>
  );
}

export default NewRecipePreview;
