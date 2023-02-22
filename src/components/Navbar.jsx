import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu, setmenu] = useState(false);
  return (
    <nav>
      <div className="menu" onClick={() => { setmenu(!menu); }} onKeyDown={() => { setmenu(!menu); }} role="none">
        {menu ? <i className="fa-solid fa-xmark" /> : <i className="fa-solid fa-bars" />}
      </div>
      {
            menu
        && (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>

          <li>
            <Link to="login">Login</Link>
          </li>

          <li>Login to edit todos</li>
        </ul>
        )
}

    </nav>
  );
}

export default Navbar;
