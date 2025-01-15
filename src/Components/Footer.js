import React, { useEffect, useRef } from "react";
import './Footer.css';

function Footer() {
  // Create a reference for the trigger element
  const footer = useRef(null);
  const trigger = useRef(null);

  useEffect(() => {
    // IntersectionObserver to trigger when the trigger element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.current.classList.add("active"); // Make footer visible
        } else {
          footer.current.classList.remove("active"); // Hide footer
        }
      },
      {
        root: null, // Observe the viewport
        threshold: 0, // Trigger as soon as the element is visible
      }
    );

    if (trigger.current) {
      observer.observe(trigger.current); // Observe the trigger element
    }

    // Cleanup observer on component unmount
    return () => {
      if (trigger.current) {
        observer.unobserve(trigger.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={trigger} id="footer-trigger" style={{ height: "1px" }}></div> {/* Invisible element to trigger observer */}
      <footer ref={footer} id="sticky-footer">
        <div className="icon-container">
          <p className="contact-text">Feel free to contact me:</p>
          <a
            href="https://www.instagram.com/_.dxnny_.d/"
            target="_blank"
            className="footer-icon"
            title="Instagram"
          >
            <i
              className="bi bi-instagram"
              style={{ color: "#E1306C" }} // Corrected to object style
            ></i>
          </a>

          <a
            href="mailto:soundarajdanny@gmail.com"
            className="footer-icon"
            title="Mail"
          >
            <i
              className="bi bi-envelope-fill"
              style={{ color: "#FFFFFF" }} // Corrected to object style
            ></i>
          </a>

          <a
            href="https://www.linkedin.com/in/danny-soundarajd/"
            target="_blank"
            className="footer-icon"
            title="LinkedIn"
          >
            <i
              className="bi bi-linkedin"
              style={{ color: "#0A66C2" }} // Corrected to object style
            ></i>
          </a>

          {/* Add GitHub Icon */}
          <a
            href="https://github.com/DannySoundarajD"
            target="_blank"
            className="footer-icon"
            title="GitHub"
          >
            <i
              className="bi bi-github"
              style={{ color: "#333" }} // Adjust GitHub icon color
            ></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
