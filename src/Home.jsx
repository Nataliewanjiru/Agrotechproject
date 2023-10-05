import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Farmer's Portal</h1>
      <p>
        We provide tools, resources, and information to help farmers succeed in
        their agricultural endeavors.
      </p>
      <div className="featured-products">
        <h2>Featured Products</h2>
        {/* You can add featured product cards here */}
      </div>
    </div>
  );
};

export default Home;
