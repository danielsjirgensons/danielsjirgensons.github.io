import { Component, ReactNode } from "react";
import { TagCloud } from 'react-tagcloud'
import Section from "../../../components/Section/Section";
// import Button from "../../../components/Button/Button";

const AboutTagCloud = () => {
    const data = [
        { value: 'HTML', count: 90, color: "#e34c26" },
        { value: 'CSS', count: 90, color: "#264de4" },
        { value: 'WordPress', count: 70, color: "#00749C" },
        { value: 'PHP', count: 70, color: "#8993be" },
        { value: 'JavaScript', count: 60, color: "#F0DB4F" },
        { value: 'jQuery', count: 60, color: "#0868AC" },
        { value: 'Bootstrap', count: 60, color: "#9013fe" },
        { value: 'Jekyll', count: 50, color: "#fc0" },
        { value: 'SCSS', count: 50, color: "#CD6799" },
        { value: 'React', count: 40, color: "#61DBFB" },  
        { value: 'Angular', count: 5, color: "#B52E31" },
        { value: 'PhpMyAdmin', count: 30, color: "#6C78AF" },
        { value: 'CI/CD', count: 20 },
        { value: 'Vue', count: 10, color: "#41B883" },
    ];
    const colors = {luminosity: 'light'};

    return(
        <TagCloud
            minSize={15}
            maxSize={48}
            tags={data}
            colorOptions={colors}
            className="tech-tags"
        />
    )
};

class About extends Component{
    render(): ReactNode {
        return (
            <Section theme="dark" title="About me">
                <div className="about-content">
                    <div className="row">
                        <div className="col-12 col-lg-7 col-xxl-6">
                            <div className="about-text">
                                <p>Website developer with more that 10 year experience. Also giving Front-End lectures for new programmers. And Freelancing more than 7 years with my own company. From 2016 started my professional career, developing websites, applications and design as well.</p>

                                <p>Most of time Im Front-End Developer, but in some cases also Full-Stack. Mostly developing WordPress pages with PHP, but also start to practicing React.</p>

                                <p>In career I used different technologies - HTML5, CSS3/SCSS, PHP, JavaScript, JQuery, Bootstrap 4, Wordpress, WooCommerce, Advanced Custom Fields (ACF), Yoast etc. I have basic knowledge about ReactJS, VueJS & AngularJS - I can join these type of projects. On top of that, I can create some designs as well - Web designs, logos, business cards etc.</p>

                                {/* <Button theme="primary" type="button">Contact me</Button> */}
                            </div>
                        </div>

                        <div className="col-12 col-lg-5 col-xxl-5 offset-xxl-1">
                            <AboutTagCloud />
                        </div>
                    </div>
                </div>                
            </Section>
        );
    }
}

export default About;