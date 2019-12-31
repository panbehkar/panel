import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="p-footer">
            <span>
                Copyright &copy; {year}{" "}
                <a
                    href="http://panbehkar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Panbehkar
                </a>
            </span>
        </footer>
    );
};

export default Footer;
