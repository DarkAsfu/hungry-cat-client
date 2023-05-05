import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Preloader.css";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
      localStorage.setItem("showPreloader", "false");
      document.body.classList.remove("no-scroll"); // remove no-scroll class
    }, 2000);

    const storedShowPreloader = localStorage.getItem("showPreloader");
    if (storedShowPreloader === "true") {
      setShowPreloader(true);
      document.body.classList.add("no-scroll"); // add no-scroll class
    } else {
      setShowPreloader(false);
      localStorage.setItem("showPreloader", "true");
      document.body.classList.remove("no-scroll"); // remove no-scroll class
    }

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {showPreloader && (
        <div className="advanced-preloader-container">
          <div className="advanced-preloader">
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
            <div className="bar bar4"></div>
            <div className="bar bar5"></div>
            <div className="bar bar6"></div>
            <div className="bar bar7"></div>
            <div className="bar bar8"></div>
            <div className="bar bar9"></div>
            <div className="bar bar10"></div>
            <div className="bar bar11"></div>
            <div className="bar bar12"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
