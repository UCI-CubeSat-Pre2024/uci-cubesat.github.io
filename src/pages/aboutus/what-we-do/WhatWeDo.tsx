import './WhatWeDo.css';

const WhatWeDo = () => {
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
  ];

  return (
    <div className="wwd-container">
      <header className="wwd-header">
        <h1>What We Do</h1>
        <p>Our satellite is built across four core engineering subsystems.</p>
      </header>
      {sections.map((section, index) => (
        <section
          key={index}
          className={`wwd-section ${index % 2 === 1 ? "wwd-reverse" : ""}`}
        >
          <div className="wwd-image">
            <img
              src={section.image}
              alt={`${section.title} subsystem`}
              width={480}
              height={360}
              loading="lazy"
            />
          </div>
          <div className="wwd-text">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default WhatWeDo;
