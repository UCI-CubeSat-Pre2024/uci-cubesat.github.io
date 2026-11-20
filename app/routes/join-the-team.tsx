import type { MetaFunction } from "react-router";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

export const meta: MetaFunction = () => [
  { title: "Join the Team | UCI CubeSat" },
  {
    name: "description",
    content:
      "Apply for UCI CubeSat's Winter 2027 recruitment cycle in Avionics Software, Structures, Systems, or Operations by December 20, 2026.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://ucicubesat.com/join-the-team",
  },
  { property: "og:title", content: "Join the Team | UCI CubeSat" },
  {
    property: "og:description",
    content:
      "Winter 2027 applications for Avionics Software, Structures, Systems, and Operations are open through December 20, 2026.",
  },
  { property: "og:url", content: "https://ucicubesat.com/join-the-team" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Join the Team | UCI CubeSat" },
  {
    name: "twitter:description",
    content:
      "Winter 2027 applications for Avionics Software, Structures, Systems, and Operations are open through December 20, 2026.",
  },
  {
    name: "twitter:image",
    content: "https://ucicubesat.com/images/og-image.png",
  },
];

const applicationFormUrl = "https://forms.gle/TTBbzQ9cZM2Jbwhs8";
const recruitmentPacketUrl = "/UCI-CubeSat-Winter-2027-Recruitment-Info.pdf";
const recruitmentPacketPages = [2, 3, 4, 6];

const openTeams = [
  {
    name: "Avionics Software",
    description:
      "Develop and test flight software for AntSat 01, including embedded hardware interfaces, sensors, and system validation.",
  },
  {
    name: "Structures",
    description:
      "Design, analyze, manufacture, and assemble the satellite's physical structure.",
  },
  {
    name: "Systems",
    description:
      "Connect the subsystems through requirements, integration and testing, budgets, and risk analysis.",
  },
  {
    name: "Operations",
    description:
      "Support the program through sponsorships, outreach, design, recruitment materials, and internal organization.",
  },
];

const timeline = [
  {
    step: "Applications Open",
    timing: "Now",
    description:
      "Explore the open teams and their work in the recruitment packet, then choose the area that interests you.",
  },
  {
    step: "Submit an Application",
    timing: "Through December 20, 2026",
    description:
      "Submit the application form by December 20 to be considered for this winter cycle.",
  },
  {
    step: "Recruitment & Interviews",
    timing: "Winter break",
    description:
      "We will review applications and follow up with selected applicants during winter break.",
  },
  {
    step: "Join the Team",
    timing: "Beginning of winter quarter",
    description:
      "We are targeting the beginning of winter quarter for new members to start.",
  },
];

const interviewAreas = [
  "Behavioral questions focused on teamwork, ownership, and communication.",
  "Technical questions tailored to your interests, experience, and problem-solving approach.",
  "A chance to explain projects, coursework, or hands-on work that shows how you think.",
];

const whatWeValue = [
  "Curiosity and a willingness to learn quickly in a team setting.",
  "Follow-through on difficult work, even when the answer is not obvious yet.",
  "Interest in contributing to a real satellite project across hardware, software, and systems work.",
  "Dedication to collaboration and integrity on a rigorous team."
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <p className="text-xs font-medium tracking-[0.15em] uppercase text-earth mb-4 max-sm:text-[11px]">
        {eyebrow}
      </p>
      <h2 className="font-semibold text-[40px] text-primary m-0 mb-4 max-sm:text-[30px]">
        {title}
      </h2>
      <p className="text-[15px] leading-[1.7] text-muted m-0 max-w-[620px]">
        {description}
      </p>
    </>
  );
}

export default function JoinTheTeam() {
  const headerAnimation = useScrollAnimation<HTMLDivElement>();
  const timelineAnimation = useScrollAnimation<HTMLDivElement>();
  const interviewAnimation = useScrollAnimation<HTMLElement>();
  const applicationAnimation = useScrollAnimation<HTMLElement>();

  return (
    <div className="flex flex-col items-center w-full px-6 max-sm:px-5">
      <div className="w-full max-w-[1200px]">
        <div
          ref={headerAnimation.ref}
          className={`pt-32 pb-4 text-center animate-on-scroll ${headerAnimation.isVisible ? "visible" : ""}`}
        >
          <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-earth/50 bg-earth/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-atmosphere">
            <span className="h-2 w-2 rounded-full bg-atmosphere" aria-hidden="true" />
            Recruiting Now
          </p>
          <h1 className="mx-auto mb-4 max-w-[850px] text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.12] text-primary">
            Winter 2027 Applications Are Open
          </h1>
          <p className="mx-auto mb-6 max-w-[650px] text-[17px] leading-[1.6] text-muted max-sm:text-[15px]">
            Join Avionics Software, Structures, Systems, or Operations and help
            move AntSat 01 toward flight readiness.
          </p>
          <p className="mb-6 text-base font-semibold text-primary">
            Apply by December 20, 2026
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={applicationFormUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-earth px-8 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(47,128,237,0.28)] transition-colors hover:bg-[#2570d4] max-sm:w-full"
            >
              Apply Now →
            </a>
            <a
              href="#open-teams"
              className="inline-flex min-h-[56px] items-center justify-center rounded-xl border border-starlight px-7 py-3 text-base font-medium text-primary transition-colors hover:border-earth max-sm:w-full"
            >
              Explore Open Teams
            </a>
          </div>
        </div>

        <section
          ref={timelineAnimation.ref}
          className={`relative section-glow-earth pt-20 pb-6 animate-on-scroll ${timelineAnimation.isVisible ? "visible" : ""}`}
        >
          <SectionHeader
            eyebrow="Timeline"
            title="What Recruitment Looks Like"
            description="Applications are open through December 20, 2026. We will recruit over winter break and aim for new members to start at the beginning of winter quarter."
          />
          <div className="grid grid-cols-2 gap-5 mt-10 max-sm:grid-cols-1">
            {timeline.map((item, index) => (
              <div
                key={item.step}
                className={`rounded-2xl border border-starlight bg-orbital px-6 py-6 animate-on-scroll animate-delay-${Math.min(index + 1, 5)} ${timelineAnimation.isVisible ? "visible" : ""}`}
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] uppercase tracking-[0.12em] text-dust">
                    Step {index + 1}
                  </span>
                  <span className="text-sm font-medium text-earth">
                    {item.timing}
                  </span>
                </div>
                <h3 className="text-[22px] font-semibold text-primary m-0 mb-3">
                  {item.step}
                </h3>
                <p className="text-[15px] leading-[1.7] text-muted m-0">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="open-teams" className="relative section-glow-atmosphere py-12">
          <SectionHeader
            eyebrow="Open Teams"
            title="Find Your Place"
            description="This winter cycle is accepting applications for these four teams. Read the packet below for the full role descriptions and qualifications."
          />
          <div className="grid grid-cols-2 gap-5 mt-10 max-md:grid-cols-1">
            {openTeams.map((team) => (
              <div
                key={team.name}
                className="rounded-2xl border border-starlight bg-orbital px-6 py-6"
              >
                <h3 className="text-[22px] font-semibold text-primary m-0 mb-3">
                  {team.name}
                </h3>
                <p className="text-[15px] leading-[1.7] text-muted m-0">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative section-glow-earth py-12">
          <SectionHeader
            eyebrow="Recruitment Packet"
            title="Explore the Roles"
            description="Read the Winter 2027 recruitment packet for each team's responsibilities, recommended majors, and skills."
          />
          <div
            className="mt-8 max-h-[720px] overflow-y-auto overscroll-contain rounded-[24px] border border-starlight bg-[#e8e9eb] p-4 max-sm:max-h-[520px] max-sm:p-2"
            role="region"
            aria-label="Scrollable Winter 2027 recruitment packet"
            tabIndex={0}
          >
            <div className="mx-auto flex max-w-[800px] flex-col gap-4 max-sm:gap-2">
              {recruitmentPacketPages.map((page) => (
                <img
                  key={page}
                  src={`/recruitment/winter-2027/page-${page}.webp`}
                  alt={`Winter 2027 recruitment packet, page ${page}`}
                  className="block h-auto w-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)]"
                  loading="lazy"
                  width={1020}
                  height={1320}
                />
              ))}
            </div>
          </div>
          <a
            href={recruitmentPacketUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-5 text-[15px] font-medium text-earth transition-colors hover:text-atmosphere"
          >
            Open or download the recruitment packet →
          </a>
        </section>

        <section
          ref={applicationAnimation.ref}
          className={`relative section-glow-earth py-12 animate-on-scroll ${applicationAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="rounded-[28px] border border-starlight bg-[radial-gradient(circle_at_top,rgba(86,204,242,0.12),transparent_40%),linear-gradient(180deg,rgba(12,17,26,0.98),rgba(7,10,15,0.98))] p-8 max-sm:p-6">
            <SectionHeader
              eyebrow="Apply"
              title="Ready to Apply?"
              description="Submit the Winter 2027 application by December 20, 2026. We will follow up with selected applicants during winter break."
            />
            <div className="mt-8 rounded-[24px] border border-starlight bg-orbital p-6 max-sm:p-5">
              <div className="flex flex-col gap-5 items-start">
                <div>
                  <h3 className="text-[26px] font-semibold text-primary m-0 mb-2 max-sm:text-[22px]">
                    UCI CubeSat Recruitment Form
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-muted m-0 max-w-[720px]">
                    Apply for Avionics Software, Structures, Systems, or Operations by December 20, 2026.
                  </p>
                </div>
                <a
                  href={applicationFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[60px] items-center justify-center rounded-2xl bg-earth px-8 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(47,128,237,0.28)] transition-all hover:-translate-y-[1px] hover:bg-[#2570d4] hover:shadow-[0_16px_36px_rgba(47,128,237,0.34)] max-sm:w-full"
                >
                  Open the Application Form
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={interviewAnimation.ref}
          className={`relative section-glow-atmosphere grid grid-cols-[1.2fr_0.8fr] gap-8 py-16 pb-20 max-sm:grid-cols-1 animate-on-scroll ${interviewAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="rounded-[24px] border border-starlight bg-orbital px-7 py-7">
            <SectionHeader
              eyebrow="Interviews"
              title="What We Focus On During Interviews"
              description="Interviews are about more than one skill set; we want to understand how you work, how you solve problems, and where you can grow on our team."
            />
            <div className="mt-8 flex flex-col gap-4">
              {interviewAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-starlight/80 bg-deep-space/60 px-5 py-4"
                >
                  <p className="text-[15px] leading-[1.7] text-muted m-0">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] border border-starlight bg-orbital px-7 py-7">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-earth mb-4 max-sm:text-[11px]">
              What We Value
            </p>
            <div className="flex flex-col gap-4">
              {whatWeValue.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-starlight/80 bg-deep-space/60 px-5 py-4"
                >
                  <p className="text-[15px] leading-[1.7] text-muted m-0">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
