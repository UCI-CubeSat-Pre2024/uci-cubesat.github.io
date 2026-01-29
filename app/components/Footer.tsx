import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-orbital border-t border-starlight">
            <div className="max-w-[1200px] mx-auto py-8 px-6 max-sm:py-6 max-sm:px-5">
                <h2 className="font-medium text-2xl text-primary m-0 mb-5 max-sm:text-xl max-sm:mb-4">
                    Stay Connected
                </h2>
                <div className="flex justify-between items-start max-sm:flex-col max-sm:gap-4">
                    <div className="flex flex-col gap-2">
                        <a
                            href="https://www.instagram.com/ucicubesat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 text-muted text-sm transition-colors hover:text-primary"
                            aria-label="UCI CubeSat on Instagram"
                        >
                            <FaInstagram className="text-[22px]" />
                            <span>@ucicubesat</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/uci-cubesat/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 text-muted text-sm transition-colors hover:text-primary"
                            aria-label="UCI CubeSat on LinkedIn"
                        >
                            <FaLinkedin className="text-[22px]" />
                            <span>UCI CubeSat</span>
                        </a>
                    </div>
                    <div className="flex flex-col items-end gap-2 max-sm:items-start">
                        <a href="mailto:team.ucicubesat@gmail.com" className="text-sm font-medium text-earth transition-colors hover:text-atmosphere">
                            Join Us →
                        </a>
                        <p className="text-[13px] text-dust m-0">Based in Irvine, CA</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
