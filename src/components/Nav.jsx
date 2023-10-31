import { useStore } from '@nanostores/react';
import { isNavOpen } from '../stores/navStore';

const Nav = () => {
  const $isNavOpen = useStore(isNavOpen);

  return $isNavOpen ? (
  <aside className="navContainer">
    <nav className="navLinks">
        <ul>
            <li><a  className="link" href="/">Home</a></li>
            <li><a  className="link" href="#">Contact</a></li>
        </ul>
    </nav>
        <style jsx="true">{`
            .navContainer{
                min-width: 25%;
            }
            .navLinks{
                width: 100%;
                height: 100%;
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