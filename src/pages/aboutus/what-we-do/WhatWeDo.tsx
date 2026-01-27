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
    <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto py-20 px-6 gap-[72px] max-sm:py-12 max-sm:px-5 max-sm:gap-12">
      <header className="text-center">
        <h1 className="font-bold text-[48px] text-primary m-0 mb-3 max-sm:text-[32px]">What We Do</h1>
        <p className="text-base text-muted m-0">Our satellite is built across four core engineering subsystems.</p>
      </header>
      {sections.map((section, index) => (
        <section
          key={index}
          className={`flex items-center gap-12 w-full max-sm:flex-col max-sm:gap-6 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
        >
          <div className="flex-[0_0_45%] max-sm:flex-none max-sm:w-full">
            <img
              src={section.image}
              alt={`${section.title} subsystem`}
              width={480}
              height={360}
              loading="lazy"
              className="w-full h-auto block rounded-lg border border-starlight"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-[28px] text-primary m-0 mb-4 max-sm:text-2xl">{section.title}</h2>
            <p className="text-[15px] leading-[1.7] text-muted m-0 max-sm:text-sm">{section.description}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default WhatWeDo;
