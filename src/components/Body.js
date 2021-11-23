import HomeMain from './HomeMain';
import AboutMain from './AboutMain';
import RecentPostsMain from './RecentPostsMain';
import Aside from './Aside';

import { Routes, Route } from 'react-router-dom';

export default function Body() {
  return (
    <div class="container container-flex">
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/blog" element={<HomeMain />} />
        <Route path="/blog/about" element={<AboutMain />} />
        <Route path="/blog/recent-posts" element={<RecentPostsMain />} />
      </Routes>
      <Aside />
    </div>
  );
}
