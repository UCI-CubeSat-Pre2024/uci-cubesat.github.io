export default function Contact() {
    return (
        <div className="flex justify-center items-center w-full min-h-[60vh] py-20 px-6 max-sm:py-12 max-sm:px-5">
            <div className="flex flex-col items-center text-center w-full max-w-[560px]">
                <h1 className="font-semibold text-[48px] text-primary m-0 mb-12 max-sm:text-[32px] max-sm:mb-8">
                    Let's Connect
                </h1>
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-1 py-6 px-7 bg-orbital border border-starlight rounded-xl text-left max-sm:py-5 max-sm:px-[22px]">
                        <span className="text-[11px] font-medium uppercase tracking-[1px] text-dust">Project Manager</span>
                        <span className="text-base font-medium text-primary">Sonia Cruze</span>
                        <a href="mailto:scruze@uci.edu" className="text-sm font-medium text-earth mt-0.5 hover:text-atmosphere transition-colors">scruze@uci.edu</a>
                    </div>
                    <div className="flex flex-col gap-1 py-6 px-7 bg-orbital border border-starlight rounded-xl text-left max-sm:py-5 max-sm:px-[22px]">
                        <span className="text-[11px] font-medium uppercase tracking-[1px] text-dust">Advisor</span>
                        <span className="text-base font-medium text-primary">Professor David Copp</span>
                        <a href="mailto:dcopp@uci.edu" className="text-sm font-medium text-earth mt-0.5 hover:text-atmosphere transition-colors">dcopp@uci.edu</a>
                    </div>
                    <div className="flex flex-col gap-1 py-6 px-7 bg-orbital border border-starlight rounded-xl text-left max-sm:py-5 max-sm:px-[22px]">
                        <span className="text-[11px] font-medium uppercase tracking-[1px] text-dust">Team Email</span>
                        <a href="mailto:team.ucicubesat@gmail.com" className="text-sm font-medium text-earth mt-0.5 hover:text-atmosphere transition-colors">team.ucicubesat@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
