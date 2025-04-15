import React from 'react';

interface FancyButtonProps {
  label: string;
  icon: React.ReactNode; // emoji or SVG
  onClick?: () => void;
  className?: string;
}

const FancyButton: React.FC<FancyButtonProps> = ({ label, icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex items-center gap-2 px-4 py-2 mt-6 cursor-pointer rounded-2xl 
        bg-gradient-to-br from-indigo-600/40 to-purple-700/30 
        backdrop-blur-md text-white font-semibold text-lg 
        border border-white/20 shadow-[0_0_15px_#7e22ce50] 
        hover:shadow-[0_0_30px_#a855f750] 
        hover:scale-105 active:scale-100 transition-all duration-300 
        overflow-hidden ${className}`}
    >
      {/* Animated star specks */}
      <span className="absolute inset-0 z-0 animate-pulse bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[length:20px_20px]" />

      {/* Icon with slight float effect */}
      <span className="z-10 transform group-hover:-translate-y-0.5 transition-transform duration-300">
        {icon}
      </span>

      {/* Label */}
      <span className="z-10">{label}</span>
    </button>
  );
};

export default FancyButton;
