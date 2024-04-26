import "./BottomBar.css";

const BottomBar = () => {
  return (
    <footer className="bottom-bar1">
      <div className="nav-bar-container-parent">
        <div className="nav-bar-container">
          <img
            className="screenshot-2024-04-23-at-3592"
            alt=""
            src="/screenshot-20240423-at-359-1@2x.png"
          />
          <div className="frame-div">
            <h2 className="calvary-yaem3">Calvary YAEM</h2>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="visit-us-group">
            <div className="visit-us1">Visit us!</div>
            <div className="sundays-1pm-daniel-container1">
              <p className="sundays-1pm1">Sundays 1pm @Daniel Chapel</p>
              <p className="ryders-lane-east1">
                572 Ryders Lane, East Brunswick, NJ 08816
              </p>
            </div>
          </div>
        </div>
        <div className="top-bar">
          <div className="frame-parent1">
            <div className="stay-connected-wrapper">
              <div className="stay-connected1">Stay connected!</div>
            </div>
            <div className="frame-parent2">
              <div className="yaemcalvarygmailcom-wrapper">
                <div className="yaemcalvarygmailcom1">
                  yaemcalvary@gmail.com
                </div>
              </div>
              <div className="email-input-field">
                <div className="raphaelfacebook-wrapper">
                  <img
                    className="raphaelfacebook-icon1"
                    loading="lazy"
                    alt=""
                    src="/raphaelfacebook.svg"
                  />
                </div>
                <img
                  className="uilinstagram-alt-icon1"
                  loading="lazy"
                  alt=""
                  src="/uilinstagramalt.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar-instance">
        <div className="calvary-yaem-all1">
          @ 2024 Calvary YAEM. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;
