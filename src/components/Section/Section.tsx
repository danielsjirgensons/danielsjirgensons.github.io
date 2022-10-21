/* TODOs: fix if class empty, not show class attr */

import React from "react";
import "./themes.scss";

interface SecProps {
    title?: string;
    smalltext?: string;
    theme?: string; // dark, light, purple, gray
}

class Section extends React.Component<SecProps>{
    constructor(props: any) {
        super(props);

        this.state = {
            title: "",
            smalltext: "",
            theme: ""
        };
    }

    private sectionTheme(): string | undefined {
        switch (this.props.theme) {
            case "dark":
                return "black";
            case "light":
                return "lightgray";
            case "purple":
            case "gray":
                return this.props.theme;
            default:
                return "";
        }
    }

    public render() {
        return(
            <section className={this.sectionTheme()}>
                <div className="container">
                    {this.props.title !== "" ? (
                        <div className="sect-head">
                            {(this.props.title) ? <h2>{this.props.title}</h2> : ""}
                            {(this.props.smalltext) ? <small>{this.props.smalltext}</small> : ""}
                        </div>
                    ) : false}

                    <div className="sect-content">
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
}

export default Section; 