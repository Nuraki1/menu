import React, { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import icon for "View More" button
import bgImage from '../images/yellowPaint.jpg'
const CategoryCard = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-full p-4 w-24 h-24 flex items-center justify-center">
        <img src={image} alt={name} className="w-16 h-16 object-contain" />
      </div>
      <p className="mt-2 text-center text-sm text-white">{name}</p>
    </div>
  );
};

const Categories = ({ categories }) => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="p-8 bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Categories</h2>
          {/* <p className="text-red-500">10+ New Categories added this week</p> */}
        </div>
        <button
          className="flex items-center space-x-2 text-white hover:text-white"
          onClick={() => scroll(200)}
        >
          <span>View More</span>
          <FaArrowRight />
        </button>
      </div>
      <div className="flex overflow-x-hidden relative">
        <div
          ref={scrollRef}
          className="flex space-x-4 pb-4 overflow-x-auto scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {categories.map((category, index) => (
            <CategoryCard key={index} image={category.image} name={category.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
