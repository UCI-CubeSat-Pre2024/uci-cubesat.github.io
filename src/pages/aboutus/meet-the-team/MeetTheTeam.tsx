import { useState } from 'react';
import { TeamMakeup } from '../../../components/TeamMakeup/TeamMakeup';

const MeetTheTeam = () => {
  const [activeRole, setActiveRole] = useState("All");

  const teamMembers = [
    {
      name: "Sonia Cruze",
      role: "Executive",
      position: "Project Manager",
      image: "/Headshots/SoniaCruze.jpg",
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
      image: "/Headshots/JustinCabrera.jpg",
    },
    {
      name: "Rohit De",
      role: "Avionics",
      position: "Hardware",
      image: "/Headshots/RohitDe.jpg",
    },
    {
      name: "Mahek Ali",
      role: "Avionics",
      position: "Hardware",
      image: "/Headshots/MahekAli.jpg",
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
      image: "/Headshots/TanviAkula.jpg",
    },
    {
      name: "Urja Vaidya",
      role: "Avionics",
      position: "Software",
      image: "/Headshots/UrjaVaidya.jpg",
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
      image: "/Headshots/HaileyWilliams.jpg",
    },
    {
      name: "Jonathan Lin",
      role: "Communications",
      position: "Subteam Lead",
      image: "/Headshots/JonathanLin.jpg",
    },
    {
      name: "Raiche Gutierrez",
      role: "Communications",
      position: "Hardware",
      image: "/Headshots/RaicheGutierrez.jpg",
    },
    {
      name: "An Bui",
      role: "Communications",
      position: "Hardware",
      image: "/Headshots/AnBui.jpg",
    },
    {
      name: "Ibrahim Hussein",
      role: "Communications",
      position: "Hardware",
      image: "/Headshots/IbrahimHussein.jpg",
    },
    {
      name: "Steven Yu",
      role: "Communications",
      position: "Hardware",
      image: "/Headshots/StevenYu.jpg",
    },
    {
      name: "Bart Backer",
      role: "Communications",
      position: "Hardware",
      image: "/Headshots/BartBacker.jpg",
    },
    {
      name: "Derick Barrientos",
      role: "Communications",
      position: "Software",
      image: "/Headshots/DerickBarrientos.jpg",
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
      image: "/Headshots/JenavieveSteward.jpg",
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
      image: "/Headshots/EricYan.jpg",
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
      image: "/Headshots/AlexIkeda.jpg",
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
      image: "/Headshots/GloriaMcmasterSanchez.jpg",
    },
    {
      name: "Supreya Saxena",
      role: "Structures",
      position: "Engineer",
      image: "/Headshots/SupreyaSaxena.jpg",
    },
    {
      name: "Yuvraj Chera",
      role: "Structures",
      position: "Engineer",
      image: "/Headshots/YuvrajChera.jpg",
    },
    {
      name: "Nora Shah",
      role: "Structures",
      position: "Engineer",
      image: "/Headshots/NoraShah.jpg",
    },
    {
      name: "Joshua Luna",
      role: "Structures",
      position: "Engineer",
      image: "/Headshots/JoshuaLuna.jpg",
    },
    {
      name: "Sarghi Kamboj",
      role: "Structures",
      position: "Engineer",
      image: "/Headshots/SarghiKamboj.jpg",
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
      image: "/Headshots/BraydenWeimholt.jpg",
    },
  ];

  const filteredMembers = activeRole === "All"
    ? teamMembers
    : teamMembers.filter(member => member.role === activeRole);

  return (
    <>
      <div className="flex flex-col items-center w-full py-16 px-6">
        <div className="text-center mb-10">
          <h1 className="font-bold text-[48px] text-primary m-0 max-sm:text-[32px]">
            Meet Our Team.
          </h1>
          <p className="text-base text-muted mt-2.5">
            A driven set of undergraduates backed by industry leaders such as
            Northrop Grumman and General Atomics.
          </p>
        </div>
        <TeamMakeup
          teamMembers={teamMembers}
          activeRole={activeRole}
          onRoleChange={setActiveRole}
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 w-full max-w-[1200px] max-sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] max-sm:gap-6">
          {filteredMembers.map((member, index) => (
            <div className="flex flex-col items-center text-center" key={index}>
              <div className="w-[120px] h-[120px] bg-orbital rounded-full flex justify-center items-center mb-4 overflow-hidden border-2 border-starlight">
                {member.image ? (
                  <img src={member.image} alt={member.name} width={120} height={120} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-[28px] font-medium text-earth tracking-[2px]">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <div className="text-sm">
                <h3 className="my-1 text-sm font-medium text-muted">{member.role}</h3>
                <p className="text-earth my-1 text-[13px] font-medium">{member.position}</p>
                <span className="text-primary font-medium block my-1">{member.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
