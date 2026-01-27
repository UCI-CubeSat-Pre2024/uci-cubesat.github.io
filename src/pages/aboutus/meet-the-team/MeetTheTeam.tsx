import { useState } from 'react';
import { TeamMakeup } from '../../../components/TeamMakeup/TeamMakeup';
import './MeetTheTeam.css';

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
      <div className="our-mission-container">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            At UCI CubeSat, we are developing, testing, and launching Ant01, a
            2U CubeSat, into Low Earth Orbit (LEO) to conduct groundbreaking
            research. Our mission focuses on testing the Variable Emissivity
            Device (VED), a cutting-edge technology for cost-effective
            spacecraft thermal regulation.
          </p>
          <p>
            By evaluating Ant01's performance in orbit, we gather critical data
            that will drive future innovations in microsatellite design and
            performance.
          </p>
        </div>
        <div className="mission-image">
          <img src="/photos/Mission.png" alt="UCI CubeSat mission" width={480} height={480} loading="lazy" />
        </div>
      </div>
      <div className="meet-the-team-container">
        <div className="header">
          <h1>
            Meet Our Team.
          </h1>
          <p>
            A driven set of undergraduates backed by industry leaders such as
            Northrop Grumman and General Atomics.
          </p>
        </div>
        <TeamMakeup
          teamMembers={teamMembers}
          activeRole={activeRole}
          onRoleChange={setActiveRole}
        />
        <div className="team-grid">
          {filteredMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="member-photo">
                {member.image ? (
                  <img src={member.image} alt={member.name} width={120} height={120} loading="lazy" />
                ) : (
                  <div className="initials-placeholder">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <div className="member-info">
                <h3>{member.role}</h3>
                <p className="position">{member.position}</p>
                <span className="member-name">{member.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam; 
