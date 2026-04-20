import type { MetaFunction } from "react-router";
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

export const meta: MetaFunction = () => [
  { title: "Join the Team | UCI CubeSat" },
  {
    name: "description",
    content:
      "Learn how UCI CubeSat recruitment works, what to expect during interviews, and how to apply during the spring cycle.",
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
      "Explore UCI CubeSat recruiting, interviews, and application timing.",
  },
  { property: "og:url", content: "https://ucicubesat.com/join-the-team" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Join the Team | UCI CubeSat" },
  {
    name: "twitter:description",
    content:
      "Explore UCI CubeSat recruiting, interviews, and application timing.",
  },
  {
    name: "twitter:image",
    content: "https://ucicubesat.com/images/og-image.png",
  },
];

const applicationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScURogymH-xZ3b9PGoNMoP-KEpCl9bKLyNhc42XDDvZkd23pQ/viewform";

const timeline = [
  {
    step: "Spring Recruitment Opens",
    timing: "Monday of Week 4",
    description:
      "UCI CubeSat primarily recruits in the spring as the team prepares for the next year's project cycle.",
  },
  {
    step: "Submit an Application",
    timing: "Application Window",
    description:
      "If you're interested, submit the recruiting form and share your background, interests, and preferred technical areas.",
  },
  {
    step: "Interview Round",
    timing: "Weeks 5-10",
    description:
      "Selected applicants are invited to a one-hour interview, focusing on both behavioral and technical questions.",
  },
  {
    step: "Final Decisions",
    timing: "Beginning of Summer",
    description:
      "Final recruiting decisions are released at the beginning of summer so new members can prepare to onboard for next year.",
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
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-earth mb-4 max-sm:text-[11px]">
            Recruiting
          </p>
          <h1 className="font-bold text-[48px] text-primary m-0 mb-3 max-sm:text-[32px]">
            Join the Team
          </h1>
          <p className="text-[15px] text-muted m-0 max-w-[520px] mx-auto">
            UCI CubeSat recruits students who want to contribute to a real
            spacecraft project, grow quickly in a technical team, and help
            build AntSat 01 from concept through flight readiness.
          </p>
        </div>

        <section
          ref={timelineAnimation.ref}
          className={`relative section-glow-earth pt-20 pb-6 animate-on-scroll ${timelineAnimation.isVisible ? "visible" : ""}`}
        >
          <SectionHeader
            eyebrow="Timeline"
            title="What Recruitment Looks Like"
            description="Our recruiting process is intentionally structured so our applicants know what to expect from the first application through final decisions."
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

        <section
          ref={applicationAnimation.ref}
          className={`relative section-glow-earth py-12 animate-on-scroll ${applicationAnimation.isVisible ? "visible" : ""}`}
        >
          <div className="rounded-[28px] border border-starlight bg-[radial-gradient(circle_at_top,rgba(86,204,242,0.12),transparent_40%),linear-gradient(180deg,rgba(12,17,26,0.98),rgba(7,10,15,0.98))] p-8 max-sm:p-6">
            <SectionHeader
              eyebrow="Apply"
              title="Ready to Apply?"
              description="The application is live now. Submit to the google form linked below, and we will follow up with selected applicants for interviews!"
            />
            <div className="mt-8 rounded-[24px] border border-starlight bg-orbital p-6 max-sm:p-5">
              <div className="flex flex-col gap-5 items-start">
                <div>
                  <h3 className="text-[26px] font-semibold text-primary m-0 mb-2 max-sm:text-[22px]">
                    UCI CubeSat Recruitment Form
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-muted m-0 max-w-[720px]">
                    If you are interested in joining, apply as early as you can.
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
