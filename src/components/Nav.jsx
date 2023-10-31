import { useStore } from '@nanostores/react';
import { isNavOpen } from '../stores/navStore';

const Nav = () => {
  const $isNavOpen = useStore(isNavOpen);

  return $isNavOpen ? (
  <>
    <nav className="navLinks">
        <ul>
            <li class="link"><a href="/">Home</a></li>
            <li class="link"><a href="#">Contact</a></li>
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
            .link{
                font-size: 1.5rem;
            }
            .link:hover{
                text-decoration: underline var(--yellow);
            }
        `}</style>
  </>
  ) : null;
}

export default Nav;