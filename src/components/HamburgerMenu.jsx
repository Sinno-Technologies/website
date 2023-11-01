import { useStore } from '@nanostores/react';
import { isNavOpen } from '../stores/navStore';
const HamburgerMenu = () => {
  const $isNavOpen = useStore(isNavOpen); 
  return (
    <>
      <button className="hamburger-menu" onClick={() => isNavOpen.set(!$isNavOpen)} aria-label="Toggle Menu">
        {!$isNavOpen && <img className="imgBurger" src="/icons/burger_icon.png" alt="Open Navigation Menu icon" />}
        {$isNavOpen && <img className="imgBurger" src="/icons/close_icon.png" alt="Close Navigation Menu icon" />}
      </button>
      <style jsx="true">{`
        .imgBurger{
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
          transition: 3s;
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
          transition: 3s;
        } 

        .burger{
          width: 2rem;
          height: 0.25rem;
          border-radius: 0.5rem;
          background-color: var(--yellow);
          transform-origin: 1px;
          transition: 3s;
          transform: rotate(0); /* Add this */
        }
      `}</style>
    </>
  );
};

export default HamburgerMenu;

