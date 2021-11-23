export default function Header() {
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
              <a href="index.html" class="nav-link current-page">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="about-me.html" class="nav-link">
                About me
              </a>
            </li>
            <li class="nav-item">
              <a href="recent-posts.html" class="nav-link">
                Recent Posts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
