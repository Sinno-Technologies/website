import { useStore } from '@nanostores/react';
import { isNavOpen } from '../stores/navStore';
const HamburgerMenu = () => {
  const $isNavOpen = useStore(isNavOpen); 
  return (
      <button className="hamburger-menu" onClick={() => isNavOpen.set(!$isNavOpen)} aria-label="Toggle Menu">
        {!$isNavOpen && <img className="imgBurger" src="/icons/burger_icon.png" alt="Open Navigation Menu icon" />}
        {$isNavOpen && <img className="imgBurger" src="/icons/close_icon.png" alt="Close Navigation Menu icon" />}
        <style jsx="true">{`
          .imgBurger{
            width: 40px;
            height: 40px;
            max-width: 50px;
            max-height: 50px;
          }
          .visuallyHidden {
            position: absolute;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            border: 0;
            white-space: nowrap;
          }
          .hamburger-menu {
            width: 3rem;
            height: 2rem;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
            background-color: var(--black);
            border: none;
          } 

          .hamburger-menu:focus {
            outline: 2px dotted var(--yellow);
            outline-offset: 0.5rem; 
            border-radius: 1rem;
          }
        `}</style>
      </button>
  );
};

export default HamburgerMenu;

