import uniqid from 'uniqid';
import Experience from './Experience';

class Educational extends Experience {
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
        school: '',
        title: '',
        date: '',
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
                School Name
                <input
                  type="text"
                  value={element.school}
                  onChange={(e) =>
                    this.handleChange(e, element.id, 'school')
                  }
                />
              </label>
              <label>
                Title of Study
                <input
                  type="text"
                  value={element.title}
                  onChange={(e) =>
                    this.handleChange(e, element.id, 'title')
                  }
                />
              </label>
              <label>
                Date of Study
                <input
                  type="text"
                  value={element.date}
                  onChange={(e) =>
                    this.handleChange(e, element.id, 'date')
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

export default Educational;
