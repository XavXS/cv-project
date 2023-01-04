import React from 'react';

class General extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" />
      </div>
    );
  }
}

export default General;
