import React, { Component } from 'react';

export class History extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.historyLinks);
  }


  render() {
    return (
      <div>
        <h3>History</h3>
        <div className="history-wrapper">
          <ul>
            {
              this.props.historyLinks.map(function (link, i) {
                console.log('test');
                return <li key={i}>{link}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default History
