import React, { Component } from 'react';
// import Footer from '../../parts/Footer/Footer';
// import Navigation from '../../parts/Navigation/Navigation';
import WorkList from './parts/WorkList';

export interface IPortfolioProps {
}

class Portfolio extends Component<IPortfolioProps> {
    public render() {
        return (
            <React.Fragment>
                <WorkList />
            </React.Fragment>
        );
    }
}

export default Portfolio;