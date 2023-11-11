import { useStore } from '@nanostores/react';
import { isNavOpen } from '../stores/navStore';

const Nav = () => {
  const $isNavOpen = useStore(isNavOpen);

  return $isNavOpen ? (
  <aside className="navContainer">
    <nav className="navLinks">
        <ul>
            <li><a  className="link" href="#home">Home</a></li>
            <li><a  className="link" href="#services">Services</a></li>
            <li><a  className="link" href="#projects">Projects</a></li>
            <li><a  className="link" href="#">Contact</a></li>
        </ul>
    </nav>
        <style jsx="true">{`
            .navContainer{
                position: sticky;
                top: 15%;
                width: 25%;
                height: auto;
                border-left: 3px solid var(--yellow);
            }
            .navLinks{
                width: 100%;
                height: auto;
                padding: 1rem;
            }
            .navLinks ul{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1rem;
            }
            .link{
                font-size: 1.5rem;
            }
            .link:hover{
                text-decoration: underline var(--yellow);
                transition: 0.3s;
            }
        `}</style>
  </aside>
  ) : null;
}

export default Nav;