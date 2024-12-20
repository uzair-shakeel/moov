"use client";

import { useState } from "react";
import { FiChevronDown, FiTrash2, FiEdit } from "react-icons/fi";
import Header from "../../components/driver-panel/header";
import { Link } from "react-router-dom";

export default function Listings() {
  const [filter, setFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const listings = [
    {
      id: 1,
      status: "Active",
      vehicle: "Honda Civic",
      vehicleId: "82BG879",
      description:
        "Experience the thrill of driving a Honda Civic, where luxury meets performance. Perfect for those who crave style and excitement on every journey.",
      price: 125,
      image: "/images/BMW.png",
    },
    {
      id: 2,
      status: "Inactive",
      vehicle: "Honda Civic",
      vehicleId: "82BG879",
      description:
        "Experience the thrill of driving a Honda Civic, where luxury meets performance. Perfect for those who crave style and excitement on every journey.",
      price: 125,
      image: "/images/BMW.png",
    },
    {
      id: 3,
      status: "Active",
      vehicle: "Honda Civic",
      vehicleId: "82BG879",
      description:
        "Experience the thrill of driving a Honda Civic, where luxury meets performance. Perfect for those who crave style and excitement on every journey.",
      price: 125,
      image: "/images/BMW.png",
    },
    {
      id: 4,
      status: "Active",
      vehicle: "Honda Civic",
      vehicleId: "82BG879",
      description:
        "Experience the thrill of driving a Honda Civic, where luxury meets performance. Perfect for those who crave style and excitement on every journey.",
      price: 125,
      image: "/images/BMW.png",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#8257E9] bg-opacity-20 text-[#8257E9]";
      case "Inactive":
        return "bg-[#4C1D95] text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      <main className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-medium">Listings</h1>

          <div className="flex items-center gap-4">
            <Link to="/d/vehicle/create">
              <button className="px-6 py-2 bg-[#8257E9] text-white rounded-full hover:bg-[#7347d5] transition-colors">
                Add New
              </button>
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 bg-[#8257E9] bg-opacity-10 rounded-full text-sm flex items-center gap-2"
              >
                {filter}
                <FiChevronDown
                  className={`transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
                  {["All", "Active", "Inactive"].map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setFilter(status);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {listings
            .filter((listing) => filter === "All" || listing.status === filter)
            .map((listing) => (
              <div
                key={listing.id}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-start gap-6">
                  <div className="relative w-1/2">
                    <img
                      src={listing.image}
                      alt={listing.vehicle}
                      className="w-full h-auto rounded-lg"
                    />
                    <span
                      className={`absolute top-2 left-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        listing.status
                      )}`}
                    >
                      {listing.status}
                    </span>
                  </div>

                  <div className="w-1/2 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {listing.vehicle}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {listing.vehicleId}
                        </p>
                      </div>
                      <p className="text-lg font-medium">₦{listing.price}</p>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {listing.description}
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                      <Link to="/d/vehicle/edit">
                        <button className="flex-1 px-6 py-2 bg-[#8257E9] text-white rounded-full hover:bg-[#7347d5] transition-colors flex items-center justify-center gap-2">
                          <FiEdit className="w-4 h-4" />
                          Edit
                        </button>
                      </Link>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors">
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
