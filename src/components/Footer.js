import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="p-footer">
            <span>
                Copyright &copy; {year} <a href="http://pnr.ir" target="_blank" rel="noopener noreferrer">PNR</a> Institute.
                </span>
        </footer>
    );
};

export default Footer;
