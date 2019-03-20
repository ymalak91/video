import React, { Component } from 'react';

export class History extends Component {

  render() {
    return (
      <div>
        <h3>History</h3>
        <div className="history-wrapper">
          <ul>
            {
              this.props.historyLinks.map(function (link, i) {
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
