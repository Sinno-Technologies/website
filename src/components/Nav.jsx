import { useStore } from "@nanostores/react"
import { isNavOpen } from "../stores/navStore"
import { useEffect } from "react"

const Nav = () => {
  const $isNavOpen = useStore(isNavOpen)

  const toggleNav = () => {
    isNavOpen.set(!$isNavOpen)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && $isNavOpen) {
      toggleNav()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [$isNavOpen])

  return (
    <section className="navContainer" onClick={$isNavOpen ? toggleNav : null}>
      <nav className="navLinks">
        <ul>
          <li>
            <a
              className="link"
              href="/"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="link"
              href="#process"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Process
            </a>
          </li>
          <li>
            <a
              className="link"
              href="#team"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              className="link"
              href="#projects"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="link"
              href="#reviews"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              className="link"
              href="#contact"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://www.sinno.ca/sitemap-0.xml"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Sitemap
            </a>
          </li>
        </ul>
      </nav>
      <style jsx="true">{`
        .navContainer {
          position: sticky;
          width: 100%;
          max-height: 100vh;
          opacity: 1;
          overflow: hidden;
        }
        .navLinks {
          width: 100%;
          height: 100%;
          padding: 1rem;
        }
        .navLinks ul {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          gap: 1rem;
        }
        
        .link{
          font-size: var(--font-size-lg);
        }

        @media screen and (max-width: 576px) {
          .link{
            font-size: var(--font-size-sm);
          }
        }

        @media (mind-width: 577px) and (max-width: 768px) {
          .link{
            font-size: var(--font-size-base);
          }
        }
        @media screen and (max-width: 768px) {
          .navContainer{
            max-height: ${$isNavOpen ? 100 : 0}vh;
            opacity: ${$isNavOpen ? 1 : 0};
            transition: opacity 0.5s, max-height 0.5s;
          }
          .navLinks{
            border-bottom: 2px solid var(--yellow);
          }
          .navLinks ul{
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}

export default Nav
