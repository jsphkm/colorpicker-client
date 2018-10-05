import React from "react";

const ProfileIcon = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = ""
}) => (
  <svg 
    style = {style}
    width = {width}
    className = {className}
    viewBox="0 0 15 16" 
    xmlns="http://www.w3.org/2000/svg" 
    fillRule="evenodd" 
    clipRule="evenodd" 
    strokeLinejoin="round" 
    strokeMiterlimit="1.41"
  >
    <g fill="#fff">
      <circle 
        fill={fill}
        cx="7.31" cy="3.84" r="3.84"/>
      <path 
        fill={fill}
        d="M14.61 14.3a5.1 5.1 0 0 0-5.1-5.1H5.1A5.1 5.1 0 0 0 0 14.3v.9h14.61v-.9z"/>
    </g>
  </svg>
);

export default ProfileIcon;