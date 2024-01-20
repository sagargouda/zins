import { useState, useEffect } from "react";

function Header() {
  const [button, setButton] = useState("Login");
  function authen() {
    if (button === "Login") {
      setButton("Log out");
    } else {
      setButton("Login");
    }
  }

  useEffect(() => {}, []);

  return (
    <div className="header">
      <div className="header__image-container">
        <img
          src="https://images-workbench.99static.com/eIO-FrtrojAULSmA9gNqc0VPUE8=/99designs-contests-attachments/125/125055/attachment_125055744"
          alt="restaurant-logo"
          className="header__image-image"
        />
      </div>
      {/* nav contents */}
      <div className="header__nav-contents">
        <ul className="header__nav-ul">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <button className="login" onClick={authen}>
            {button}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
