import React from 'react';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { id: "", title: "", body: ""};
    this.buttonText = this.buttonText.bind(this);
  }

  buttonText () {
    return this.props.formType === "new-note" ? "x" : "Delete";
  }

  update (field) {
    return e => this.setState(
      { [field]: e.currentTarget.value }
    );
  }

  render () {
    return (
      <div className="note-container">
        <div className="note-form-options">
          <div className="note-form-toolbar">Toolbar</div>
          <button className="note-form-action">{this.buttonText()}</button>
        </div>

        <div className="note-form-container">
          <div className="note-form">
            <form>
              <input type="text"
                value={this.state.title}
								onChange={this.update("title")}
								placeholder="Title"
								className="note-form-title" />
              <textarea type="text" rows='18'
								onChange={this.update("body")}
								placeholder="Take a note..."
								className="note-form-body" value={this.state.body}></textarea>
              <input className="note-submit-button" type="submit" value="Done" />
            </form>
          </div>
        </div>

        <div className="note-tags">Tags</div>
      </div>
    );
  }
}

export default NoteForm;
