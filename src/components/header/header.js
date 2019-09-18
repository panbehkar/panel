import React, { useContext } from "react";
import HeaderMenu from "./headerMenu";
import { SideContext } from '../../contexts/sideContext';

const Header = () => {
    const { sideOpen, dispatch } = useContext(SideContext);
    return (
        <header className={`p-header${sideOpen ? ' push' : ''}`}>
            <a href="#!" className={`hamburger-icon${sideOpen ? ' open' : ''}`} onClick={() => dispatch({ type: 'SIDE_TOGGLE' })}>
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
