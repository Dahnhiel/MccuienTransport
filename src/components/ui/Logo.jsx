import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";

export const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`inline-block ${className}`}>
      {/* Container: Responsive size (Mobile: 12, Desktop: 16) */}
      <div className="w-30 h-auto flex items-center justify-center overflow-hidden">
        <img 
          src={LogoImg} 
          alt="McCuien Transportation" 
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
};