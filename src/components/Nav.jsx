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
              href="#calendly"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Schedule a Call
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
