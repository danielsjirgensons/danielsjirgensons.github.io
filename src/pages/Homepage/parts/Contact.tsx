import { Component, ReactNode } from "react";
import Section from "../../../components/Section/Section";
import site from "../../../config";
import SocialButtons from "../../../parts/SocialButtons/SocialButtons";

class Contact extends Component{
    render(): ReactNode {
        return (
            <Section theme="gray" title="Contact">
                <div className="contact-section">
                    <div className="contact-block">
                        <div className="socials">
                            <h4>Social networks</h4>
                            <SocialButtons />
                        </div>

                        <div className="contact">
                            <a href={"mailto:" + site.email}>{site.email}</a>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}

export default Contact;