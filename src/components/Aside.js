function Aside() {
  return (
    <aside className="sidebar">
      <div className="sidebar-widget">
        <h2 className="widget-title">ABOUT ME</h2>
        <img
          src="./images/smiling-guy-green-bagpack.jpg"
          alt="owner of the blog"
          className="widget-img"
        />
        <p className="widget-body">
          I find life better, and I'm happier, when things are nice and simple.
        </p>
      </div>

      <div className="sidebar-widget">
        <h2 className="widget-title">RECENT POSTS</h2>
        <div className="widget-recent-post">
          <h3 className="widget-recent-post-title">Keeping cooking simple</h3>
          <img src="./images/food.jpg" alt="" className="widget-img" />
        </div>
        <div className="widget-recent-post">
          <h3 className="widget-recent-post-title">Simplicity and work</h3>
          <img src="./images/chair.jpg" alt="" className="widget-img" />
        </div>
        <div className="widget-recent-post">
          <h3 className="widget-recent-post-title">Simple decoraitions</h3>
          <img src="./images/plant.jpg" alt="" className="widget-img" />
        </div>
      </div>
    </aside>
  );
}

export default Aside;
