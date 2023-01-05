import General from './components/General';
import Work from './components/Work';
import Education from './components/Education';
import Output from './components/Output';
import './styles/App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      general: {
        name: '',
        role: '',
        number: '',
        email: '',
        location: '',
        desc: '',
      },
      education: [],
      work: [],
    };

    this.generalChange = this.generalChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  generalChange(e, propName) {
    const general = { ...this.state.general };
    general[propName] = e.target.value;
    this.setState({
      general: general,
    });
  }

  handleChange(e, id, type, propName) {
    const newState = { ...this.state };
    newState[type] = newState[type].map((element) => {
      if (element.id === id) {
        let newElement = { ...element };
        newElement[propName] = e.target.value;
        return newElement;
      }
      return element;
    });
    this.setState(newState);
  }

  handleAdd(type, obj) {
    const newState = { ...this.state };
    newState[type] = newState[type].concat(obj);
    this.setState(newState);
  }

  handleDelete(type, id) {
    const newState = { ...this.state };
    newState[type] = newState[type].filter(
      (element) => element.id !== id
    );
    this.setState(newState);
  }

  render() {
    return (
      <div id="app">
        <form onSubmit={this.submitForm}>
          <h1>CV Application</h1>
          <General change={this.generalChange} />
          <h2>Work Experience</h2>
          <Work
            list={this.state.work}
            change={this.handleChange}
            add={this.handleAdd}
            remove={this.handleDelete}
          />
          <h2>Education</h2>
          <Education
            list={this.state.education}
            change={this.handleChange}
            add={this.handleAdd}
            remove={this.handleDelete}
          />
        </form>
        <Output data={this.state} />
      </div>
    );
  }
}

export default App;
