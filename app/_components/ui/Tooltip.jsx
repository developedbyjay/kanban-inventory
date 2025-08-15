import { useState } from "react";

export function Tooltip({
  text,
  showCondition = true,
  className = "",
  children,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && showCondition && (
        <span
          className={`px-3 py-2 text-white text-sm bg-gray-800 rounded-lg absolute left-full ml-5 whitespace-nowrap z-50 shadow-lg ${className}`}
        >
          {text}
        </span>
      )}
    </div>
  );
}
