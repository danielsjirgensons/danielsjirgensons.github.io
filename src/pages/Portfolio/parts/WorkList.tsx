import * as React from 'react';
import Button from '../../../components/Button/Button';
import { stripText } from '../../../helpers';

// TODO: output statuses - true, false, empty

export interface IAppProps {}
export interface IAppState {
  portfolioData?: any;
  portfolioOutput?: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      portfolioData: [],
      portfolioOutput: false
    }
  }

  async componentDidMount(){
    const response = await fetch('https://prof-designs.lv/wp-content/themes/prof-designs/data/json-posts.php?limit=10', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const data = await response.json();
    this.setState({
      portfolioData: data
    });
    this.getPortfolioData(this.state.portfolioData);

    // console.dir(data);
  }

  getPortfolioData(data: []){
    if(data.length > 0){
      this.setState({
        portfolioOutput: true
      });
      // TODO: create new object for simple
    }else{
      // FIXME: return no posts on 0
      return(<div>Nav postu :/</div>);
    }
  }

  getPortfolioList(){
    // this.getPortfolioData();  // Call data verification

    if(this.state.portfolioOutput){
      let data = this.state.portfolioData;
      // console.log(this.state.portfolioData);
      
      document.getElementById("workLoader")?.remove();
      return (
        <ul className="work-list">
          {data.map((work: any, key: number) => (
            <li key={key}>
              <a href={decodeURIComponent(work.link)} target="_blank" rel="noreferrer">
                <img src={decodeURIComponent(work.image)} alt={work.title} />
                <div className="work-info">
                  <h6 dangerouslySetInnerHTML={stripText(work.title, 45)}></h6>
                  <span>{work.cats}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )
    }
  }

  public render() {
    return (
      <div className="container">
        <div id="workLoader" className="work-loader">Loading...</div>

        {this.getPortfolioList()}

        {/* TODO: target _blank */}
        <div className="work-list-button-row">
          <Button 
            type='link' 
            theme='primary' 
            url='https://prof-designs.lv'
            target='_blank'>View more</Button>
        </div>
      </div>
    );
  }
}
