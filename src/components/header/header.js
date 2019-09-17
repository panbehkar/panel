import React, { useContext } from "react";
import HeaderMenu from "./headerMenu";
import { SideContext } from '../../context/sideContext';

const Header = () => {
    const [{ sideMenuOpen }, setSide] = useContext(SideContext);
    // const { sideMenuOpen } = side;
    const sideMenuToggle = () => {
        setSide({ sideMenuOpen: !sideMenuOpen })
    }
    return (
        <header className={`p-header${sideMenuOpen ? ' push' : ''}`}>
            <a href="#!" className={`hamburger-icon${sideMenuOpen ? ' open' : ''}`} onClick={sideMenuToggle}>
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
