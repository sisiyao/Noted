import React from 'react';
import { withRouter } from 'react-router';
import NoteFormHeader from './note_form_header';
import TagFormContainer from '../collection_tags/tag_form_container';
import TagListContainer from '../collection_tags/tag_list_container';
import bindAll from 'lodash.bindall';
import Modal from 'react-modal';
import modalStyle from './note_color_modal_style';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { id: "", title: "", body: "", collection_ids: [],
      color: "white", titleHeight: '1', bodyHeight: '1',
      collModalOpen: false, colorModalOpen: false, updatedAt: "" };

    bindAll(this, ['textAreaChange', 'cancel', 'handleSubmit',
      'handleDelete', 'updateCheckbox', 'updateColor', 'closeCollModal',
      'openCollModal', 'closeColorModal', 'openColorModal', 'noteForm',
      'editCollections', 'tagForm', 'noteActions', 'date', 'noteColor']);
  }

  componentDidMount () {
    if (this.props.formType !== 'new-note') {
      const noteId = this.props.location.pathname.slice(6);
      this.props.fetchSingleNote(noteId);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.route.path === '/new-note') {
      this.setState({ id: '', title: '', body: '', collection_ids: [],
        color: 'white', titleHeight: '1', bodyHeight: '1', updatedAt: ''});
    } else if (nextProps.formStatus !== "deleted") {
      const noteId = this.props.location.pathname.slice(6);
      const note = nextProps.notes[noteId];
      this.setState({ id: note.id, title: note.title, body: note.body,
        collection_ids: note.collection_ids, color: note.color,
        titleHeight: `${note.titleHeight}`, bodyHeight: `${note.bodyHeight}`,
        updatedAt: new Date(note.updated_at)});
    }
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
    return () => {
      this.setState({color: color});
    };
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
    if (this.state.id !== "") {
      this.props.destroyNote(this.state.id);
    } else {
      this.props.router.push('/home');
    }
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
          {this.date()}
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
        updateCheckbox={this.updateCheckbox}
        modalOpen={this.state.collModalOpen}
        closeModal={this.closeCollModal}/>
    );
  }

  noteActions () {
    return (
      <div className="note-form-header-right">
        <NoteFormHeader handleDelete={this.handleDelete}
          cancel={this.cancel} openColorModal={this.openColorModal}/>
      </div>
    );
  }

  noteColorSelected (color) {
    return color === this.state.color ? "color-selected" : "";
  }

  noteColor () {
    const colors = ['white', 'yellow', 'green', 'blue', 'red', 'lavender'];
    const colorList = colors.map(color => {
      return <div key={color} className={`color-choice ${color}
          ${this.noteColorSelected(color)}`}
          onClick={this.updateColor(color)}></div>;
    });
    return (
      <Modal isOpen={this.state.colorModalOpen}
        onRequestClose={this.closeColorModal} style={modalStyle}>
        <div className="color-choice-header">NOTE COLOR</div>
        <div className="color-choices">{colorList}</div>
      </Modal>
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
            {this.noteColor()}
          </div>
          {this.noteForm()}
          <ul className='note-form-errors'>{this.errors()}</ul>
        </div>
      );
    }
  }
}

export default withRouter(NoteForm);
