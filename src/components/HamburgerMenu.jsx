import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('button')
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className={`hamburger-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      {isOpen && <section>
        <nav class="navLinks">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </section>}
    </div>
  );
};

export default HamburgerMenu;
