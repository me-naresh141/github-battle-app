import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [theme, setTheme] = useState(false);

  // handleTheme function
  const handleTheme = () => {
    setTheme(!theme);
    let htmlClasses = document.querySelector("html").classList;
    if (theme) {
      if (localStorage.theme === "dark") {
        htmlClasses.remove("dark");
        localStorage.removeItem("theme");
      }
    } else {
      htmlClasses.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.add("dark");
    }
  }, []);

  return (
    <nav className="flex justify-between text-2xl  py-12">
      <ul className="flex dark:text-white">
        <li>
          <NavLink to="/">Popular</NavLink>
        </li>
        <li className="ml-5">
          <NavLink to="/battle">Battle</NavLink>
        </li>
      </ul>
      <button onClick={handleTheme}>
        {localStorage.theme === "dark" ? "💡" : "🔦"}
      </button>
    </nav>
  );
};

export default Navbar;
