import { useStore } from "@nanostores/react"
import { isNavOpen } from "../stores/navStore"
import { useEffect } from "react"

const Nav = ({ colorWhite = false, flexColumn = false, justify = false, footerVisible = false, mobile = false, footer = false }) => {
    const $isNavOpen = useStore(isNavOpen)

    const toggleNav = () => {
        isNavOpen.set(!$isNavOpen.get())
    }

    const navLinks = [{
        href: "/",
        name: "Home",
    }, {
        href: "/projects",
        name: "Our Work",
    }, {
        href: "/reviews",
        name: "Reviews",
    }, {
        href: "/contact",
        name: "Contact Us",
    }, {
        href:"/calendly",
        name:"Free Consultation",
    },]

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
        <section className={`navContainer ${footerVisible ? "footerVisible" : ""}`} onClick={$isNavOpen ? toggleNav : null} aria-hidden={$isNavOpen ? null : true}>
            <nav className="navLinks">
                <ul className={`list ${flexColumn ? "flexColumn" : ""}`}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                className={`link ${colorWhite ? "colorWhite" : ""} ${link.href === '/calendly' ? "calendly" : ""} ${footer ? 'footer' : ''}`}
                                href={link.href}
                                onClick={toggleNav}
                                tabIndex={mobile === false ? 0 : $isNavOpen ? 0 : -1}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
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

        .footer:focus{
            outline: 2px solid var(--white);
        }

        .colorWhite {
          color: var(--white);
        }
        
        .calendly{
          background-color: var(--yellow);
          padding: 0.5rem;
          color: black;
        }

        @media screen and (max-width: 1200px) {
          .navContainer{
            max-height: ${$isNavOpen ? "100vh" : "0"};
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
