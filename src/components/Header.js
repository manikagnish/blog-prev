import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [recent, setRecent] = useState(false);

  return (
    <header>
      <div class="container container-flex">
        <div class="site-title">
          <h1>Living the simple life</h1>
          <p class="subtitle">A blog exploring minimalism in life</p>
        </div>
        <nav>
          <ul class="nav-list">
            <li class="nav-item">
              <Link
                to="/"
                class={home ? 'nav-link current-page' : 'nav-link'}
                onClick={() => {
                  setAbout(false);
                  setHome(!home);
                  setRecent(false);
                }}
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/about"
                class={about ? 'nav-link current-page' : 'nav-link'}
                onClick={() => {
                  setAbout(!about);
                  setHome(false);
                  setRecent(false);
                }}
              >
                About me
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/recent-posts"
                class={recent ? 'nav-link current-page' : 'nav-link'}
                onClick={() => {
                  setAbout(false);
                  setHome(false);
                  setRecent(!recent);
                }}
              >
                Recent Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
