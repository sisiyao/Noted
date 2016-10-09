import React from 'react';
import { withRouter } from 'react-router';
import NoteFormHeader from './note_form_header';
import TagFormContainer from '../collection_tags/tag_form_container';
import TagListContainer from '../collection_tags/tag_list_container';
import bindAll from 'lodash.bindall';
import Modal from 'react-modal';
import modalStyle from './note_color_modal_style';
import { convertDate } from '../../util/date_util';

class NoteForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = { id: "", title: "", body: "", collection_ids: [],
      color: "white", titleHeight: '1', bodyHeight: '1',
      collModalOpen: false, colorModalOpen: false, updatedAt: "" };
    this.firstAutosave = false;
    this.timeoutId = null;

    bindAll(this, ['textAreaChange', 'cancel', 'handleTextSubmit',
      'handleDelete', 'updateCheckbox', 'updateColor', 'closeCollModal',
      'openCollModal', 'closeColorModal', 'openColorModal', 'noteForm',
      'editCollections', 'tagForm', 'noteActions', 'noteColor',
      'handleColorSubmit', 'handleCollectionSubmit', 'updateNoteForm']);
  }

  componentDidMount () {
    if (this.props.formType !== 'new-note') {
      const noteId = this.props.location.pathname.slice(6);
      this.props.fetchSingleNote(noteId);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.route.path === '/new-note' &&
      this.props.location.pathname !== '/new-note') {
      this.setState({id: "", title: "", body: "", collection_ids: [],
        color: "white", titleHeight: '1', bodyHeight: '1', updatedAt: ""});
      this.firstAutosave = false;
    } else if (nextProps.formStatus !== "deleted"
      && nextProps.route.path !== '/new-note') {
      const noteId = nextProps.location.pathname.slice(6);
      const note = nextProps.notes[noteId];
      if (note) {
        this.updateNoteForm(note);
      }
    }
  }

  updateNoteForm (note) {
    switch (this.firstAutosave) {
      case false:
        const titleHeight = note.titleHeight < 1
          ? 1 : note.titleHeight;
        const title = note.title ? note.title : "";
        const body = note.body ? note.body : "";
        this.setState({ id: note.id, title: title, body: body,
          collection_ids: note.collection_ids, color: note.color,
          titleHeight: `${titleHeight}`, bodyHeight: `${note.bodyHeight}`,
          updatedAt: new Date(note.updated_at)});
        this.firstAutosave = true;
        break;
      case true:
        this.setState({ updatedAt: new Date(note.updated_at) });
        break;
    }
  }

  textAreaChange (field) {
    return e => {
      e.preventDefault();
      const textarea = document.getElementById(`textarea-${field}`);
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight+'px';
      this.setState({ [field]: e.currentTarget.value}, () => {
        this.handleTextSubmit(field);
      });
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
      this.setState({collection_ids: newCollectionIds}, () => (
        this.handleCollectionSubmit()
      ));
    };
  }

  updateColor (color) {
    return () => {
      this.setState({color: color}, () => this.handleColorSubmit());
    };
  }

  cancel () {
    this.props.router.push('/home');
  }

  handleTextSubmit (field) {
    let note;
    if (field === 'title') {
      note = {id: this.state.id, title: this.state.title.trim()};
    } else {
      note = {id: this.state.id, body: this.state.body.trim()};
    }
    if (this.state.id !== "") {
      this.props.updateNote(note);
    } else {
      this.props.createNote(note);
    }
  }

  handleColorSubmit () {
    const note = {id: this.state.id, color: this.state.color};
    if (this.state.id !== "") {
      this.props.updateNote(note);
    } else {
      this.props.createNote(note);
    }
  }

  handleCollectionSubmit () {
    let collectionIds = this.state.collection_ids.length === 0 ?
      [""] : this.state.collection_ids;
    let note;
    if (this.state.id !== "") {
      collectionIds = collectionIds.filter(id => {
        return this.props.collections[id];
      });
      note = {id: this.state.id, collection_ids: collectionIds};
      this.props.updateNote(note);
    } else {
      note = {id: this.state.id, collection_ids: collectionIds};
      this.props.createNote(note);
    }
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

  noteForm () {
    return (
      <div className={`note-form-container ${this.state.color}`}>
        <form onSubmit={this.cancel}>
          <TagListContainer collectionIds={this.state.collection_ids}/>
          {convertDate(this.state.updatedAt)}
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
