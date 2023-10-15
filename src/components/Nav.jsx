import { useStore } from '@nanostores/react';
import { isNavOpen } from '../stores/navStore';

const Nav = () => {
  const $isNavOpen = useStore(isNavOpen);

  return $isNavOpen ? (
  <>
    <nav className="navLinks">
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
    </nav>
        <style jsx="true">{`
            .navLinks{
                width: 33%;
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
        `}</style>
  </>
  ) : null;
}

export default Nav;