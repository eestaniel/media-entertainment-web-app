import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './styles/Navbar.scss'

const Navbar = () => {
    return (
        <React.Fragment>
            {/* Navbar: home, movie, tv */}
            <nav className="navbar">
                <div className="navbar__logo" datatype={'logo'}></div>
                <div className="navbar__links">
                    <ul>
                        <li>
                            <Link to="/" className="navbar__link">
                                <div className="navbar__link__icon" datatype={'home'}></div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/movie" className="navbar__link">
                                <div className="navbar__link__icon" datatype={'movies'}></div>

                            </Link>
                        </li>
                        <li>
                            <Link to="/tv" className="navbar__link">
                                <div className="navbar__link__icon" datatype={'tv'}></div>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="navbar__avatar" datatype={'avatar'}></div>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
