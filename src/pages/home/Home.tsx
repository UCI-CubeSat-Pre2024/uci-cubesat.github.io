import './Home.css';
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
            <section className="hero">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/cubesatWebsiteBG.png"
                    className="hero-video"
                    aria-hidden="true"
                >
                    <source src="/videos/earth-orbit.webm" type="video/webm" />
                    <source src="/videos/earth-orbit.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay" />
                <div className="hero-content">
                    <p className="hero-tagline">
                        Pioneering Next-Gen Thermal Control Technology For Space Exploration
                    </p>
                    <h1 className="hero-title">UCI CubeSat</h1>
                    <p className="hero-body">
                        Designing, testing, and launching a modular nanosatellite into
                        low-Earth orbit.
                    </p>
                    <Link to="/aboutus/what-we-do" className="hero-cta">
                        Learn More →
                    </Link>
                </div>
            </section>

            <section
                ref={statsAnimation.ref}
                className={`stats-section animate-on-scroll ${statsAnimation.isVisible ? 'visible' : ''}`}
            >
                <div className="stat">
                    <CountUp end={10} suffix="+" duration={4} />
                    <span className="stat-label">Years In Progress</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                    <CountUp end={200} suffix="+" duration={4} />
                    <span className="stat-label">Members</span>
                </div>
            </section>

            <section
                ref={aboutAnimation.ref}
                className={`about-section animate-on-scroll ${aboutAnimation.isVisible ? 'visible' : ''}`}
            >
                <div className="about-image">
                    <img
                        src="/photos/Home_Page.png"
                        alt="UCI CubeSat team working on satellite"
                        width={400}
                        height={300}
                        loading="lazy"
                    />
                </div>
                <div className="about-text">
                    <h2>Who We Are</h2>
                    <p className="about-desktop">
                        We are an interdisciplinary team of undergraduate students at UCI dedicated to
                        building and launching a 2U nanosatellite. The satellite operates with six
                        main engineering subsystems: Avionics, Communications, Structures, Power,
                        Developer Operations, and Systems, in addition to housing our research payload.
                    </p>
                    <p className="about-mobile">
                        We are an interdisciplinary team of undergraduate students at UCI dedicated to
                        building and launching a 2U nanosatellite. The satellite operates with six
                        main engineering sub-teams.
                    </p>
                    <p>
                        Our mission is to test innovative thermal management technology in space, while
                        providing hands-on experience to future leaders in aerospace engineering.
                    </p>
                    <Link to="/aboutus/meet-the-team" className="about-link">
                        Meet The Team →
                    </Link>
                </div>
            </section>

            <section
                ref={missionAnimation.ref}
                className={`mission-section animate-on-scroll ${missionAnimation.isVisible ? 'visible' : ''}`}
            >
                <div className="mission-text">
                    <p className="mission-label">The Mission</p>
                    <h2>AntSat 01</h2>
                    <p>
                        Our 2U nanosatellite carries a Variable Emissivity Device (VED)
                        developed by UCI's Spacecraft Thermal Management Systems lab.
                        We're testing whether adjustable-emissivity materials can serve
                        as an inexpensive thermal regulation method for future spacecraft.
                    </p>
                    <Link to="/aboutus/what-we-do" className="mission-link">
                        Explore Subsystems →
                    </Link>
                </div>
                <div className="mission-render">
                    <img
                        src="/renders/antsat01.png"
                        alt="AntSat 01 satellite render"
                        width={400}
                        height={400}
                        loading="lazy"
                    />
                </div>
            </section>

            <section
                ref={sponsorsAnimation.ref}
                className={`sponsors-section animate-on-scroll ${sponsorsAnimation.isVisible ? 'visible' : ''}`}
            >
                <h2 className="sponsors-title">Our Sponsors</h2>
                <div className="sponsors-row">
                    <img
                        src="/images/NG_logo.jpeg"
                        alt="Northrop Grumman"
                        width={200}
                        height={60}
                        loading="lazy"
                    />
                    <img
                        src="/images/TO_logo.png"
                        alt="Terran Orbital"
                        width={235}
                        height={60}
                        loading="lazy"
                    />
                    <img
                        src="/images/GA_logo.png"
                        alt="General Atomics Aeronautical"
                        width={200}
                        height={30}
                        loading="lazy"
                    />
                    <img
                        src="/images/ANSYS_logo.png"
                        alt="Ansys"
                        width={165}
                        height={42}
                        loading="lazy"
                    />
                </div>
                <div className="sponsors-marquee" aria-hidden="true">
                    <div className="marquee-track">
                        <img src="/images/NG_logo.jpeg" alt="" width={180} height={54} />
                        <img src="/images/TO_logo2.png" alt="" width={210} height={54} />
                        <img src="/images/GA_logo2.png" alt="" width={140} height={21} />
                        <img src="/images/ANSYS_logo2.png" alt="" width={150} height={38} />
                        <img src="/images/NG_logo.jpeg" alt="" width={180} height={54} />
                        <img src="/images/TO_logo2.png" alt="" width={210} height={54} />
                        <img src="/images/GA_logo2.png" alt="" width={140} height={21} />
                        <img src="/images/ANSYS_logo2.png" alt="" width={150} height={38} />
                    </div>
                </div>
            </section>

            <section
                ref={joinAnimation.ref}
                className={`join-section animate-on-scroll ${joinAnimation.isVisible ? 'visible' : ''}`}
            >
                <h2>Join the Team</h2>
                <p>
                    We're looking for undergraduate students in EECS, MAE, and related
                    fields who want hands-on satellite engineering experience.
                </p>
                <Link to="/contact" className="join-cta">
                    Get in Touch →
                </Link>
            </section>
        </>
    );
}
