import { useStore } from '@nanostores/react';
import { isNavOpen } from '../stores/navStore';

const Nav = () => {
  const $isNavOpen = useStore(isNavOpen);

  return $isNavOpen ? (
  <section className="navContainer">
    <nav className="navLinks">
        <ul>
            <li><a  className="link" href="#home">Home</a></li>
            <li><a  className="link" href="#services">Services</a></li>
            <li><a  className="link" href="#projects">Projects</a></li>
            <li><a  className="link" href="#reviews">Reviews</a></li>
            <li><a  className="link" href="#contact">Contact</a></li>
        </ul>
    </nav>
        <style jsx="true">{`
            .navContainer{
                position: sticky;
                width: 100%;
                height: 100%;
                // background-color: var(--bgBlack);
            }
            .navLinks{
                width: 100%;
                height: 100%;
                padding: 1rem;
                border-bottom: 2px solid var(--yellow);
            }
            .navLinks ul{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;
            }
            .link{
                font-size: 1.8rem;
            }
            .link:hover{
                text-decoration: underline var(--yellow);
                transition: 0.3s;
            }
        `}</style>
  </section>
  ) : null;
}

export default Nav;