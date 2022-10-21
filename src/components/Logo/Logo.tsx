import React from "react";
import site from "../../config";
import "./Logo.scss";

interface LogoProps{
    theme?: string;
}

class Logo extends React.Component<LogoProps>{
    constructor(props: any){
        super(props);

        this.state = {
            theme: "global-logo"
        };
    }

    render() {
        return(
            <div className={!!(this.props.theme)? "global-logo " + this.props.theme : "global-logo"} >
                {site.title}
            </div>
        )
    }
}

export default Logo; 