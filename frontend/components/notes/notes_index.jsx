import React from 'react';
import NoteIndexItem from './note_index_item';
import Masonry from 'react-masonry-component';
import noteSearch from '../../util/note_search_util';
import noteFilter from '../../util/note_filter_util';
import bindAll from 'lodash.bindall';

const masonryOptions = {
    itemSelector: '.note-index-item',
    gutter: 15,
    fitWidth: true,
    stagger: 30,
    transitionDuration: '0.2s'
};

class NotesIndex extends React.Component {
  constructor (props) {
    super(props);
    bindAll(this, ['listNotes', 'searchDefaultView', 'listNotesView']);
  }

  componentDidMount () {
    this.props.fetchAllNotes();
  }

  listNotes () {
    const searchParams = Object.keys(this.props.location.query)[0];

    let notes;
    if (this.props.location.pathname === '/search' && searchParams) {
      notes = noteSearch(Object.keys(this.props.location.query)[0],
      this.props.notes, this.props.collections);
    } else if (this.props.location.pathname === '/home') {
      notes = this.props.notes;
    } else {
      notes = noteFilter(this.props.params.collectionName, this.props.notes, this.props.collections);
    }

    return notes.map(note => {
      return <NoteIndexItem key={`${note.id}${note.title}`}
        destroyNote={this.props.destroyNote} note={note}/>;
    });
  }

  notesHeader () {
    if (this.props.location.pathname === '/home') {
      return 'All notes';
    } else if (this.props.location.pathname === '/search') {
      return `Search results for "${Object.keys(this.props.location.query)[0]}"`;
    } else {
      return `${this.props.location.pathname.slice(7)}`;
    }
  }

  searchDefaultView () {
    return (
      <div className="note-index">
        <div className="notes-header"> Type to search... </div>
        <div className="blank-notes-search">
          <i className="fa fa-cog" aria-hidden="true" /></div>
      </div>
    );
  }

  listNotesView (notes) {
    return (
      <div className="note-index">
        <div className="notes-header">
          {`${this.notesHeader()}: ${notes.length} total`}
        </div>
        <Masonry className={'my-gallery-class'} elementType={'div'}
          options={masonryOptions} disableImagesLoaded={false}
          updateOnEachImageLoad={false}>
            {notes}
        </Masonry>
      </div>
    );
  }

  render () {
    const notes = this.listNotes();
    if (this.props.location.pathname === '/search' &&
      Object.keys(this.props.location.query).length === 0) {
      return this.searchDefaultView();
    } else if (notes.length === 0 && this.props.location.pathname === '/home') {
      return <div></div>;
    } else {
      return this.listNotesView(notes);
    }
  }
}

export default NotesIndex;
