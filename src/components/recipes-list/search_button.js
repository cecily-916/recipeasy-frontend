import React from "react";
import search from "../../assets/search.png";

function SearchButton({ setChange, trigger, setTrigger }) {
  const handleClick = () => {
    if (trigger) {
      setTrigger(false);
      setChange("resetchange");
    } else {
      setTrigger(true);
    }
  };

  return (
    <button
      className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      onClick={() => handleClick()}
    >
      <img src={search} alt="search icon" className="h-9 " />
    </button>
  );
}

export default SearchButton;
