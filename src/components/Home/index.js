import React, { useState } from "react";
import './Home.css';

const Home = () => {
  const CategorySelector = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };

    const handleButtonClick = () => {
      // Your button click logic here
      console.log('Selected category:', selectedCategory);
    };

    return (
      <div className="section2">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
          {/* Add more categories as needed */}
        </select>

        <button onClick={handleButtonClick}>Submit</button>
      </div>
    );
  };

  return (
    <>
      <div className="section">
        Grocery & Food Deliver Services
        <div className="grocery">
          Get fresh Grocery
        </div>
        <div className="grocery1">
          Eat Healthy, Feel Healthy
        </div>
      </div>

      <CategorySelector />

      <div className="divider"></div>

      <div className="section">
        Section 2
      </div>
    </>
  );
};

export default Home;
