import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { CountUp } from '../../components/CountUp';

export default function Home() {
    const statsAnimation = useScrollAnimation<HTMLElement>();
    const aboutAnimation = useScrollAnimation<HTMLElement>();
    const missionAnimation = useScrollAnimation<HTMLElement>();
    const satAnimation = useScrollAnimation<HTMLDivElement>();
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
                    poster="/images/earth-orbit-poster.jpg"
                    className="absolute inset-0 w-full h-full object-cover object-bottom"
                    aria-hidden="true"
                >
                    <source src="/videos/earth-orbit.mp4" type="video/mp4" />
                    <source src="/videos/earth-orbit.webm" type="video/webm" />
                </video>
                <div
                    className="absolute inset-0 z-[1]"
                    style={{
                        background: 'linear-gradient(to bottom, #070A0F 0%, rgba(7,10,15,0.85) 35%, rgba(7,10,15,0.4) 65%, rgba(7,10,15,0.7) 85%, #070A0F 100%)',
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
                className={`relative z-[3] -mt-24 flex items-center justify-center gap-16 py-16 px-6 max-sm:gap-10 max-sm:py-12 animate-on-scroll ${statsAnimation.isVisible ? 'visible' : ''}`}
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
                className={`relative section-glow-atmosphere flex items-center justify-center gap-16 py-24 px-10 max-w-[1200px] mx-auto max-sm:flex-col-reverse max-sm:py-16 max-sm:px-6 max-sm:gap-10 animate-on-scroll ${missionAnimation.isVisible ? 'visible' : ''}`}
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
                <div className="shrink-0 relative">
                    <div className="absolute inset-0 rounded-full bg-atmosphere/5 blur-3xl scale-110 pointer-events-none" />
                    <div
                        ref={satAnimation.ref}
                        className={`sat-entrance ${satAnimation.isVisible ? 'visible floating' : ''}`}
                    >
                        <img
                            src="/renders/antsat01.png"
                            alt="AntSat 01 satellite render"
                            width={420}
                            height={420}
                            loading="lazy"
                            className="block max-w-[420px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-sm:max-w-[240px]"
                        />
                    </div>
                </div>
            </section>

            <section
                ref={aboutAnimation.ref}
                className={`relative section-glow-earth flex items-center justify-center gap-[60px] py-24 px-10 max-w-[1200px] mx-auto max-sm:flex-col max-sm:py-16 max-sm:px-6 max-sm:gap-8 animate-on-scroll ${aboutAnimation.isVisible ? 'visible' : ''}`}
            >
                <div className="shrink-0 relative">
                    <div className="absolute -inset-2 rounded-lg bg-gradient-to-br from-earth/10 to-atmosphere/5 blur-xl pointer-events-none" />
                    <img
                        src="/photos/Home_Page.png"
                        alt="UCI CubeSat team working on satellite"
                        width={400}
                        height={300}
                        loading="lazy"
                        className="relative rounded-lg block max-w-full h-auto max-sm:w-full"
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
                className={`py-10 px-6 animate-on-scroll ${sponsorsAnimation.isVisible ? 'visible' : ''}`}
            >
                <p className="text-xs text-dust uppercase tracking-[0.2em] text-center m-0 mb-8">Our Sponsors</p>
                <div className="flex items-center justify-center gap-12 flex-wrap max-sm:gap-8">
                    <img src="/images/NG_logo.jpeg" alt="Northrop Grumman" width={200} height={60} loading="lazy" className="max-h-10 w-auto object-contain grayscale brightness-[0.7] transition-[filter] duration-300 hover:grayscale-0 hover:brightness-100" />
                    <img src="/images/TO_logo.png" alt="Terran Orbital" width={235} height={60} loading="lazy" className="max-h-10 w-auto object-contain grayscale brightness-[0.7] transition-[filter] duration-300 hover:grayscale-0 hover:brightness-100" />
                    <img src="/images/GA_logo.png" alt="General Atomics Aeronautical" width={200} height={30} loading="lazy" className="max-h-10 w-auto object-contain grayscale brightness-[0.7] transition-[filter] duration-300 hover:grayscale-0 hover:brightness-100" />
                    <img src="/images/ANSYS_logo.png" alt="Ansys" width={165} height={42} loading="lazy" className="max-h-10 w-auto object-contain grayscale brightness-[0.7] transition-[filter] duration-300 hover:grayscale-0 hover:brightness-100" />
                </div>
            </section>

            <section
                ref={joinAnimation.ref}
                className={`relative text-center py-20 px-6 animate-on-scroll ${joinAnimation.isVisible ? 'visible' : ''}`}
            >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[600px] h-[600px] rounded-full bg-earth/[0.04] blur-3xl" />
                </div>
                <div className="relative">
                    <h2 className="font-semibold text-[48px] text-primary m-0 mb-3 max-sm:text-[32px]">Join the Team</h2>
                    <p className="text-[15px] text-dust mb-2">Be part of something that leaves the atmosphere</p>
                    <p className="text-[15px] leading-[1.7] text-muted max-w-[480px] mx-auto mb-7">
                        We're looking for undergraduate students in EECS, MAE, and related
                        fields who want hands-on satellite engineering experience.
                    </p>
                    <Link to="/contact" className="inline-block text-deep-space text-sm font-medium tracking-[0.03em] py-3 px-7 bg-earth rounded-md transition-all hover:shadow-[0_0_24px_rgba(47,128,237,0.4)] hover:bg-[#3D8EF0]">
                        Get in Touch →
                    </Link>
                </div>
            </section>
        </>
    );
}
