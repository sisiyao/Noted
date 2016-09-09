import React from 'react';
import { withRouter } from 'react-router';
import NoteFormHeader from './note_form_header';
import TagFormContainer from '../collection_tags/tag_form_container';
import NoteColor from './note_color';
import TagListContainer from '../collection_tags/tag_list';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { id: "", title: "", body: "", collection_ids: [],
      color: "white", titleHeight: '1', bodyHeight: '1'};
    if (this.props.formType !== 'new-note') {
      this.noteId = this.props.location.pathname.slice(6);
    }

    this.deleteButton = this.deleteButton.bind(this);
    this.textAreaChange = this.textAreaChange.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  componentDidMount () {
    if (this.props.formType !== 'new-note') {
      this.props.fetchSingleNote(this.noteId);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.route.path === '/new-note') {
      this.setState({ id: '', title: '', body: '', collection_ids: [],
        color: 'white', titleHeight: '1', bodyHeight: '1'});
    } else {
      const note = nextProps.notes[this.noteId];
      this.setState({ id: note.id, title: note.title, body: note.body,
        collection_ids: note.collection_ids, color: note.color,
        titleHeight: `${note.titleHeight}`, bodyHeight: `${note.bodyHeight}` });
    }
  }

  deleteButton () {
    return this.props.formType === 'new-note' ? ""
      : <i className="fa fa-trash-o" aria-hidden="true" />;
  }

  textAreaChange (field) {
    return e => {
      const textarea = document.getElementById(`textarea-${field}`);
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight+'px';
      this.setState({ [field]: e.currentTarget.value});
    };
  }

  updateCheckbox (collectionId) {
    const note = this;
    return () => {
      const newCollectionIds = note.state.collection_ids.slice();
      const idx = note.state.collection_ids.indexOf(collectionId);
      if (idx === -1) {
        newCollectionIds.push(collectionId);
      } else {
        newCollectionIds.splice(idx, 1);
      }
      this.setState({collection_ids: newCollectionIds});
    };
  }

  updateColor (color) {
    if (color) {
      this.setState({color: color.value});
    } else {
      this.setState({color: 'white'});
    }
  }

  cancel () {
    this.props.router.push('/home');
  }

  handleSubmit (e) {
    e.preventDefault();
    const note = {id: this.state.id, title: this.state.title,
      body: this.state.body, collection_ids: this.state.collection_ids,
      color: this.state.color};
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
          <div className="edit-headers">
            <div className="edit-coll-header">Collections</div>
            <div className="edit-note-header">Color</div>
          </div>
          <div className="note-form-header">
            <TagFormContainer collectionIds={this.state.collection_ids}
              updateCheckbox={this.updateCheckbox.bind(this)}
              showDropdown={this.showDropdown}
              dropdownStatus={this.state.dropdownStatus} />
            <NoteColor color={this.state.color} updateColor={this.updateColor}/>
            <NoteFormHeader handleDelete={this.handleDelete}
              deleteButton={this.deleteButton} cancel={this.cancel} />
          </div>
          <div className={`note-form-container ${this.state.color}`}>
            <form onSubmit={this.handleSubmit}>
              <TagListContainer collectionIds={this.state.collection_ids}/>
              <textarea id='textarea-title'
  							onChange={this.textAreaChange("title")}
  							placeholder="Title"
  							className="note-form-title"
                value={this.state.title} rows={this.state.titleHeight} />
              <textarea id='textarea-body'
  							onChange={this.textAreaChange("body")}
  							placeholder="Take a note..."
  							className="note-form-body"
                value={this.state.body} rows={this.state.bodyHeight} />
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
