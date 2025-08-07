import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Detect route change

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#0d6efd",
          color: "#fff",
          fontSize: "30px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          zIndex: 999,
        }}
        aria-label="Scroll to top"
        title="Go to Top"
      >
        ⥉
      </button>
    )
  );
}

export default ScrollToTopButton;
