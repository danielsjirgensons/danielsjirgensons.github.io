/* TODOs: fix if class empty, not show class attr */

import React from "react";

interface BtnProps{
    type: string;  // button, link 
    theme?: string; // primary, outline
    url?: string;
    class?: string; // TODO: create addable classes
    target?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    // TODO: atributes for download 
}

class Button extends React.Component<BtnProps>{
    constructor(props: any){
        super(props);

        this.state = {
            type: "button",
            theme: "",
            url: "#",
            target: ""
        };
    }

    render() {
        const btn = this.props;

        if(btn.type === "button"){
            return(
                <button 
                  className={this.buttonClass()}
                  onClick={this.props.onClick}
                  >
                    {btn.children}
                </button>
            )
        }else if(btn.type === "link"){
            return(
                <a 
                  href={btn.url}
                  className={"button " + this.buttonClass()}
                  target={this.props.target !== "" ? this.props.target : ""}
                  >
                    {btn.children}
                </a>
            )
        }

        return null;
    }

    private buttonClass() : string | undefined {
        switch(this.props.theme){
            case "primary":
                return "primary";
            case "outline":
                return "outline";
            default:
                return "";
        }
    }
}

export default Button; 