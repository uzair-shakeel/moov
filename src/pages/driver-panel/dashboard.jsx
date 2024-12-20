"use client";

import React, { useState } from "react";
import { FiChevronDown, FiStar } from "react-icons/fi";
import { PieChart, Pie, Cell } from "recharts";
import Header from "../../components/driver-panel/header";
import { Link } from "react-router-dom";

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`bg-white rounded-xl border border-gray-100 p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const FilterDropdown = ({ selected = "This Month" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1 bg-purple-100 text-sm rounded-full flex items-center gap-1 text-purple-600"
      >
        {selected}
        <FiChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-10">
          <button className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
            This Month
          </button>
          <button className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
            Last Month
          </button>
        </div>
      )}
    </div>
  );
};

const StarRating = ({ rating = 5, size = "large" }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="flex items-center justify-center gap-1">
      {stars.map((_, index) => (
        <FiStar
          key={index}
          className={`${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          } ${size === "large" ? "w-8 h-8" : "w-4 h-4"}`}
        />
      ))}
    </div>
  );
};

export default function Dashboard() {
  // Data for the rides pie chart
  const ridesData = [
    { name: "Completed", value: 45, color: "#8257E9" },
    { name: "Cancelled", value: 5, color: "#4C1D95" },
  ];

  return (
    <div className="min-h-screen ">
      <Header />

      <main className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-xl font-medium mb-6">Dashboard</h1>

        {/* Top Row Stats */}
        <div className="grid md:grid-cols-3 justify-center gap-6 mb-6 mx-auto">
          {/* Revenue Card */}
          <Card className="shadow-md">
            <Link to="/d/revenue">
              <div className="flex  justify-between items-start mb-8">
                <h2 className="text-gray-600">Total Revenue</h2>
                <FilterDropdown />
              </div>
              <div className="flex flex-col items-center justify-center pt-3">
                <p className="text-[32px] font-semibold">₦457.80</p>
                <p className="text-sm text-gray-500 mt-1">Sept, 2024</p>
              </div>
            </Link>
          </Card>

          {/* Rides Card */}
          <Card className="shadow-md">
            <Link to="/d/rides">
              <div className="flex justify-between items-start">
                <h2 className="text-gray-600">Total Rides</h2>
                <FilterDropdown />
              </div>
              <div className="flex justify-center mt-4">
                <div className="relative">
                  <PieChart width={120} height={120}>
                    <Pie
                      data={ridesData}
                      cx={60}
                      cy={60}
                      innerRadius={40}
                      outerRadius={55}
                      startAngle={90}
                      endAngle={450}
                      dataKey="value"
                    >
                      {ridesData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-semibold">50</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#8257E9]" />
                  <span>Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#4C1D95]" />
                  <span>Cancelled</span>
                </div>
              </div>
            </Link>
          </Card>

          {/* Ratings Card */}
          <Card className="shadow-md">
            <Link to="/d/rating">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-gray-600">Ratings</h2>
                <FilterDropdown />
              </div>
              <div className="text-center flex flex-col items-center justify-center">
                <img src="/driver/stars.svg" alt="" />
                <p className="text-3xl font-bold mt-4 text-gray-700">5.0</p>
                <p className="text-gray-500">Rated by 45 people</p>
              </div>
            </Link>
          </Card>

          {/* Listings Card */}
          <Card className="shadow-md">
            <Link to="/d/listing">
              <div className="flex justify-between items-start">
                <h2 className="text-gray-600">Total Listings</h2>
                <FilterDropdown />
              </div>
              <div className="flex justify-center mt-4">
                <div className="relative">
                  <PieChart width={120} height={120}>
                    <Pie
                      data={[
                        { name: "Active", value: 50, color: "#A855F7" }, // Purple
                        { name: "Inactive", value: 30, color: "#7C3AED" }, // Dark Purple
                        { name: "Cancelled", value: 20, color: "#EF4444" }, // Red
                      ]}
                      cx={60}
                      cy={60}
                      innerRadius={40}
                      outerRadius={55}
                      startAngle={90}
                      endAngle={450}
                      dataKey="value"
                    >
                      {[
                        { value: 50, color: "#A855F7" },
                        { value: 30, color: "#7C3AED" },
                        { value: 20, color: "#EF4444" },
                      ].map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <text
                      x="53%"
                      y="56%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-2xl font-bold"
                    >
                      50
                    </text>
                  </PieChart>
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#A75AF2]" />
                  <span>Inactive</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#572083]" />
                  <span>Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EB001B]" />
                  <span>Removed</span>
                </div>
              </div>
            </Link>
          </Card>

          {/* Bookings Card */}
          <Card className="shadow-md">
            <Link to="/d/bookings">
              <div className="flex justify-between items-start">
                <h2 className="text-gray-600">Total Bookings</h2>
                <FilterDropdown />
              </div>
              <div className="flex justify-center mt-4">
                <div className="relative">
                  <PieChart width={120} height={120}>
                    <Pie
                      data={[
                        { name: "Active", value: 50, color: "#A855F7" }, // Purple
                        { name: "Inactive", value: 30, color: "#7C3AED" }, // Dark Purple
                        { name: "Cancelled", value: 20, color: "#EF4444" }, // Red
                      ]}
                      cx={60}
                      cy={60}
                      innerRadius={40}
                      outerRadius={55}
                      startAngle={90}
                      endAngle={450}
                      dataKey="value"
                    >
                      {[
                        { value: 50, color: "#A855F7" },
                        { value: 30, color: "#7C3AED" },
                        { value: 20, color: "#EF4444" },
                      ].map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <text
                      x="53%"
                      y="56%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-2xl font-bold"
                    >
                      50
                    </text>
                  </PieChart>
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#A75AF2]" />
                  <span>Inactive</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#572083]" />
                  <span>Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EB001B]" />
                  <span>Removed</span>
                </div>
              </div>
            </Link>
          </Card>
        </div>
      </main>
    </div>
  );
}
