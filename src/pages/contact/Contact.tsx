import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Contact() {
    const headerAnimation = useScrollAnimation<HTMLDivElement>();
    const cardsAnimation = useScrollAnimation<HTMLDivElement>();

    return (
        <>
        <Helmet>
            <title>Contact | UCI CubeSat</title>
            <meta name="description" content="Get in touch with UCI CubeSat. Reach out to learn more about our nanosatellite project or get involved with the team." />
            <link rel="canonical" href="https://ucicubesat.com/contact" />
            <meta property="og:title" content="Contact | UCI CubeSat" />
            <meta property="og:description" content="Get in touch with UCI CubeSat. Reach out to learn more or get involved." />
            <meta property="og:url" content="https://ucicubesat.com/contact" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Contact | UCI CubeSat" />
            <meta name="twitter:description" content="Get in touch with UCI CubeSat. Reach out to learn more or get involved." />
            <meta name="twitter:image" content="https://ucicubesat.com/images/og-image.png" />
        </Helmet>
        <div className="flex flex-col items-center w-full min-h-[60vh] px-6 max-sm:px-5">
            <div
                ref={headerAnimation.ref}
                className={`pt-32 pb-4 text-center animate-on-scroll ${headerAnimation.isVisible ? 'visible' : ''}`}
            >
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-earth mb-4 max-sm:text-[11px]">
                    Get In Touch
                </p>
                <h1 className="font-semibold text-[48px] text-primary m-0 mb-3 max-sm:text-[32px]">
                    Let's Connect
                </h1>
                <p className="text-[15px] text-muted max-w-[440px] mx-auto">
                    Reach out to learn more about UCI CubeSat or get involved with the team.
                </p>
            </div>
            <div
                ref={cardsAnimation.ref}
                className={`relative flex flex-col items-center w-full max-w-[560px] pt-12 pb-20 animate-on-scroll ${cardsAnimation.isVisible ? 'visible' : ''}`}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-atmosphere/[0.03] blur-3xl pointer-events-none" />
                <div className="relative flex flex-col gap-4 w-full">
                    <div className={`flex flex-col gap-1 py-6 px-7 bg-orbital border border-starlight rounded-xl text-left transition-colors hover:border-earth/30 max-sm:py-5 max-sm:px-[22px] animate-on-scroll animate-delay-1 ${cardsAnimation.isVisible ? 'visible' : ''}`}>
                        <span className="text-[11px] font-medium uppercase tracking-[1px] text-dust">Project Manager</span>
                        <span className="text-base font-medium text-primary">Sonia Cruze</span>
                        <a href="mailto:scruze@uci.edu" className="text-sm font-medium text-earth mt-0.5 hover:text-atmosphere transition-colors">scruze@uci.edu</a>
                    </div>
                    <div className={`flex flex-col gap-1 py-6 px-7 bg-orbital border border-starlight rounded-xl text-left transition-colors hover:border-earth/30 max-sm:py-5 max-sm:px-[22px] animate-on-scroll animate-delay-2 ${cardsAnimation.isVisible ? 'visible' : ''}`}>
                        <span className="text-[11px] font-medium uppercase tracking-[1px] text-dust">Advisor</span>
                        <span className="text-base font-medium text-primary">Professor David Copp</span>
                        <a href="mailto:dcopp@uci.edu" className="text-sm font-medium text-earth mt-0.5 hover:text-atmosphere transition-colors">dcopp@uci.edu</a>
                    </div>
                    <div className={`flex flex-col gap-1 py-6 px-7 bg-orbital border border-starlight rounded-xl text-left transition-colors hover:border-earth/30 max-sm:py-5 max-sm:px-[22px] animate-on-scroll animate-delay-3 ${cardsAnimation.isVisible ? 'visible' : ''}`}>
                        <span className="text-[11px] font-medium uppercase tracking-[1px] text-dust">Team Email</span>
                        <a href="mailto:team.ucicubesat@gmail.com" className="text-sm font-medium text-earth mt-0.5 hover:text-atmosphere transition-colors">team.ucicubesat@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
