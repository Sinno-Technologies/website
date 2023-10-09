import { useStore } from '@nanostores/react';
import { isNavOpen } from '../stores/navStore';
const HamburgerMenu = () => {
  const $isNavOpen = useStore(isNavOpen); 
  return (
    <>
      <div className="hamburger-menu" onClick={() => isNavOpen.set(!$isNavOpen)}>
        {$isNavOpen === false && <><div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div></>}
        {$isNavOpen === true && <><div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div></>}
      </div>
      <style jsx="true">{`
        .hamburger-menu {
          width: 2rem;
          height: 2rem;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-around;
          cursor: pointer;
        } 

        .burger{
          width: 2rem;
          height: 0.25rem;
          border-radius: 0.5rem;
          background-color: var(--yellow);
          transform-origin: 1px;
          transition: all 0.3s ease-in-out;
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

