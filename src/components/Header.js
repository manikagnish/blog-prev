import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [recent, setRecent] = useState(false);

  return (
    <header>
      <div className="container container-flex">
        <div className="site-title">
          <h1>Living the simple life</h1>
          <p className="subtitle">A blog exploring minimalism in life</p>
        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="/blog/"
                className={home ? 'nav-link current-page' : 'nav-link'}
                onClick={() => {
                  setAbout(false);
                  setHome(!home);
                  setRecent(false);
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blog/about"
                className={about ? 'nav-link current-page' : 'nav-link'}
                onClick={() => {
                  setAbout(!about);
                  setHome(false);
                  setRecent(false);
                }}
              >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blog/recent-posts"
                className={recent ? 'nav-link current-page' : 'nav-link'}
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
