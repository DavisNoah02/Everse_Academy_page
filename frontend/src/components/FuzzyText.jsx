import React, { useEffect, useRef } from "react";

export default function FuzzyText({
  children,
  baseIntensity = 0.2,
  hoverIntensity = 0.5,
  enableHover = true,
  className = "",
}) {
  const ref = useRef();
  let interval;

  useEffect(() => {
    const el = ref.current;

    const animate = () => {
      const redX = (Math.random() - 0.5) * baseIntensity * 10;
      const redY = (Math.random() - 0.5) * baseIntensity * 10;
      const blueX = (Math.random() - 0.5) * baseIntensity * 10;
      const blueY = (Math.random() - 0.5) * baseIntensity * 10;

      el.style.textShadow = `
        ${redX}px ${redY}px 0 red,
        ${blueX}px ${blueY}px 0 blue
      `;
    };

    interval = setInterval(animate, 80);

    return () => clearInterval(interval);
  }, [baseIntensity]);

  return (
    <span
      ref={ref}
      className={`font-mono font-extrabold ${className}`}
      onMouseEnter={() => {
        if (enableHover) baseIntensity = hoverIntensity;
      }}
    >
      {children}
    </span>
  );
}
