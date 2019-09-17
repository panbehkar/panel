import React, { useContext } from 'react';
import Routes from "../utils/routes";
import Header from "./header/header";
import Content from "./content";
import Footer from "./footer/footer";
import { SideContext } from '../context/sideContext';

const Wrapper = () => {
    const [{ sideMenuOpen }] = useContext(SideContext);
    // const { sideMenuOpen } = side;
    return (
        <section className={`p-wrapper${sideMenuOpen ? ' push' : ''}`}>
            <Header />
            <Content>
                <Routes />
            </Content>
            <Footer />
        </section>
    );
}

export default Wrapper;