import React from 'react';
import Routes from "../utils/routes";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Wrapper = ({ sideMenuOpen }) => {
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