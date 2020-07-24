import React, { Component } from 'react';

function buildFeatureHash(feature, idx) {
    return feature + '-' + idx
}

function selectedOption() {
    return this.state.selected[feature]
}

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Summary extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
 render() {


  
  console.log(this.state.selected);
    return (
      this.state.selected.map(feature => (
      <div className="summary__option" key={buildFeatureHash(feature)}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption().name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption().cost)}
        </div>
      </div>
    )));
 }
}

export default Summary;