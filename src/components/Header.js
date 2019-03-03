import React from "react";
import "../styles/header.css";
import SearchContainer from "./SearchContainer";

const Header = () => {
  return (
    <header className="bg-indigo-light text-white">
      <div className="container mx-auto p-4 flex flex-row justify-between items-center">
        <div className="font-black text-xl">Weather App</div>
        <SearchContainer />
      </div>
    </header>
  );
};

export default Header;
