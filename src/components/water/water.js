import React, { useState } from "react";
import "./water.css"; // Add your CSS styles here

const Water = () => {
  const [targetLiters, setTargetLiters] = useState(0);
  const [currentIntake, setCurrentIntake] = useState(0);
  const waterIncrement = 250; // 250 ml per click

  const updateProgressPercentage = () => {
    const targetMl = targetLiters * 1000;
    return Math.min(Math.round((currentIntake / targetMl) * 100), 100);
  };

  const handleSetGoal = () => {
    const target = parseFloat(prompt("Set your daily goal (in liters):"));
    if (isNaN(target) || target < 0.5 || target > 5) {
      alert("Please enter a valid number between 0.5 and 5 liters.");
      return;
    }
    setTargetLiters(target);
    setCurrentIntake(0);
    alert(`Your daily goal is set to ${target} liters.`);
  };

  const handleAddWater = () => {
    if (targetLiters === 0) {
      alert("Please set your daily goal first.");
      return;
    }
    setCurrentIntake((prev) => {
      const newIntake = prev + waterIncrement;
      if (newIntake >= targetLiters * 1000) {
        alert("Congratulations! You have reached your daily water intake goal!");
      }
      return newIntake;
    });
  };

  const handleReset = () => {
    setCurrentIntake(0);
    alert("Progress has been reset.");
  };

  return (
    <div className="container5 Water">
      <h1>Water Intake Tracker</h1>
      <div className="input-section">
        <button id="set-target-btn" onClick={handleSetGoal}>
          Set Daily Goal
        </button>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${updateProgressPercentage()}%` }}
        ></div>
        <span className="progress-text">{updateProgressPercentage()}%</span>
      </div>
      <p id="current-intake-text">Current Intake: {currentIntake} ml</p>
      <button id="add-water-btn" onClick={handleAddWater}>
        Add 250 ml
      </button>
      <button id="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Water;
