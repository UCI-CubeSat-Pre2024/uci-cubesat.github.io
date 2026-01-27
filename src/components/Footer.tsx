import "./FooterStyle.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <h2 className="footer-heading">Stay Connected</h2>
                <div className="footer-content">
                    <div className="footer-socials">
                        <a
                            href="https://www.instagram.com/ucicubesat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="UCI CubeSat on Instagram"
                        >
                            <FaInstagram />
                            <span>@ucicubesat</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/uci-cubesat/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="UCI CubeSat on LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className="footer-info">
                        <a href="mailto:team.ucicubesat@gmail.com" className="footer-join">
                            Join Us →
                        </a>
                        <p className="footer-location">Based in Irvine, CA</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
