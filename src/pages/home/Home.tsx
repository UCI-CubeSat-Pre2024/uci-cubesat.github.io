import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { CountUp } from '../../components/CountUp';

export default function Home() {
    const statsAnimation = useScrollAnimation<HTMLElement>();
    const aboutAnimation = useScrollAnimation<HTMLElement>();
    const missionAnimation = useScrollAnimation<HTMLElement>();
    const sponsorsAnimation = useScrollAnimation<HTMLElement>();
    const joinAnimation = useScrollAnimation<HTMLElement>();

    return (
        <>
            <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/cubesatWebsiteBG.png"
                    className="absolute inset-0 w-full h-full object-cover object-bottom"
                    aria-hidden="true"
                >
                    <source src="/videos/earth-orbit.mp4" type="video/mp4" />
                    <source src="/videos/earth-orbit.webm" type="video/webm" />
                </video>
                <div
                    className="absolute inset-0 z-[1]"
                    style={{
                        background: 'linear-gradient(to bottom, #070A0F 0%, rgba(7,10,15,0.85) 35%, rgba(7,10,15,0.4) 65%, rgba(7,10,15,0.1) 100%)',
                    }}
                />
                <div className="relative z-[2] text-center max-w-[640px] px-6 -mt-[10vh]">
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-muted mb-4 max-sm:text-[11px]">
                        Pioneering Next-Gen Thermal Control Technology For Space Exploration
                    </p>
                    <h1 className="font-bold text-[72px] text-primary m-0 mb-6 leading-none max-sm:text-[48px]">
                        UCI CubeSat
                    </h1>
                    <p className="text-base leading-[1.7] text-muted max-w-[520px] mx-auto mb-8 max-sm:text-[15px]">
                        Designing, testing, and launching a modular nanosatellite into
                        low-Earth orbit.
                    </p>
                    <Link to="/aboutus/what-we-do" className="inline-block text-primary text-sm font-medium tracking-[0.03em] transition-colors hover:text-atmosphere">
                        Learn More →
                    </Link>
                </div>
            </section>

            <section
                ref={statsAnimation.ref}
                className={`flex items-center justify-center gap-16 py-16 px-6 bg-orbital border-t border-b border-starlight shadow-[0_-12px_32px_rgba(0,0,0,0.45)] max-sm:gap-10 max-sm:py-12 animate-on-scroll ${statsAnimation.isVisible ? 'visible' : ''}`}
            >
                <div className="flex flex-col items-center gap-1">
                    <CountUp end={10} suffix="+" duration={4} className="text-[48px] font-semibold text-primary leading-none max-sm:text-[36px]" />
                    <span className="text-sm text-muted">Years In Progress</span>
                </div>
                <div className="w-px h-12 bg-starlight" />
                <div className="flex flex-col items-center gap-1">
                    <CountUp end={200} suffix="+" duration={4} className="text-[48px] font-semibold text-primary leading-none max-sm:text-[36px]" />
                    <span className="text-sm text-muted">Members</span>
                </div>
            </section>

            <section
                ref={missionAnimation.ref}
                className={`flex items-center justify-center gap-16 py-24 px-10 bg-orbital border-t border-starlight max-w-[1200px] mx-auto max-sm:flex-col-reverse max-sm:py-16 max-sm:px-6 max-sm:gap-10 animate-on-scroll ${missionAnimation.isVisible ? 'visible' : ''}`}
            >
                <div className="max-w-[460px]">
                    <p className="text-xs font-medium tracking-[0.15em] uppercase text-earth mb-4">Our Mission</p>
                    <h2 className="font-semibold text-[40px] text-primary m-0 mb-5 max-sm:text-[30px]">Ant01</h2>
                    <p className="text-[15px] leading-[1.7] text-muted m-0 mb-4">
                        At UCI CubeSat, we are developing, testing, and launching Ant01, a
                        2U CubeSat, into Low Earth Orbit (LEO) to conduct groundbreaking
                        research. Our mission focuses on testing the Variable Emissivity
                        Device (VED), a cutting-edge technology for cost-effective
                        spacecraft thermal regulation.
                    </p>
                    <p className="text-[15px] leading-[1.7] text-muted m-0 mb-4">
                        By evaluating Ant01's performance in orbit, we gather critical data
                        that will drive future innovations in microsatellite design and
                        performance.
                    </p>
                    <Link to="/aboutus/what-we-do" className="inline-block text-[15px] font-medium text-earth mt-2 transition-colors hover:text-atmosphere">
                        Explore Subsystems →
                    </Link>
                </div>
                <div className="shrink-0">
                    <img
                        src="/renders/antsat01.png"
                        alt="AntSat 01 satellite render"
                        width={400}
                        height={400}
                        loading="lazy"
                        className="block max-w-[360px] h-auto animate-sat-float motion-reduce:animate-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-sm:max-w-[240px]"
                    />
                </div>
            </section>

            <section
                ref={aboutAnimation.ref}
                className={`flex items-center justify-center gap-[60px] py-24 px-10 bg-deep-space max-w-[1200px] mx-auto max-sm:flex-col max-sm:py-16 max-sm:px-6 max-sm:gap-8 animate-on-scroll ${aboutAnimation.isVisible ? 'visible' : ''}`}
            >
                <div className="shrink-0">
                    <img
                        src="/photos/Home_Page.png"
                        alt="UCI CubeSat team working on satellite"
                        width={400}
                        height={300}
                        loading="lazy"
                        className="rounded-lg block max-w-full h-auto max-sm:w-full"
                    />
                </div>
                <div className="max-w-[500px]">
                    <h2 className="font-semibold text-[40px] text-primary m-0 mb-6 max-sm:text-[30px]">Who We Are</h2>
                    <p className="text-[15px] leading-[1.7] text-muted m-0 mb-4 max-sm:hidden">
                        We are an interdisciplinary team of undergraduate students at UCI dedicated to
                        building and launching a 2U nanosatellite. The satellite operates with six
                        main engineering subsystems: Avionics, Communications, Structures, Power,
                        Developer Operations, and Systems, in addition to housing our research payload.
                    </p>
                    <p className="text-[15px] leading-[1.7] text-muted m-0 mb-4 hidden max-sm:block">
                        We are an interdisciplinary team of undergraduate students at UCI dedicated to
                        building and launching a 2U nanosatellite. The satellite operates with six
                        main engineering sub-teams.
                    </p>
                    <p className="text-[15px] leading-[1.7] text-muted m-0 mb-4">
                        Our mission is to test innovative thermal management technology in space, while
                        providing hands-on experience to future leaders in aerospace engineering.
                    </p>
                    <Link to="/aboutus/meet-the-team" className="inline-block text-[15px] font-medium text-earth mt-2 transition-colors hover:text-atmosphere">
                        Meet The Team →
                    </Link>
                </div>
            </section>

            <section
                ref={sponsorsAnimation.ref}
                className={`py-20 px-6 bg-deep-space border-t border-starlight animate-on-scroll ${sponsorsAnimation.isVisible ? 'visible' : ''}`}
            >
                <h2 className="font-medium text-[32px] text-primary text-center m-0 mb-12">Our Sponsors</h2>
                <div className="hidden sm:flex items-center justify-center gap-12 flex-wrap max-w-[1000px] mx-auto">
                    <img
                        src="/images/NG_logo.jpeg"
                        alt="Northrop Grumman"
                        width={200}
                        height={60}
                        loading="lazy"
                        className="max-h-[60px] w-auto object-contain grayscale brightness-[0.7] transition-[filter] duration-300 hover:grayscale-0 hover:brightness-100"
                    />
                    <img
                        src="/images/TO_logo.png"
                        alt="Terran Orbital"
                        width={235}
                        height={60}
                        loading="lazy"
                        className="max-h-[60px] w-auto object-contain grayscale brightness-[0.7] transition-[filter] duration-300 hover:grayscale-0 hover:brightness-100"
                    />
                    <img
                        src="/images/GA_logo.png"
                        alt="General Atomics Aeronautical"
                        width={200}
                        height={30}
                        loading="lazy"
                        className="max-h-[60px] w-auto object-contain grayscale brightness-[0.7] transition-[filter] duration-300 hover:grayscale-0 hover:brightness-100"
                    />
                    <img
                        src="/images/ANSYS_logo.png"
                        alt="Ansys"
                        width={165}
                        height={42}
                        loading="lazy"
                        className="max-h-[60px] w-auto object-contain grayscale brightness-[0.7] transition-[filter] duration-300 hover:grayscale-0 hover:brightness-100"
                    />
                </div>
                <div className="sm:hidden overflow-hidden mt-6" aria-hidden="true">
                    <div className="flex items-center gap-12 w-max animate-marquee">
                        <img src="/images/NG_logo.jpeg" alt="" width={180} height={54} className="max-h-12 w-auto object-contain grayscale brightness-[0.7]" />
                        <img src="/images/TO_logo2.png" alt="" width={210} height={54} className="max-h-12 w-auto object-contain grayscale brightness-[0.7]" />
                        <img src="/images/GA_logo2.png" alt="" width={140} height={21} className="max-h-12 w-auto object-contain grayscale brightness-[0.7]" />
                        <img src="/images/ANSYS_logo2.png" alt="" width={150} height={38} className="max-h-12 w-auto object-contain grayscale brightness-[0.7]" />
                        <img src="/images/NG_logo.jpeg" alt="" width={180} height={54} className="max-h-12 w-auto object-contain grayscale brightness-[0.7]" />
                        <img src="/images/TO_logo2.png" alt="" width={210} height={54} className="max-h-12 w-auto object-contain grayscale brightness-[0.7]" />
                        <img src="/images/GA_logo2.png" alt="" width={140} height={21} className="max-h-12 w-auto object-contain grayscale brightness-[0.7]" />
                        <img src="/images/ANSYS_logo2.png" alt="" width={150} height={38} className="max-h-12 w-auto object-contain grayscale brightness-[0.7]" />
                    </div>
                </div>
            </section>

            <section
                ref={joinAnimation.ref}
                className={`text-center py-20 px-6 bg-deep-space border-t border-starlight animate-on-scroll ${joinAnimation.isVisible ? 'visible' : ''}`}
            >
                <h2 className="font-semibold text-[36px] text-primary m-0 mb-4 max-sm:text-[28px]">Join the Team</h2>
                <p className="text-[15px] leading-[1.7] text-muted max-w-[480px] mx-auto mb-7">
                    We're looking for undergraduate students in EECS, MAE, and related
                    fields who want hands-on satellite engineering experience.
                </p>
                <Link to="/contact" className="inline-block text-primary text-sm font-medium tracking-[0.03em] py-3 px-7 border border-starlight rounded-md transition-colors hover:border-earth hover:text-atmosphere">
                    Get in Touch →
                </Link>
            </section>
        </>
    );
}
