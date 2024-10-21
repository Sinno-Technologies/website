import { useStore } from "@nanostores/react"
import { isNavOpen } from "../stores/navStore"
import { Image } from "astro:assets"
// import { Burger } from "../assets/icons/burger_icon_white.svg"
// import { Close } from "../assets/icons/close_icon_white.svg"
// import { ReactComponent as BurgerIcon } from "../assets/icons/burger_icon_white.svg"
// import { ReactComponent as CloseIcon } from "../assets/icons/close_icon_white.svg"
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
          src="/icons/burger_icon_white.svg"
          alt="Open menu"
          title="Open menu"
          aria-label="Open menu"
        />
      )}
      {$isNavOpen && (
        <img
          className="imgBurger"
          src="/icons/close_icon_white.svg"
          alt="Close menu"
          title="Close menu"
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
          background-color: var(--white);
          border: none;
        }

        .hamburger-menu:focus {
          outline-offset: 0.25rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </button>
  )
}

export default HamburgerMenu
