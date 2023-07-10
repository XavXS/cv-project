import React from 'react';

const General = (change) => {
  return (
    <div className="general">
      <div className="divider"></div>
      <p>
        <label htmlFor="name">
          Full Name
          <input
            type="text"
            id="name"
            onChange={(e) => change(e, 'name')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="role">
          Role
          <input
            type="text"
            id="role"
            onChange={(e) => change(e, 'role')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            onChange={(e) => change(e, 'email')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="number">
          Phone Number
          <input
            type="tel"
            id="number"
            onChange={(e) => change(e, 'number')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            onChange={(e) => change(e, 'location')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="desc">
          Description
          <textarea
            id="desc"
            onChange={(e) => change(e, 'desc')}
          ></textarea>
        </label>
      </p>
    </div>
  );
}

export default General;
