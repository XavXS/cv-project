import General from './components/General';
import Work from './components/Work';
import Education from './components/Education';
import Output from './components/Output';
import './styles/App.css';
import React, { useState } from 'react';
import uniqid from 'uniqid';

const App = () => {
  const [general, setGeneral] = useState({
    name: 'Bob Sponge',
    role: 'Software Engineer',
    number: '123-456-7890',
    email: 'sponge@example.com',
    location: 'Onesie Bottom',
    desc: '',
  });

  const [work, setWork] = useState([
    {
      company: 'Krabby O Friday',
      position: 'Burger Flipper',
      tasks: 'I flipped burgers and it was very fun',
      from: 'March 2016',
      until: 'Present',
      id: uniqid(),
    },
    {
      company: 'Goggle',
      position: 'Sentient AI Maker',
      tasks:
        'The AI I made turned sentient and destroyed the server',
      from: 'October 2005',
      until: 'March 2010',
      id: uniqid(),
    },
    {
      company: 'Pear Computers Inc',
      position: 'Hardware Engineer',
      tasks: 'I made pear 2 and it was good success',
      from: 'September 1985',
      until: 'December 2000',
      id: uniqid(),
    },
  ]);

  const [education, setEducation] = useState([
    {
      school: 'Driving School',
      title: 'Chief Driver',
      date: 'March 2020',
      id: uniqid(),
    },
    {
      school: 'Em Aye Tee',
      title: 'Software Engineering',
      date: 'April 2021',
      id: uniqid(),
    },
  ]);

  const generalChange = (e, propName) => {
    const newGeneral = { ...general };
    newGeneral[propName] = e.target.value;
    setGeneral(newGeneral);
  }

  const handleWorkChange = (e, id, propName) => {
    let newWork = [ ...work ];
    newWork = newWork.map((element) => {
      if (element.id === id) {
        let newElement = { ...element };
        newElement[propName] = e.target.value;
        return newElement;
      }
      return element;
    });
    setWork(newWork);
  }

  const handleEdChange = (e, id, propName) => {
    let newEd = [ ...education ];
    newEd = newEd.map((element) => {
      if (element.id === id) {
        let newElement = { ...element };
        newElement[propName] = e.target.value;
        return newElement;
      }
      return element;
    });
    setEducation(newEd)
  }

  const handleWorkAdd = (obj) => {
    let newWork = [ ...work ];
    newWork = newWork.concat(obj);
    setWork(newWork);
  }

  const handleEdAdd = (obj) => {
    let newEd = [ ...education ];
    newEd = newEd.concat(obj);
    setEducation(newEd);
  }

  const handleWorkDelete = (id) => {
    let newWork = [ ...work ];
    newWork = newWork.filter(
      (element) => element.id !== id
    );
    setWork(newWork);
  }

  const handleEdDelete = (id) => {
    let newEd = [ ...education ];
    newEd = newEd.filter(
      (element) => element.id !== id
    );
    setEducation(newEd);
  }

  return (
    <div id="app">
      <form>
        <h1>CV Application</h1>
        {General(generalChange)}
        <h2>Work Experience</h2>
        {Work(work, handleWorkChange, handleWorkAdd, handleWorkDelete)}
        <h2>Education</h2>
        {Education(education, handleEdChange, handleEdAdd, handleEdDelete)}
      </form>
      {Output(general, work, education)}
    </div>
  );
}

export default App;
