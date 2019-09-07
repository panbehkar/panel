import React from "react";
import HeaderMenu from "./HeaderMenu";

const Header = ({ sideMenuOpen, onSideMenuToggle }) => {
    return (
        <header className={`p-header${sideMenuOpen ? ' push' : ''}`}>
            <a href="#open" className={`hamburger-icon${sideMenuOpen ? ' open' : ''}`} onClick={() => onSideMenuToggle}>
                <span className="hamburger-inner"></span>
            </a>
            <form className="p-header-search">
                <input type="search" placeholder="Search" />
                <i className="far fa-search"></i>
            </form>
            <HeaderMenu />
        </header>
    );
};

export default Header;
