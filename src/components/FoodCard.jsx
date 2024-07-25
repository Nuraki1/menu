import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon

const FoodCard = ({ image, name, price, rating, sales }) => {
  return (
    <div className="bg-white mb-10 text-black rounded-lg p-6 shadow-lg w-60 relative overflow-visible">
      <div className="flex justify-center mb-8">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-contain absolute -top-12"
        />
      </div>
      <h2 className="text-xl font-semibold text-center mt-10">{name}</h2>
      <p className="text-center text-gray-400">Starting From</p>
      <p className="text-center text-xl font-bold">{price} br</p>
      <div className="flex justify-end mt-4">
        <button className="bg-customRed text-white px-4 py-2 rounded-md hover:bg-red-600 flex items-center justify-center">
          <FaShoppingCart />
        </button>
      </div>
      <div className="flex justify-center mt-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-customRed' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.367 2.447a1 1 0 00-.364 1.118l1.286 3.96c.3.921-.755 1.688-1.54 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.784.57-1.839-.197-1.54-1.118l1.286-3.96a1 1 0 00-.364-1.118L2.61 9.386c-.784-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.959z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default FoodCard;
