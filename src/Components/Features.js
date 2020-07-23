import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import Options from './Options';

function buildFeatureHash(feature, idx) {
    return feature + '-' + idx
}


class Features extends Component {

render() {

      return (
        <fieldset className="feature" >
          <legend className="feature__name">
            { this.props.features.map( feature => <h3 key={buildFeatureHash(feature)}>{feature}</h3>)}
          </legend>
          <Options />
        </fieldset>
    
    )};
 }

export default Features;