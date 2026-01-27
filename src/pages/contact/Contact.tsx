import './Contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-info-box">
                <h1 className="contact-heading">Let's Connect</h1>
                <div className="contacts">
                    <div className="contact-card">
                        <span className="contact-label">Project Manager</span>
                        <span className="contact-name">Sonia Cruze</span>
                        <a href="mailto:scruze@uci.edu">scruze@uci.edu</a>
                    </div>
                    <div className="contact-card">
                        <span className="contact-label">Advisor</span>
                        <span className="contact-name">Professor David Copp</span>
                        <a href="mailto:dcopp@uci.edu">dcopp@uci.edu</a>
                    </div>
                    <div className="contact-card">
                        <span className="contact-label">Team Email</span>
                        <a href="mailto:team.ucicubesat@gmail.com">team.ucicubesat@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
