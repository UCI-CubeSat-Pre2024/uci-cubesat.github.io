import { useState } from "react";
import type { MetaFunction } from "react-router";
import { TeamMakeup } from "~/components/TeamMakeup/TeamMakeup";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

export const meta: MetaFunction = () => [
  { title: "Meet the Team | UCI CubeSat" },
  {
    name: "description",
    content:
      "Meet the interdisciplinary team of undergraduate engineers at UCI CubeSat building the future of space technology.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://ucicubesat.com/aboutus/meet-the-team",
  },
  { property: "og:title", content: "Meet the Team | UCI CubeSat" },
  {
    property: "og:description",
    content:
      "Meet the interdisciplinary team of undergraduate engineers at UCI CubeSat.",
  },
  {
    property: "og:url",
    content: "https://ucicubesat.com/aboutus/meet-the-team",
  },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Meet the Team | UCI CubeSat" },
  {
    name: "twitter:description",
    content:
      "Meet the interdisciplinary team of undergraduate engineers at UCI CubeSat.",
  },
  {
    name: "twitter:image",
    content: "https://ucicubesat.com/images/og-image.png",
  },
];

const teamMembers = [
  {
    name: "Sonia Cruze",
    role: "Executive",
    position: "Project Manager",
    image: "/Headshots/SoniaCruze.webp",
  },
  {
    name: "Byren Cheema",
    role: "Advisory",
    position: "Webmaster",
    image: "",
  },
  {
    name: "Cosmo Daniels",
    role: "Avionics",
    position: "Hardware Lead, Software Lead",
    image: "",
  },
  {
    name: "Enzo Li",
    role: "Avionics",
    position: "Hardware",
    image: "",
  },
  {
    name: "Justin Cabrera",
    role: "Avionics",
    position: "Hardware",
    image: "/Headshots/JustinCabrera.webp",
  },
  {
    name: "Rohit De",
    role: "Avionics",
    position: "Hardware",
    image: "/Headshots/RohitDe.webp",
  },
  {
    name: "Mahek Ali",
    role: "Avionics",
    position: "Hardware",
    image: "/Headshots/MahekAli.webp",
  },
  {
    name: "Phyo Pyae Moe Aung",
    role: "Avionics",
    position: "Software",
    image: "",
  },
  {
    name: "Tanvi Akula",
    role: "Avionics",
    position: "Software",
    image: "/Headshots/TanviAkula.webp",
  },
  {
    name: "Urja Vaidya",
    role: "Avionics",
    position: "Software",
    image: "/Headshots/UrjaVaidya.webp",
  },
  {
    name: "Emmanuel Bivian",
    role: "Avionics",
    position: "Software",
    image: "",
  },
  {
    name: "Hailey Williams",
    role: "Avionics",
    position: "Software",
    image: "/Headshots/HaileyWilliams.webp",
  },
  {
    name: "Jonathan Lin",
    role: "Communications",
    position: "Subteam Lead",
    image: "/Headshots/JonathanLin.webp",
  },
  {
    name: "Raiche Gutierrez",
    role: "Communications",
    position: "Hardware",
    image: "/Headshots/RaicheGutierrez.webp",
  },
  {
    name: "An Bui",
    role: "Communications",
    position: "Hardware",
    image: "/Headshots/AnBui.webp",
  },
  {
    name: "Ibrahim Hussein",
    role: "Communications",
    position: "Hardware",
    image: "/Headshots/IbrahimHussein.webp",
  },
  {
    name: "Steven Yu",
    role: "Communications",
    position: "Hardware",
    image: "/Headshots/StevenYu.webp",
  },
  {
    name: "Bart Backer",
    role: "Communications",
    position: "Hardware",
    image: "/Headshots/BartBacker.webp",
  },
  {
    name: "Derick Barrientos",
    role: "Communications",
    position: "Software",
    image: "/Headshots/DerickBarrientos.webp",
  },
  {
    name: "Alejandro Gomez",
    role: "Communications",
    position: "Software",
    image: "",
  },
  {
    name: "Jenavieve Steward",
    role: "Power",
    position: "Subteam Lead",
    image: "/Headshots/JenavieveSteward.webp",
  },
  {
    name: "Akam Khinda",
    role: "Power",
    position: "Hardware",
    image: "",
  },
  {
    name: "Eric Yan",
    role: "Power",
    position: "Hardware",
    image: "/Headshots/EricYan.webp",
  },
  {
    name: "Andy Li",
    role: "Power",
    position: "Hardware",
    image: "",
  },
  {
    name: "Alex Ikeda",
    role: "Power",
    position: "Engineer, Hardware",
    image: "/Headshots/AlexIkeda.webp",
  },
  {
    name: "Sijia Zhang",
    role: "Power",
    position: "Engineer",
    image: "",
  },
  {
    name: "Nathan Kwock",
    role: "Power",
    position: "Software",
    image: "",
  },
  {
    name: "Sofia Fowler",
    role: "Power",
    position: "Engineer, Software",
    image: "",
  },
  {
    name: "Gloria McMaster-Sanchez",
    role: "Structures",
    position: "Subteam Lead",
    image: "/Headshots/GloriaMcmasterSanchez.webp",
  },
  {
    name: "Supreya Saxena",
    role: "Structures",
    position: "Engineer",
    image: "/Headshots/SupreyaSaxena.webp",
  },
  {
    name: "Yuvraj Chera",
    role: "Structures",
    position: "Engineer",
    image: "/Headshots/YuvrajChera.webp",
  },
  {
    name: "Nora Shah",
    role: "Structures",
    position: "Engineer",
    image: "/Headshots/NoraShah.webp",
  },
  {
    name: "Joshua Luna",
    role: "Structures",
    position: "Engineer",
    image: "/Headshots/JoshuaLuna.webp",
  },
  {
    name: "Sarghi Kamboj",
    role: "Structures",
    position: "Engineer",
    image: "/Headshots/SarghiKamboj.webp",
  },
  {
    name: "Xavier Marciano",
    role: "Systems",
    position: "Subteam Lead, Integration and Design",
    image: "",
  },
  {
    name: "Briant Fernandez",
    role: "Systems",
    position: "Engineer",
    image: "",
  },
  {
    name: "Katie Lien",
    role: "Systems",
    position: "Integration and Design",
    image: "",
  },
  {
    name: "Brayden Weimholt",
    role: "Systems",
    position: "Software",
    image: "/Headshots/BraydenWeimholt.webp",
  },
];

export default function MeetTheTeam() {
  const [activeRole, setActiveRole] = useState("All");
  const headerAnimation = useScrollAnimation<HTMLDivElement>();
  const gridAnimation = useScrollAnimation<HTMLDivElement>();

  const filteredMembers =
    activeRole === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.role === activeRole);

  return (
    <div className="flex flex-col items-center w-full px-6">
      <div
        ref={headerAnimation.ref}
        className={`pt-32 pb-10 text-center animate-on-scroll ${headerAnimation.isVisible ? "visible" : ""}`}
      >
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-earth mb-4 max-sm:text-[11px]">
          Our People
        </p>
        <h1 className="font-bold text-[48px] text-primary m-0 mb-3 max-sm:text-[32px]">
          Meet Our Team.
        </h1>
        <p className="text-[15px] text-muted max-w-[480px] mx-auto">
          An interdisciplinary group of undergraduate engineers building the
          future of space technology.
        </p>
      </div>
      <TeamMakeup
        teamMembers={teamMembers}
        activeRole={activeRole}
        onRoleChange={setActiveRole}
      />
      <div
        ref={gridAnimation.ref}
        className={`relative section-glow-earth pb-16 animate-on-scroll ${gridAnimation.isVisible ? "visible" : ""}`}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 w-full max-w-[1200px] max-sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] max-sm:gap-6">
          {filteredMembers.map((member, index) => (
            <div
              className="flex flex-col items-center text-center"
              key={index}
            >
              <div className="w-[120px] h-[120px] bg-orbital rounded-full flex justify-center items-center mb-4 overflow-hidden border-2 border-starlight">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-[28px] font-medium text-earth tracking-[2px]">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}
              </div>
              <div className="text-sm">
                <h3 className="my-1 text-sm font-medium text-muted">
                  {member.role}
                </h3>
                <p className="text-earth my-1 text-[13px] font-medium">
                  {member.position}
                </p>
                <span className="text-primary font-medium block my-1">
                  {member.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
