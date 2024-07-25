import React from 'react';
import FoodCard from './FoodCard';
import bgImage from '../images/yellowPaint.jpg'
import ChickenBurger from '../images/menu/chickenBurger.png';
import roastedChicken from '../images/menu/roastedChicken.png';
import Shawarma from '../images/menu/chickenShawarma.png';
import FriedChicken from '../images/menu/friedChicken.png';
import ChickenKabsa from '../images/menu/chickenKabsa.png';
import ChickenWing from '../images/menu/chickenWing.png';
import ChickenMofo from '../images/menu/chickenMofo.png';
import GilledChicken from '../images/menu/grilledChicken.png';
import ShawarmaPlate from '../images/shawarmaPlate2.png';
// import Shawarma from '../images/shawarma2.png';




const PopularMenu = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-10 "
    style={{
        backgroundImage: `url(${bgImage})`,
       
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}>
    <div className="w-full mb-8">
      <h2 className="text-3xl font-bold">Our Popular Menu</h2>
    </div>
    <FoodCard
      image={ChickenBurger}
      name="Chicken Burger"
      price={10.0}
      rating={4.5}
      sales={1360}
    />
    <FoodCard
      image={roastedChicken}
      name="Roasted Chicken"
      price={25.0}
      rating={4.1}
      sales={1100}
    />
    <FoodCard
      image={Shawarma}
      name="Chicken Shawarma"
      price={15.0}
      rating={4.1}
      sales={1100}
    />
    <FoodCard
      image={FriedChicken}
      name="Fried Chicken"
      price={15.0}
      rating={4.1}
      sales={1100}
    />
    <FoodCard
      image={ChickenKabsa}
      name="Chicken Kabsa"
      price={15.0}
      rating={4.1}
      sales={1100}
    />
    <FoodCard
      image={ChickenWing}
      name="Chicken Wings"
      price={15.0}
      rating={4.1}
      sales={1100}
    />
    <FoodCard
      image={ChickenMofo}
      name="Chicken Mofo"
      price={15.0}
      rating={4.1}
      sales={1100}
    />
    <FoodCard
      image={ShawarmaPlate}
      name="Shawarma Plate"
      price={15.0}
      rating={4.1}
      sales={1100}
    />
    <FoodCard
      image={GilledChicken}
      name="Gilled Chicken"
      price={15.0}
      rating={4.1}
      sales={1100}
    />
  </div>
  );
};

export default PopularMenu;
