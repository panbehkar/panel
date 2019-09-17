import React, { useContext } from 'react';
import Routes from "../utils/routes";
import Header from "./header/header";
import Content from "./content";
import Footer from "./footer/footer";
import { SideContext } from '../contexts/sideContext';

const Wrapper = () => {
    const { sideOpen } = useContext(SideContext);
    return (
        <section className={`p-wrapper${sideOpen ? ' push' : ''}`}>
            <Header />
            <Content>
                <Routes />
            </Content>
            <Footer />
        </section>
    );
}

export default Wrapper;