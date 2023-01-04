import React from 'react';

class General extends React.Component {
  render() {
    return (
      <div>
        <p>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" />
        </p>
      </div>
    );
  }
}

export default General;
