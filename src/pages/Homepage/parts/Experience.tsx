import { Component } from "react";
import Modal from "../../../components/Modal/Modal";
import Section from "../../../components/Section/Section";
// import Button from "../../../components/Button/Button";
import experience from "../../../data/experience.json";

interface experienceProps {
    showModal?: false;
}

class Experience extends Component<experienceProps, any>{
    private workData: any = {};
    // static defaultProps: 

    constructor(props: experienceProps) {
        super(props);

        this.state = {
            showModal: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(data: any) {
        this.workData = data;
        this.setState({
            showModal: !this.state.showModal
        });
    }

    getModal() {
        if (this.state.showModal) {
            let work = this.workData;
            let techs = this.workData.tech;

            return (
                <Modal title={work.position} onClose={() => this.onClose()}>
                    <div className="work-info">
                        {/* <label>{work.position}</label> */}
                        <h5>{work.business}</h5>
                        <time>{work.date}</time>

                        <div className="work-tech">
                            {techs.map((tech: string, key: number) => (
                                <li key={key}><i className={"fab fa-" + tech}></i></li>
                            ))}
                        </div>
                    </div>
                </Modal>
            );
        } else {
            return null;
        }
    }

    onClose() { 
        this.workData = {};
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        return (
            <Section theme="purple" title="Experience">
                {/* TODO: rebuild design with years of work + techs */}
                <div className="experience-content">
                    <div className="exp-list">
                        <div className="start">
                            <div className="today">Today</div>
                            <hr />
                        </div>

                        {experience.map((work, key) => (
                            <div key={key} className="exp-wrapper" onClick={() => this.handleClick(work)}>
                                <div className="exp-block">
                                    <h5>{work.business}</h5>
                                    <time>{work.date}</time>
                                    <label>{work.position}</label>
                                </div>
                            </div>
                        ))}
                    </div>
                    {this.getModal()}

                    {/* <div className="exp-button">
                        <Button 
                          type="link"
                          theme="outline"
                          url="https://prof-designs.lv">Download CV</Button>
                    </div> */}
                </div>
            </Section>
        );
    }
}

export default Experience;