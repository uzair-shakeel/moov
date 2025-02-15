import React from "react";
import Header from "../../../components/user-panel/header"; // Import your Header component
import { FaStar } from "react-icons/fa";

const StartJourney = () => {
  return (
    <div className="h-screen w-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative h-full">
        {/* Map Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            title="Map"
            src="/images/full-map-img.png" // Replace with your map image
            className="w-full h-full object-cover"
          />
        </div>

        {/* Journey Card */}
        <div className="absolute top-[10%] left-[10%] transform    w-80">
          {/* Search Bar */}
          <div className="">
            <input
              type="text"
              placeholder="Where to?"
              className="w-full px-6 py-4 rounded-full shadow-lg focus:outline-none text-gray-600 placeholder-gray-400"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
            <h2 className="font-semibold text-gray-800 mb-4">
              Start your journey
            </h2>
            <div className="flex items-center mb-4">
              <img
                src="/images/avatar.png" // Replace with driver image
                alt="Driver"
                className="w-14 h-14 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium">Adewale</h3>
                <p className="text-sm text-gray-500">Driver</p>
                <div className="flex items-center text-yellow-500">
                  <FaStar className="w-4 h-4" />
                  <span className="ml-1 text-sm font-medium">4.9</span>
                </div>
              </div>
              <div className="ml-auto">
                <img
                  src="/images/car.png" // Replace with car image
                  alt="Car"
                  className="w-20 h-auto"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="font-semibold text-gray-800 text-lg">82BG879</p>
              <p className="text-sm text-gray-500">Silver Honda Civic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
