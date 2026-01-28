import { Helmet } from 'react-helmet-async';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const sections = [
  {
    title: "Avionics",
    description:
      "Responsible for the central flight computer and main interfaces between other satellite subsystems. Also responsible for the attitude determination and control system (ADCS), which allows for orientation adjustment of the satellite in orbit to ensure optimal power collection and to comply with payload requirements.",
    image: "/photos/Avionics.png",
  },
  {
    title: "Communications",
    description:
      "Handles communication between the satellite and ground stations. Ensures stable data transmission and real-time command execution for the satellite.",
    image: "/photos/Comms.png",
  },
  {
    title: "Structures",
    description:
      "Provides the physical framework of the satellite, ensuring strength and durability while minimizing weight to meet launch constraints.",
    image: "/photos/Structures.png",
  },
  {
    title: "Power",
    description:
      "Manages the energy systems of the satellite, including solar panels and batteries, to maintain continuous power supply for all subsystems.",
    image: "/photos/Power.png",
  },
  {
    title: "Systems",
    description:
      "Oversees the integration and design of all subsystems, ensuring each component works together as a unified satellite. Coordinates system-level testing, requirements, and documentation across the project.",
    image: "/photos/Mission.png",
  },
];

const glowClasses = ['section-glow-atmosphere', 'section-glow-earth', 'section-glow-atmosphere', 'section-glow-earth', 'section-glow-atmosphere'];

function SubsystemSection({ title, description, image, index }: {
  title: string; description: string; image: string; index: number;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`relative ${glowClasses[index]} flex items-center gap-12 w-full py-16 px-4 max-sm:flex-col max-sm:gap-6 max-sm:py-8 animate-on-scroll ${isVisible ? 'visible' : ''} ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
    >
      <div className="flex-[0_0_45%] max-sm:flex-none max-sm:w-full relative">
        <div className={`absolute -inset-2 rounded-lg ${index % 2 === 0 ? 'bg-gradient-to-br from-atmosphere/10 to-earth/5' : 'bg-gradient-to-br from-earth/10 to-atmosphere/5'} blur-xl pointer-events-none`} />
        <img
          src={image}
          alt={`${title} subsystem`}
          width={480}
          height={360}
          loading="lazy"
          className="relative w-full h-auto block rounded-lg border border-starlight"
        />
      </div>
      <div className="flex-1">
        <h2 className="font-semibold text-[28px] text-primary m-0 mb-4 max-sm:text-2xl">{title}</h2>
        <p className="text-[15px] leading-[1.7] text-muted m-0 max-sm:text-sm">{description}</p>
      </div>
    </section>
  );
}

const WhatWeDo = () => {
  const headerAnimation = useScrollAnimation<HTMLDivElement>();

  return (
    <>
    <Helmet>
      <title>What We Do | UCI CubeSat</title>
      <meta name="description" content="Explore UCI CubeSat's five core engineering subsystems: Avionics, Communications, Structures, Power, and Systems." />
      <link rel="canonical" href="https://ucicubesat.com/aboutus/what-we-do" />
      <meta property="og:title" content="What We Do | UCI CubeSat" />
      <meta property="og:description" content="Explore UCI CubeSat's five core engineering subsystems building a 2U nanosatellite." />
      <meta property="og:url" content="https://ucicubesat.com/aboutus/what-we-do" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="What We Do | UCI CubeSat" />
      <meta name="twitter:description" content="Explore UCI CubeSat's five core engineering subsystems building a 2U nanosatellite." />
      <meta name="twitter:image" content="https://ucicubesat.com/images/og-image.png" />
    </Helmet>
    <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto px-6 gap-[72px] max-sm:px-5 max-sm:gap-12">
      <div
        ref={headerAnimation.ref}
        className={`pt-32 pb-4 text-center animate-on-scroll ${headerAnimation.isVisible ? 'visible' : ''}`}
      >
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-earth mb-4 max-sm:text-[11px]">
          Engineering Subsystems
        </p>
        <h1 className="font-bold text-[48px] text-primary m-0 mb-3 max-sm:text-[32px]">What We Do</h1>
        <p className="text-[15px] text-muted m-0 max-w-[480px] mx-auto">Our satellite is built across five core engineering subsystems.</p>
      </div>
      {sections.map((section, index) => (
        <SubsystemSection key={section.title} {...section} index={index} />
      ))}
      <div className="pb-20" />
    </div>
    </>
  );
};

export default WhatWeDo;
