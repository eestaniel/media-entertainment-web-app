import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Navbar = () => {
    return (
        <React.Fragment>
            {/* Navbar: home, movie, tv */}
            <nav className="navbar">
                <div className="navbar__logo">
                    <h1>Media<span>Hub</span></h1>
                </div>
                <div className="navbar__links">
                    <ul>
                        <li>
                            <Link to="/" className="navbar__link">Home</Link>
                        </li>
                        <li>
                            <Link to="/movie" className="navbar__link">Movies</Link>
                        </li>
                        <li>
                            <Link to="/tv" className="navbar__link">TV Shows</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </React.Fragment>
);
};

export default Navbar;
