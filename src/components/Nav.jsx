import { useStore } from "@nanostores/react"
import { isNavOpen } from "../stores/navStore"

const Nav = () => {
  const $isNavOpen = useStore(isNavOpen)

  const toggleNav = () => {
    isNavOpen.set(!$isNavOpen)
  }

  return (
    <section className="navContainer" onClick={$isNavOpen ? toggleNav : null}>
      <nav className="navLinks">
        <ul>
          <li>
            <a className="link" href="#home" onClick={toggleNav}>
              Home
            </a>
          </li>
          <li>
            <a className="link" href="#services" onClick={toggleNav}>
              Services
            </a>
          </li>
          <li>
            <a className="link" href="#projects" onClick={toggleNav}>
              Projects
            </a>
          </li>
          <li>
            <a className="link" href="#reviews" onClick={toggleNav}>
              Reviews
            </a>
          </li>
          <li>
            <a className="link" href="#contact" onClick={toggleNav}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <style jsx="true">{`
        .navContainer {
          position: sticky;
          width: 100%;
          max-height: ${$isNavOpen ? 100 : 0}vh;
          opacity: ${$isNavOpen ? 1 : 0};
          transition: opacity 0.5s, max-height 0.5s;
          overflow: hidden;
        }
        .navLinks {
          width: 100%;
          height: 100%;
          padding: 1rem;
          border-bottom: 2px solid var(--yellow);
        }
        .navLinks ul {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
        .link {
          font-size: 1.8rem;
        }
        .link:hover {
          text-decoration: underline var(--yellow);
          transition: 0.3s;
        }

        @media screen and (max-width: 1080px) {
          .link {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Nav
