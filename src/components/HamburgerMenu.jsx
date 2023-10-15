import { useStore } from '@nanostores/react';
import { isNavOpen } from '../stores/navStore';
const HamburgerMenu = () => {
  const $isNavOpen = useStore(isNavOpen); 
  return (
    <>
      <button href="#" className="hamburger-menu" onClick={() => isNavOpen.set(!$isNavOpen)} aria-label="Toggle Menu">
        {!$isNavOpen && (
          <>
            <span className="visuallyHidden">Close</span>
            <img className="img" src="../../public/icons/burger_icon.png" alt="Open Navigation Menu icon" />
          </>
        )}
        {$isNavOpen && (
          <>
            <span className="visuallyHidden">Close</span>
            <img className="img" src="../../public/icons/close_icon.png" alt="Close Navigation Menu icon" />
          </>
        )}
      </button>
      <style jsx="true">{`
        .img{
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

        .burger{
          width: 2rem;
          height: 0.25rem;
          border-radius: 0.5rem;
          background-color: var(--yellow);
          transform-origin: 1px;
          transition: all 0.3s ease-in-out;
          transform: rotate(0); /* Add this */
        }

        .burger1{
          transform: ${$isNavOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        .burger2{
          opacity: ${$isNavOpen ? '0' : '1'};
          transform: ${$isNavOpen ? 'translateX(100%)' : 'translateX(0)'};
        }
        .burger3{
          transform: ${$isNavOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
      `}</style>
    </>
  );
};

export default HamburgerMenu;

