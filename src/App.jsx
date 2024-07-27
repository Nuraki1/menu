import React from "react";
import Categories from "./components/Categories.jsx";

import Front from "./components/Front.jsx";
import PopularMenu from "./components/PopularMenu.jsx";
import { Example } from "./components/Example.jsx";


import burgerImage from "./images/burger.png";
import friesImage from "./images/fries.png";
import soupImage from "./images/soup.png";
import sandwichImage from "./images/sandwich.png";
import iceCreamImage from "./images/icecream.png";
import cakeImage from "./images/cake.png";
import hot from "./images/coffee.png";
import soft from "./images/cola.png";
import Chicken from "./images/logos.png"

const categoryData = [
  { image: burgerImage, name: "Burger" },
  { image: Chicken, name: "Chicken" },
  { image: friesImage, name: "Fries" },
  { image: soupImage, name: "Soup" },
  { image: sandwichImage, name: "Sandwich" },
  { image: iceCreamImage, name: "Ice Cream" },
  { image: cakeImage, name: "Cake" },
  { image: hot, name: "Hot Drinks" },
  { image: soft, name: "Soft Drinks" },
];

const App = () => {
  return (
    <>
    <div>


      <div >
        <Front />
      </div>
      
      <div>
        <Categories categories={categoryData} />
      </div>

      <div>
        <PopularMenu />
      </div>


      <Example/>
    </div>


    </>
  );
};

export default App;
