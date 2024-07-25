import React from 'react';
import deliveryImage from '../images/AmrognLogo.png'; // Adjust the path to your image
import { FaUserFriends } from 'react-icons/fa'; // Import icon for enrollment count

const Front = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">We Provide <span className="text-customRed">Super Fast</span> Delivery Service</h1>
          {/* <p className="text-gray-600 mb-4">Efficiently Connecting People</p>
          <div className="flex items-center justify-center md:justify-start mb-4">
          <input
          type="text"
          placeholder="Search your foods"
          className="p-2 rounded-lg border border-gray-300 w-full max-w-md"
          />
          </div> */}
          {/* <div className="flex items-center justify-center md:justify-start space-x-2">
            <FaUserFriends className="text-gray-600" />
            <p className="text-gray-600">2k+ Enrollment</p>
            </div> */}
            <h1 className="text-4xl font-bold mb-4"> ፈጣን<span className="text-customRed"> መስተንግዶ </span>ባሉበት ሆነው ይዘዙን </h1>
        </div>
        <div className="md:w-1/2">
          <img src={deliveryImage} alt="Delivery" className="w-full h-auto" />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <ServiceCard title="Pick & Drop" description="Booking" />
        <ServiceCard title="Cash On" description="Delivery" />
        <ServiceCard title="Delivery Hub" description="Booking" />
        <ServiceCard title="Corporate" description="Booking" />
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Front;
