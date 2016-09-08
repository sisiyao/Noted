import React from 'react';
import { withRouter } from 'react-router';
import NoteFormHeader from './note_form_header';
import TagFormContainer from '../collection_tags/tag_form_container';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { id: "", title: "", body: "", collection_ids: []};
    if (this.props.formType !== 'new-note') {
      this.noteId = this.props.location.pathname.slice(6);
    }

    this.deleteButton = this.deleteButton.bind(this);
    this.textAreaChange = this.textAreaChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
  }

  componentDidMount () {
    if (this.props.formType !== 'new-note') {
      this.props.fetchSingleNote(this.noteId);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.route.path === '/new-note') {
      this.setState({ id: '', title: '', body: '', collection_ids: [] });
    } else if (nextProps.formStatus === 'found') {
      const note = nextProps.notes[this.noteId];
      this.setState({ id: note.id, title: note.title, body: note.body,
        collection_ids: note.collection_ids });
    }
  }

  deleteButton () {
    return this.props.formType === 'new-note' ? ""
      : <i className="fa fa-trash-o" aria-hidden="true" />;
  }

  textAreaChange (field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
      const textarea = document.getElementById(`textarea-${field}`);
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight+'px';
    };
  }

  updateCheckbox (checkedBoxes) {
    const collection_ids = [];
    checkedBoxes.forEach(box => {
      collection_ids.push(box.value);
    });
    this.setState({collection_ids: collection_ids});
  }

  cancel () {
    this.props.router.push('/home');
  }

  handleSubmit (e) {
    e.preventDefault();
    const note = {id: this.state.id, title: this.state.title,
      body: this.state.body, collection_ids: this.state.collection_ids};
    this.props.processForm(note);
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
    if (this.props.formType !== 'new-note' && this.state.id === "") {
      return <div></div>;
    } else {
      return (
        <div className="note-container">
          <div className="edit-coll-header">Edit Collections</div>
          <div className="note-form-header">
            <TagFormContainer collectionIds={this.state.collection_ids}
              updateCheckbox={this.updateCheckbox.bind(this)} />
            <NoteFormHeader handleDelete={this.handleDelete}
              deleteButton={this.deleteButton} cancel={this.cancel} />
          </div>
          <div className="note-form-container">
            <form onSubmit={this.handleSubmit}>

              <textarea id='textarea-title'
  							onChange={this.textAreaChange("title")}
  							placeholder="Title"
  							className="note-form-title"
                value={this.state.title} rows='1'/>
              <textarea id='textarea-body'
  							onChange={this.textAreaChange("body")}
  							placeholder="Take a note..."
  							className="note-form-body"
                value={this.state.body} />
              <input className="note-submit-button" type="submit" value="DONE" />
            </form>
          </div>
          <ul className='note-form-errors'>{this.errors()}</ul>
        </div>
      );
    }
  }
}

export default withRouter(NoteForm);
