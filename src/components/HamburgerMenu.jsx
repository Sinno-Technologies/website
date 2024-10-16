import { useStore } from "@nanostores/react"
import { isNavOpen } from "../stores/navStore"
const HamburgerMenu = () => {
  const $isNavOpen = useStore(isNavOpen)
  return (
    <button
      className="hamburger-menu"
      onClick={() => isNavOpen.set(!$isNavOpen)}
      aria-label="Toggle Menu"
    >
      {!$isNavOpen && (
        <img
          className="imgBurger"
          src="/icons/burger_icon.png"
          alt="Open menu"
          aria-label="Open menu"
        />
      )}
      {$isNavOpen && (
        <img
          className="imgBurger"
          src="/icons/close_icon.png"
          alt="Close menu"
          aria-label="Close menu"
        />
      )}
      <style jsx="true">{`
        .imgBurger {
          width: auto;
          height: 100%;
          max-width: 50px;
          max-height: 50px;
        }
        .hamburger-menu {
          width: 100%;
          height: auto;
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
  )
}

export default HamburgerMenu
