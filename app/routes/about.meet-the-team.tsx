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

function HeadshotAvatar({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  const [hasImageError, setHasImageError] = useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="w-[120px] h-[120px] bg-orbital rounded-full flex justify-center items-center mb-4 overflow-hidden border-2 border-starlight">
      {image && !hasImageError ? (
        <img
          src={image}
          alt={name}
          width={120}
          height={120}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <div className="text-[28px] font-medium text-earth tracking-[2px]">
          {initials}
        </div>
      )}
    </div>
  );
}


const teamMembers = [
  // PROJECT MANAGERS
  {
    name: "Sonia Cruze",
    role: "Executive",
    position: "Project Manager",
    image: "",
  },
  {
    name: "Katie Lien",
    role: "Executive",
    position: "Project Manager",
    image: "",
  },

  // AVIONICS HARDWARE
  {
    name: "Mahek Ali",
    role: "Avionics",
    position: "Subteam Lead",
    image: "",
  },
  {
    name: "Peter Hay",
    role: "Avionics",
    position: "Hardware",
    image: "",
  },
  {
    name: "Varaprasad Nibhanupudi",
    role: "Avionics",
    position: "Hardware",
    image: "",
  },
  {
    name: "Jeremiah Velasco",
    role: "Avionics",
    position: "Hardware",
    image: "",
  },
  {
    name: "Rohit De",
    role: "Avionics",
    position: "Hardware",
    image: "",
  },

  // AVIONICS SOFTWARE
  {
    name: "Derick Barrientos",
    role: "Avionics",
    position: "Subteam Lead",
    image: "",
  },
  {
    name: "Jake Yunker",
    role: "Avionics",
    position: "Software",
    image: "",
  },
  {
    name: "Felicia Yin",
    role: "Avionics",
    position: "Software",
    image: "",
  },
  {
    name: "Akilan Paramasivan",
    role: "Avionics",
    position: "Software",
    image: "",
  },

  // COMMUNICATIONS
  {
    name: "Jonathan Lin",
    role: "Communications",
    position: "Subteam Lead",
    image: "",
  },
  {
    name: "Claire Nguyen",
    role: "Communications",
    position: "Member",
    image: "",
  },
  {
    name: "Bart Backer",
    role: "Communications",
    position: "Member",
    image: "",
  },
  {
    name: "Charlie Conley",
    role: "Communications",
    position: "Member",
    image: "",
  },
  {
    name: "Samuel Zubin",
    role: "Communications",
    position: "Member",
    image: "",
  },
  {
    name: "Marvin Nguyen",
    role: "Communications",
    position: "Member",
    image: "",
  },
  {
    name: "Shining Shuai",
    role: "Communications",
    position: "Member",
    image: "",
  },
  {
    name: "Steven Yu",
    role: "Communications",
    position: "Member",
    image: "",
  },

  // POWER
  {
    name: "Ibrahim Hussein",
    role: "Power",
    position: "Subteam Co-Lead",
    image: "",
  },
  {
    name: "Akam Khinda",
    role: "Power",
    position: "Subteam Co-Lead",
    image: "",
  },
  {
    name: "Thea Tan",
    role: "Power",
    position: "Member",
    image: "",
  },
  {
    name: "Hailey Williams",
    role: "Power",
    position: "Member",
    image: "",
  },
  {
    name: "Jaideep Pannu",
    role: "Power",
    position: "Member",
    image: "",
  },

  // STRUCTURES
  {
    name: "Gloria McMaster-Sanchez",
    role: "Structures",
    position: "Subteam Lead",
    image: "",
  },
  {
    name: "Josh Luna",
    role: "Structures",
    position: "Member",
    image: "",
  },
  {
    name: "Sarghi Kamboj",
    role: "Structures",
    position: "Member",
    image: "",
  },
  {
    name: "Yuvraj Chera",
    role: "Structures",
    position: "Member",
    image: "",
  },
  {
    name: "Nathan Dorado",
    role: "Structures",
    position: "Member",
    image: "",
  },

  // SYSTEMS
  {
    name: "Brayden Weimholt",
    role: "Systems",
    position: "Subteam Lead",
    image: "",
  },
  {
    name: "Samantha French",
    role: "Systems",
    position: "Member",
    image: "",
  },
  {
    name: "Krish Patel",
    role: "Systems",
    position: "Member",
    image: "",
  },
  {
    name: "Alex Amadeo-Ranch",
    role: "Systems",
    position: "Member",
    image: "",
  },
  {
    name: "Kaden Raufdeen",
    role: "Systems",
    position: "Member",
    image: "",
  },

  // OPERATIONS
  {
    name: "Hailey Williams",
    role: "Operations",
    position: "Subteam Lead",
    image: "",
  },
  {
    name: "Evelyn Garcia",
    role: "Operations",
    position: "Member",
    image: "",
  },
  {
    name: "Tanvi Akula",
    role: "Operations",
    position: "Member",
    image: "",
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
              <HeadshotAvatar name={member.name} image={member.image} />
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
