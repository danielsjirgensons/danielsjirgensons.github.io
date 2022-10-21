import { Component } from 'react';
import site from '../../config';
import Logo from '../../components/Logo/Logo';
// import './Footer.scss';

class Footer extends Component {
  render() {
    const date = new Date();

    return(
        <footer className="footer-style">
            <div className="container">
              <div className="footer-logo">
                <Logo theme="light" />
              </div>

              <div className="footer-row">
                <span>&copy; {date.getFullYear()} {site.title}, All Rights Reserved</span>
                <span>
                  Powered by 
                  <a href="https://prof-designs.lv" target="_blank" rel="noreferrer">Prof. Designs</a>
                </span>
              </div>

              <div className="scroll-up" onClick={() => this.scrollUp()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13.06" height="18.89">
                  <path d="m12.88 5.95-6-5.79a.51.51 0 0 0-.71 0l-6 5.79a.52.52 0 0 0 .7.76l5.14-5V18.4a.5.5 0 0 0 1 0V1.73l5.14 5a.53.53 0 1 0 .73-.78Z"/>
                </svg>
              </div>
            </div>
        </footer>
    );
  }

  scrollUp() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }
}

export default Footer;