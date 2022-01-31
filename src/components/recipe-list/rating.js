import React from "react";

function Rating(props) {
  const stars = {
    1: "⭐️",
    2: "⭐️⭐️",
    3: "⭐️⭐️⭐️",
    4: "⭐️⭐️⭐️⭐️",
    5: "⭐️⭐️⭐️⭐️⭐️",
  };

  const starRating = stars[props.rating];

  return <p>{starRating}</p>;
}

export default Rating;
