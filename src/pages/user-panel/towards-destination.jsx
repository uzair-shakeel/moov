import React from "react";
import Header from "../../components/user-panel/header.jsx";
import TowardsJourney from "../../components/user-panel/towards-journey-card.jsx.jsx";

const StartDestinationScreen = () => {
  return (
    <div className="h-screen w-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative h-full">
        {/* Map Background */}
        <div className="absolute inset-0 ">
          <img
            title="Map"
            src="/images/full-map-img.png"
            className="w-full h-full"
          />
        </div>

        {/* Floating Driver Info Card */}
        <div className="absolute top-[10%] left-[10%]  flex flex-col items-center space-y-4">
          {/* Driver Info Card */}
          <TowardsJourney />
        </div>
      </div>
    </div>
  );
};

export default StartDestinationScreen;
