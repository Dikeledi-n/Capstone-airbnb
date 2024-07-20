import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import './Header.css';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header">
      <Link to="/">
         <img src="data:image/png;base64,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" className="header_logo" alt="logo" />
      </Link>
      <div className="header_center">
        <p>Places to stay</p>
        <p>Experiences</p>
        <p>Online Experiences</p>
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="header_dropdowns">
          <div className='menu_icon'>
            <MenuIcon />
          </div>
          <Avatar onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className="dropdown_menu">
              <Link to="/LoginPage">
                <p>Login</p>
              </Link>
              <p>Sign Up</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;