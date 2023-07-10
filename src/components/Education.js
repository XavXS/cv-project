import React from 'react';
import uniqid from 'uniqid';

const Educational = (list, change, add, remove) => {
  return (
    <div className="education-list">
      <button
        type="button"
        className="add-btn"
        onClick={() =>
          add({
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
            <button
              type="button"
              className="delete-btn"
              onClick={() => remove(element.id)}
            >
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
                    change(e, element.id, 'school')
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
                    change(e, element.id, 'title')
                  }
                />
              </label>
            </p>
            <p>
              <label>
                Date of Study
                <input
                  type="text"
                  value={element.date}
                  onChange={(e) =>
                    change(e, element.id, 'date')
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

export default Educational;
