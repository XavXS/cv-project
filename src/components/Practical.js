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
              <label>
                Company Name
                <input
                  type="text"
                  value={element.company}
                  onChange={(e) =>
                    this.handleChange(e, element.id, 'company')
                  }
                />
              </label>
              <label>
                Position
                <input
                  type="text"
                  value={element.position}
                  onChange={(e) =>
                    this.handleChange(e, element.id, 'position')
                  }
                />
              </label>
              <label>
                Main Tasks
                <textarea
                  value={element.tasks}
                  onChange={(e) =>
                    this.handleChange(e, element.id, 'tasks')
                  }
                ></textarea>
              </label>
              <label>
                Worked From
                <input
                  type="date"
                  value={element.from}
                  onChange={(e) =>
                    this.handleChange(e, element.id, 'from')
                  }
                />
              </label>
              <label>
                Worked Until
                <input
                  type="date"
                  value={element.until}
                  onChange={(e) =>
                    this.handleChange(e, element.id, 'until')
                  }
                />
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Practical;
