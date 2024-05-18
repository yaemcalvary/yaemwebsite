import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="nav-bar4">
      <div className="yaem-logo">
        <img
          className="logo-image-icon"
          loading="lazy"
          alt=""
          src="/yaemlogo.png"
        />
        <div className="calvary-yaem-wrapper1">
          <h2 className="calvary-yaem6">Calvary YAEM</h2>
        </div>
      </div>
      <nav className="nav-wrapper">
        <nav className="nav">
          <div className="home4">Home</div>
          <div className="about3">About</div>
          <div className="community3">Community</div>
          <div className="resources6">Resources</div>
          <div className="give3">Give</div>
        </nav>
      </nav>
    </header>
  );
};

export default NavBar;
