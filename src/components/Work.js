import React from 'react';
import uniqid from 'uniqid';

const Work = (list, change, add, remove) => {
  let type = 'work';
  return (
    <div className="work-list">
      <button
        className="add-btn"
        type="button"
        onClick={() =>
          add({
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
              onClick={() => remove(element.id)}
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
                    change(e, element.id, 'company')
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
                    change(e, element.id, 'position')
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
                    change(e, element.id, 'tasks')
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
                    change(e, element.id, 'from')
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
                    change(e, element.id, 'until')
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

export default Work;
