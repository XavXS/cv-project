import React from 'react';
import uniqid from 'uniqid';

class Educational extends React.Component {
  render() {
    let type = 'education';
    let { list, change, add } = this.props;
    return (
      <div className="education-list">
        <button
          className="add-btn"
          onClick={(e) =>
            add(e, type, {
              school: '',
              title: '',
              date: '',
              id: uniqid(),
            })
          }
        >
          +
        </button>
        {list.map((element) => {
          return (
            <div key={element.id} className="education">
              <button type="button" className="delete-btn">
                ╳
              </button>
              <div className="divider"></div>
              <p>
                <label>
                  School Name
                  <input
                    type="text"
                    value={element.school}
                    onChange={(e) =>
                      change(e, element.id, type, 'school')
                    }
                  />
                </label>
              </p>
              <p>
                <label>
                  Title of Study
                  <input
                    type="text"
                    value={element.title}
                    onChange={(e) =>
                      change(e, element.id, type, 'title')
                    }
                  />
                </label>
              </p>
              <p>
                <label>
                  Date of Study
                  <input
                    type="date"
                    value={element.date}
                    onChange={(e) =>
                      change(e, element.id, type, 'date')
                    }
                  />
                </label>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Educational;
