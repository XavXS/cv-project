import React from 'react';
import uniqid from 'uniqid';

class Work extends React.Component {
  render() {
    let type = 'work';
    let { list, change, add, remove } = this.props;
    return (
      <div className="work-list">
        <button
          className="add-btn"
          type="button"
          onClick={() =>
            add(type, {
              company: '',
              position: '',
              tasks: '',
              from: '',
              until: '',
              id: uniqid(),
            })
          }
        >
          +
        </button>
        {list.map((element) => {
          return (
            <div key={element.id} className="work">
              <div className="divider"></div>
              <button
                type="button"
                className="delete-btn"
                onClick={() => remove(type, element.id)}
              >
                ╳
              </button>
              <p>
                <label>
                  Company Name
                  <input
                    type="text"
                    value={element.company}
                    onChange={(e) =>
                      change(e, element.id, type, 'company')
                    }
                  />
                </label>
              </p>
              <p>
                <label>
                  Position
                  <input
                    type="text"
                    value={element.position}
                    onChange={(e) =>
                      change(e, element.id, type, 'position')
                    }
                  />
                </label>
              </p>
              <p>
                <label>
                  Main Tasks
                  <textarea
                    value={element.tasks}
                    onChange={(e) =>
                      change(e, element.id, type, 'tasks')
                    }
                  ></textarea>
                </label>
              </p>
              <p>
                <label>
                  Worked From
                  <input
                    type="text"
                    value={element.from}
                    onChange={(e) =>
                      change(e, element.id, type, 'from')
                    }
                  />
                </label>
              </p>
              <p>
                <label>
                  Worked Until
                  <input
                    type="text"
                    value={element.until}
                    onChange={(e) =>
                      change(e, element.id, type, 'until')
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

export default Work;
