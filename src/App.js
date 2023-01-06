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
        name: 'Bob Sponge',
        role: 'Software Engineer',
        number: '123-456-7890',
        email: 'sponge@example.com',
        location: 'Onesie Bottom',
        desc: '',
      },
      education: [
        {
          school: 'Driving School',
          title: 'Chief Driver',
          date: 'March 2020',
        },
        {
          school: 'Em Aye Tee',
          title: 'Software Engineering',
          date: 'April 2021',
        },
      ],
      work: [
        {
          company: 'Krabby O Friday',
          position: 'Burger Flipper',
          tasks: 'I flipped burgers and it was very fun',
          from: 'March 2016',
          until: 'Present',
        },
        {
          company: 'Goggle',
          position: 'Sentient AI Maker',
          tasks:
            'The AI I made turned sentient and destroyed the server',
          from: 'October 2005',
          until: 'March 2010',
        },
        {
          company: 'Pear Computers Inc',
          position: 'Hardware Engineer',
          tasks: 'I made pear 2 and it was good success',
          from: 'September 1985',
          until: 'December 2000',
        },
      ],
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
