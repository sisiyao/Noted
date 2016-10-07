import React from 'react';
import { withRouter } from 'react-router';
import NoteFormHeader from './note_form_header';
import TagFormContainer from '../collection_tags/tag_form_container';
import NoteColor from './note_color';
import TagListContainer from '../collection_tags/tag_list_container';
import bindAll from 'lodash.bindall';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { id: "", title: "", body: "", collection_ids: [],
      color: "white", titleHeight: '1', bodyHeight: '1',
      collModalOpen: false, colorModalOpen: false, updatedAt: "" };
    if (this.props.formType !== 'new-note') {
      this.noteId = this.props.location.pathname.slice(6);
    }

    bindAll(this, ['deleteButton', 'textAreaChange', 'cancel', 'handleSubmit',
      'handleDelete', 'updateCheckbox', 'updateColor', 'closeCollModal',
      'openCollModal', 'closeColorModal', 'openColorModal', 'noteForm',
      'editCollections', 'tagForm', 'noteActions', 'date']);
  }

  componentDidMount () {
    if (this.props.formType !== 'new-note') {
      this.props.fetchSingleNote(this.noteId);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.route.path === '/new-note') {
      this.setState({ id: '', title: '', body: '', collection_ids: [],
        color: 'white', titleHeight: '1', bodyHeight: '1', updatedAt: ''});
    } else if (nextProps.formStatus !== "deleted") {
      const note = nextProps.notes[this.noteId];
      this.setState({ id: note.id, title: note.title, body: note.body,
        collection_ids: note.collection_ids, color: note.color,
        titleHeight: `${note.titleHeight}`, bodyHeight: `${note.bodyHeight}`,
        updatedAt: new Date(note.updated_at)});
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
    const note = {id: this.state.id, title: this.state.title.trim(),
      body: this.state.body.trim(), collection_ids: this.state.collection_ids,
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

  closeCollModal () {
    this.setState({ collModalOpen: false });
  }

  openCollModal () {
    this.setState({ collModalOpen: true });
  }

  closeColorModal () {
    this.setState({ colorModalOpen: false });
  }

  openColorModal () {
    this.setState({ colorModalOpen: true });
  }

  date () {
    const dateObj = this.state.updatedAt;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (dateObj === "") {
      return;
    } else {
      const minutes = dateObj.getMinutes() >= 10 ? dateObj.getMinutes()
      : `0${dateObj.getMinutes()}`;
      const seconds = dateObj.getSeconds() >= 10 ? dateObj.getSeconds()
      : `0${dateObj.getSeconds()}`;
      const date = `${months[dateObj.getMonth()]} ${dateObj.getDate()},
      ${dateObj.getFullYear()} ${dateObj.getHours()}:${minutes}:${seconds}`;
      return <div className="note-last-saved">Last saved {date}</div>;
    }
  }

  noteForm () {
    return (
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
          {this.date()}
          <input className="note-submit-button" type="submit" value="DONE" />
        </form>
      </div>
    );
  }

  editCollections () {
    return (
      <div className="note-form-edit-coll" onClick={this.openCollModal}>
        <div>Edit Collections</div>
        <div><i className="fa fa-pencil" aria-hidden="true" /></div>
      </div>
    );
  }

  tagForm () {
    return (
      <TagFormContainer collectionIds={this.state.collection_ids}
        updateCheckbox={this.updateCheckbox.bind(this)}
        showDropdown={this.showDropdown}
        dropdownStatus={this.state.dropdownStatus}
        modalOpen={this.state.collModalOpen}
        closeModal={this.closeCollModal}/>
    );
  }

  noteActions () {
    return (
      <div className="note-form-header-right">
        <NoteColor color={this.state.color} updateColor={this.updateColor}/>
        <NoteFormHeader handleDelete={this.handleDelete}
          deleteButton={this.deleteButton} cancel={this.cancel} />
      </div>
    );
  }

  render () {
    if (this.props.formType !== 'new-note' && this.state.id === "") {
      return <div></div>;
    } else {
      return (
        <div className="note-container">
          <div className="note-form-header">
            {this.editCollections()}
            {this.tagForm()}
            {this.noteActions()}
          </div>
          {this.noteForm()}
          <ul className='note-form-errors'>{this.errors()}</ul>
        </div>
      );
    }
  }
}

export default withRouter(NoteForm);
