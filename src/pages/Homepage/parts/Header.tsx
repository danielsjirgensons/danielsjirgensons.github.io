import { Component, ReactNode } from "react";
// import Button from "../../../components/Button/Button";
import SocialButtons from "../../../parts/SocialButtons/SocialButtons";

class Header extends Component{
    render(): ReactNode {
        return (
            <div className="home-header">
                <div className="container">
                    <div className="head-content">
                        <div className="head-title">
                            <p>I am Daniels Jirgensons</p>
                            <div className="heading">
                                <h1>Full-Stack</h1>
                                <h2>Developer</h2>
                            </div>
                        </div>

                        <SocialButtons />

                        {/* <Button type="button" theme="primary">Contact me</Button> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;