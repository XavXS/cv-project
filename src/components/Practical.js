import Experience from './Experience';
import uniqid from 'uniqid';

class Practical extends Experience {
  constructor() {
    super();
    this.addElement = this.addElement.bind(this);
    this.state = {
      list: [],
    };
  }

  addElement(e) {
    e.preventDefault();
    this.setState({
      list: this.state.list.concat({
        company: '',
        position: '',
        tasks: '',
        from: '',
        until: '',
        id: uniqid(),
      }),
    });
  }

  render() {
    return (
      <div>
        <button className="add-btn" onClick={this.addElement}>
          +
        </button>
        {this.state.list.map((element) => {
          return (
            <div key={element.id}>
              <p>
                <label>
                  Company Name
                  <input
                    type="text"
                    value={element.company}
                    name="company"
                    onChange={(e) =>
                      this.handleChange(e, element.id, 'company')
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
                    name="position"
                    onChange={(e) =>
                      this.handleChange(e, element.id, 'position')
                    }
                  />
                </label>
              </p>
              <label>
                Main Tasks
                <textarea
                  value={element.tasks}
                  name="tasks"
                  onChange={(e) =>
                    this.handleChange(e, element.id, 'tasks')
                  }
                ></textarea>
              </label>
              <p>
                <label>
                  Worked From
                  <input
                    type="date"
                    value={element.from}
                    name="worked-from"
                    onChange={(e) =>
                      this.handleChange(e, element.id, 'from')
                    }
                  />
                </label>
              </p>
              <p>
                <label>
                  Worked Until
                  <input
                    type="date"
                    value={element.until}
                    name="worked-til"
                    onChange={(e) =>
                      this.handleChange(e, element.id, 'until')
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

export default Practical;
