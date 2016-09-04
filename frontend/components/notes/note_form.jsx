import React from 'react';
import { withRouter } from 'react-router';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { id: "", title: "", body: ""};
    this.deleteButton = this.deleteButton.bind(this);
    this.textAreaChange = this.textAreaChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  deleteButton () {
    return this.props.formType === "new-note" ? false : true;
  }

  update (field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  textAreaChange (field) {
    const textarea = document.getElementById('textarea');
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight+'px';
    };
  }

  cancel () {
    this.props.router.push('/home');
  }

  handleSubmit () {
    this.props.processForm(this.state);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.errors.length === 0) {
      this.props.router.push('/home');
    }
  }

  render () {
    return (
      <div className="note-container">
        <div className="note-form-options">
          <div className="note-form-toolbar">Toolbar</div>
          <button className="note-form-action" onClick={this.cancel}>x</button>
        </div>

        <div className="note-form-container">
          <div className="note-form">
            <div className="note-tags">Tags</div>
            <form onSubmit={this.handleSubmit}>
              <input type="text"
                value={this.state.title}
								onChange={this.update("title")}
								placeholder="Title"
								className="note-form-title" />
              <textarea type="text" id='textarea'
								onChange={this.textAreaChange("body")}
								placeholder="Take a note..."
								className="note-form-body"
                value={this.state.body} rows='10'></textarea>
              <input className="note-submit-button" type="submit" value="DONE" />
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(NoteForm);
