import React from 'react';
import '../styles/Output.css';

class Output extends React.Component {
  render() {
    let { general, work, education } = this.props.data;
    return (
      <div id="output">
        <div className="output">
          <div className="general-out">
            <div className="general-main">
              <div className="general-name">{general.name}</div>
              <h3 className="general-roles">{general.role}</h3>
            </div>
            <div className="general-extra">
              <div className="general-email">
                Email: {general.email}
              </div>
              <div className="general-number">
                Number: {general.number}
              </div>
              <div className="general-location">
                Location: {general.location}
              </div>
            </div>
          </div>
          <div className="divider-out"></div>
          <div className="desc">{general.desc}</div>
          <div className="title-exp">Work Experience</div>
          {work.map((element) => {
            return (
              <div className="work-out" key={element.id}>
                <div className="divider-exp"></div>
                <div className="experience-info">
                  {element.company} | {element.position}
                </div>
                <div className="desc">{element.tasks}</div>
                <div className="exp-date">
                  {element.from} ~ {element.until}
                </div>
              </div>
            );
          })}
          <div className="title-exp">Education</div>
          {education.map((element) => {
            return (
              <div className="education-out">
                <div className="divider-exp"></div>
                <div className="experience-info">
                  {element.school} | {element.title}
                </div>
                <div className="exp-date">{element.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Output;
