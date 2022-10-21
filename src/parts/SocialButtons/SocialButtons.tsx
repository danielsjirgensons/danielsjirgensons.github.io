import { Component } from "react";
import site from "../../config";
import "./SocialButtons.scss";

class SocialButtons extends Component {
    render(){
        const socials = site.socials;

        return(
            <div className="social-buttons">
                {Object.entries(socials).map(([key, value]) => (
                    Object.entries(value).map(([name, value]) => (
                        <a href={value} className={"btn " + name} target="_blank" rel="noreferrer" key={key}>
                            <i className={"fab fa-" + name}></i>
                            <span>{name}</span>
                        </a>
                    ))
                ))}
            </div>
        )
    }
}

export default SocialButtons;