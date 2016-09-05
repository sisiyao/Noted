import React from 'react';
import { withRouter } from 'react-router';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { id: "", title: "", body: ""};
    if (this.props.formType !== 'new-note') {
      this.noteId = this.props.location.pathname.slice(6);
    }

    this.deleteButton = this.deleteButton.bind(this);
    this.textAreaChange = this.textAreaChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount () {
    if (this.props.formType !== 'new-note') {
      this.props.fetchSingleNote(this.noteId);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.formStatus === 'found') {
      const note = nextProps.notes[this.noteId];
      this.setState({ id: note.id, title: note.title, body: note.body });
    } else if (nextProps.formStatus !== 'error') {
      this.props.router.push('/home');
    }
  }

  deleteButton () {
    return this.props.formType === 'new-note' ? ""
      : <i className="fa fa-trash-o" aria-hidden="true" />;
  }

  update (field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  textAreaChange (field) {
    return e => {
      const textarea = document.getElementById('textarea');
      this.setState({ [field]: e.currentTarget.value });
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight+'px';
    };
  }

  cancel () {
    this.props.router.push('/home');
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  errors () {
    return this.props.errors.map((error, idx) => (
      <li key={`${idx}${error}`}>{error}</li>
    ));
  }

  handleDelete (e) {
    e.preventDefault();
    this.props.destroyNote(this.noteId);
  }

  render () {
    return (
      <div className="note-container">
        <div className="note-form-options">
          <div className="note-form-toolbar">
            Toolbar
            <div className="note-form-delete"
              onClick={this.handleDelete}>
              {this.deleteButton()}</div>
          </div>
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
        <ul className='note-form-errors'>{this.errors()}</ul>
      </div>
    );
  }
}

export default withRouter(NoteForm);
