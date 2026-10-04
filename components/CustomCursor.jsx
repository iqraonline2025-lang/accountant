"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [variant, setVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse position values (bypasses React state for high performance)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for the outer ring (creates the "elastic chasing" effect)
  const ringX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });

  useEffect(() => {
    // Detect if user is on mobile/tablet (touch device)
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouchDevice(true);
      return;
    }

    const moveMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // If hovering over links or buttons
      if (target.closest("a, button, input, [role='button']")) {
        setVariant("pointer");
      } 
      // If hovering over text
      else if (target.closest("p, h1, h2, h3, h4, h5, h6, span, li")) {
        setVariant("text");
      } 
      // Default state
      else {
        setVariant("default");
      }
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [mouseX, mouseY, isVisible]);

  // If it's a mobile phone, don't render the custom cursor at all
  if (isTouchDevice) return null;

  // Visual states for the OUTER RING
  const ringVariants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "transparent",
      border: "2px solid #6B7C96", // Slate Blue outline
      borderRadius: "50%",
    },
    pointer: {
      width: 56,
      height: 56,
      backgroundColor: "rgba(220, 46, 63, 0.15)", // Soft Red fill
      border: "2px solid rgba(220, 46, 63, 0.5)", // Red outline
      borderRadius: "50%",
    },
    text: {
      width: 4,
      height: 28,
      backgroundColor: "#DC2E3F", // Solid Red vertical line
      border: "0px solid transparent",
      borderRadius: "4px",
    },
  };

  // Visual states for the INNER DOT
  const dotVariants = {
    default: { opacity: 1, scale: 1 },
    pointer: { opacity: 0, scale: 0 }, // Disappears when hovering links
    text: { opacity: 0, scale: 0 },    // Disappears when hovering text
  };

  return (
    <>
      {/* OUTER RING (Delayed Spring Follow) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* We use a wrapper with -ml/mt to keep it perfectly centered on the mouse no matter how big it gets */}
        <motion.div
          className="absolute"
          variants={ringVariants}
          animate={variant}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>

      {/* INNER DOT (Instant Follow) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="absolute h-2 w-2 rounded-full bg-[#DC2E3F]" // Crimson Red dot
          variants={dotVariants}
          animate={variant}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}