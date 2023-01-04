import React from 'react';

class Experience extends React.Component {
  handleChange(e, id, propName) {
    this.setState({
      list: this.state.list.map((element) => {
        if (element.id === id) element[propName] = e.target.value;
        return element;
      }),
    });
  }
}

export default Experience;
