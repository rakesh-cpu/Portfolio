import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };


return (
  <>
  <div className="Navbar">
    <div className="LeftNav">
      <Link to="/">
        <img src="D:\portfolio\public\logo192.png" alt="logo" className="Logo" />
      </Link>
      <li className="ListItem">
        <Link to="/home" className="Link">
          Home
        </Link>
      </li>
      <li className="ListItem">
        <Link to="/skills" className="Link">
          Skills
        </Link>
      </li>
      <li className="ListItem">
        <Link to="/projects" className="Link">
          Projects
        </Link>
      </li>
      <li className="ListItem">
        <Link to="/blog" className="Link">
          Blog
        </Link>
      </li>
    </div>
    <div className="right-nav">
      
        <a href="https://github.com/rakesh-cpu" target="_blank" rel="noopener noreferrer" className="Link">
          GitHub
        </a>
    
      
        <a href="https://www.linkedin.com/in/rakeshdontula66/" target="_blank" rel="noopener noreferrer" className="Link">
          LinkedIn
        </a>
      
    </div>
    </div>
    </>
  
    )
}

export default Navbar;
