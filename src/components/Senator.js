import React, { Component } from 'react'


export default class extends Component {
  
  render() {
    const senator = this.props.person
    
    return (
  
      <div class="senator">
        <h2><a class="link" href={senator.website} target="_blank">{senator.person.firstname} {senator.person.lastname}</a></h2>
        <h4>{senator.description}</h4>
        <h4>Contact:</h4>
        <p>Phone: {senator.phone}</p>
        <p><a class="link" href={senator.extra.contact_form} target="_blank">{senator.extra.contact_form}</a></p>
      </div>
    );
  }
}