import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="nav-bar2">
      <div className="yaem-logo">
        <img
          className="logo-image-icon"
          loading="lazy"
          alt=""
          src="/screenshot-20240423-at-359-1@2x.png"
        />
        <div className="calvary-yaem-frame">
          <h2 className="calvary-yaem2">Calvary YAEM</h2>
        </div>
      </div>
      <nav className="nav-wrapper">
        <nav className="nav">
          <div className="home1">Home</div>
          <div className="about1">About</div>
          <div className="community1">Community</div>
          <div className="resources1">Resources</div>
          <div className="give1">Give</div>
        </nav>
      </nav>
    </header>
  );
};

export default NavBar;
