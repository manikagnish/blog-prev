function Aside() {
  return (
    <aside class="sidebar">
      <div class="sidebar-widget">
        <h2 class="widget-title">ABOUT ME</h2>
        <img
          src="./images/smiling-guy-green-bagpack.jpg"
          alt="owner of the blog"
          class="widget-img"
        />
        <p class="widget-body">
          I find life better, and I'm happier, when things are nice and simple.
        </p>
      </div>

      <div class="sidebar-widget">
        <h2 class="widget-title">RECENT POSTS</h2>
        <div class="widget-recent-post">
          <h3 class="widget-recent-post-title">Keeping cooking simple</h3>
          <img src="./images/food.jpg" alt="" class="widget-img" />
        </div>
        <div class="widget-recent-post">
          <h3 class="widget-recent-post-title">Simplicity and work</h3>
          <img src="./images/chair.jpg" alt="" class="widget-img" />
        </div>
        <div class="widget-recent-post">
          <h3 class="widget-recent-post-title">Simple decoraitions</h3>
          <img src="./images/plant.jpg" alt="" class="widget-img" />
        </div>
      </div>
    </aside>
  );
}

export default Aside;
