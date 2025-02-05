import { useStore } from "@nanostores/react"
import { isNavOpen } from "../stores/navStore"
import { useEffect } from "react"

const Nav = ({colorWhite = false, flexColumn = false, justify = false, footerVisible = false}) => {
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
    <section className={`navContainer ${footerVisible ? "footerVisible" : ""}`} onClick={$isNavOpen ? toggleNav : null}>
      <nav className="navLinks">
        <ul className={`list ${flexColumn ? "flexColumn" : ""}`}>
          <li>
            <a
              className={`link ${colorWhite ? "colorWhite" : ""}`}
              href="/"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`link ${colorWhite ? "colorWhite" : ""}`}
              href="/team"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Team
            </a>
          </li>
          <li>
            <a
              className={`link ${colorWhite ? "colorWhite" : ""}`}
              href="/projects"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={`link ${colorWhite ? "colorWhite" : ""}`}
              href="/contact"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className={`link ${colorWhite ? "colorWhite" : ""}`}
              href="https://www.sinno.ca/sitemap-0.xml"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Sitemap
            </a>
          </li>
          <li>
            <a
              className={`link calendly`}
              href="/calendly"
              onClick={toggleNav}
              tabIndex={$isNavOpen ? 0 : -1}
            >
              Book a Consultation
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
        .list {
          display: flex;
          flex-direction: row;
          justify-content: ${justify ? 'flex-end' : 'center'};
          flex-wrap: wrap;
          align-items: center;
          gap: 2rem;
        }
        
        .link{
          color: var(--black);
        }
        
        .colorWhite {
          color: var(--white);
        }
        
        .calendly{
          background-color: var(--yellow);
          padding: 0.5rem;
        }

        @media screen and (max-width: 1200px) {
          .navContainer{
            max-height: ${$isNavOpen ? 100 : 0}vh;
            opacity: ${$isNavOpen ? 1 : 0};
            transition: opacity 0.5s, max-height 0.5s;
          }
          .list{
            flex-direction: row;
            justify-content: center;
          }

          .flexColumn{
            flex-direction: column;
          }
        }

        .footerVisible{
          max-height: 100vh;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

export default Nav
