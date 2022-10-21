import { Component } from 'react';
import Logo from '../../components/Logo/Logo';
// import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-row">
            <a href="/"><Logo /></a>

            {/* TODO: create nav links  */}
            {/* <a href="/portfolio">Portfolio</a> */}
            {/* <div className="menu-toggle">
            	<svg xmlns="http://www.w3.org/2000/svg" width="20.55" height="13">
								<path d="M0 0h20.55v1.68H0zM0 5.87h20.55v1.68H0zM0 11.32h20.55V13H0z"/>
							</svg>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;