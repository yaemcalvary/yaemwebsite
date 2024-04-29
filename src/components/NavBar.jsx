import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <div className="yaem-logo">
        <img
          className="yaem-logo-image"
          loading="lazy"
          alt=""
          src="/yaem-logo-image.png"
        />
        <div className="calvary-yaem-wrapper">
          <h2 className="calvary-yaem">Calvary YAEM</h2>
        </div>
      </div>
      <nav className="nav-wrapper">
        <nav className="nav">
          <div className="home">Home</div>
          <div className="about">About</div>
          <div className="community">Community</div>
          <div className="resources">Resources</div>
          <div className="give">Give</div>
        </nav>
      </nav>
    </header>
  );
};

export default NavBar;
