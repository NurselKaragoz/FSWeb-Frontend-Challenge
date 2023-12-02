import React, { useState, useEffect } from "react";

const Dark = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for the user's preference in local storage
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);

    // Apply dark mode class to the body
    document.body.classList.toggle("dark", savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;

    // Save the user's preference in local storage
    localStorage.setItem("darkMode", newDarkMode);

    // Toggle dark mode class on the body
    document.body.classList.toggle("dark", newDarkMode);

    // Update state
    setDarkMode(newDarkMode);
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={toggleDarkMode}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Toggle Dark Mode
      </button>

      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300"></p>
      </div>
    </div>
  );
};

export default Dark;
