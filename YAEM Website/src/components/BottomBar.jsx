import "./BottomBar.css";

const BottomBar = () => {
  return (
    <footer className="bottom-bar">
      <div className="nav-bar-container-parent">
        <div className="nav-bar-container">
          <img
            className="screenshot-2024-04-23-at-359"
            loading="lazy"
            alt=""
            src="/yaem-logo-image@2x.png"
          />
          <div className="calvary-yaem-container">
            <h2 className="calvary-yaem1">Calvary YAEM</h2>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="visit-us-parent">
            <div className="visit-us">Visit us!</div>
            <div className="sundays-1pm-daniel-container">
              <p className="sundays-1pm">Sundays 1pm @Daniel Chapel</p>
              <p className="ryders-lane-east">
                572 Ryders Lane, East Brunswick, NJ 08816
              </p>
            </div>
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="frame-parent1">
            <div className="stay-connected-wrapper">
              <div className="stay-connected">Stay connected!</div>
            </div>
            <div className="frame-parent2">
              <div className="yaemcalvarygmailcom-wrapper">
                <div className="yaemcalvarygmailcom">yaemcalvary@gmail.com</div>
              </div>
              <div className="frame-parent3">
                <div className="raphaelfacebook-wrapper">
                  <img
                    className="raphaelfacebook-icon"
                    loading="lazy"
                    alt=""
                    src="/raphaelfacebook.svg"
                  />
                </div>
                <img
                  className="uilinstagram-alt-icon"
                  loading="lazy"
                  alt=""
                  src="/uilinstagramalt.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-bar">
        <div className="calvary-yaem-all">
          @ 2024 Calvary YAEM. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;
