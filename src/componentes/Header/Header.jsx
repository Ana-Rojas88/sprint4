import React from "react";
import "./style.scss";
import CarouselNav from "./CarouselNav";
import FilterButton from "./FilterButton";





const Header = () => {

  return (
    <header className="header">
    
      <CarouselNav />
      <nav className="navbar">
            <h3>Restaurants and cafes</h3>
       <FilterButton />
      </nav>
    </header>
  );
};

export default Header;
