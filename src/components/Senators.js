import React, { Component } from 'react'
import Senator from './Senator.js'
import { getDemocrats, getRepublicans } from '../filters'

export default class extends Component {
  
  renderRepublicans () {
    return getRepublicans().map(senator => <Senator person={senator}/>)
  }
  
  renderDemocrats () {
    return getDemocrats().map(senator => <Senator person={senator}/>)
  }
  
  render() {
    
    const republicans = this.renderRepublicans()
    const democrats = this.renderDemocrats()
    
    return (
      <div>
        <header>
          <h1 id="header">Aesthetically Ugly Contact List for U.S. Senators</h1>
        </header>
      <div class="container">
        <div>
        <h1 class="party">Republicans</h1>
        {republicans}
        </div>
  
        <div>
        <h1 class="party">Democrats</h1>
        {democrats}
        </div>
      </div>
      </div>
    );
  }
}


