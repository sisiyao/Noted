import React from 'react';
import NoteIndexItem from './note_index_item';
import Masonry from 'react-masonry-component';
import noteSearch from '../../util/note_search_util';

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
    this.listNotes = this.listNotes.bind(this);
  }

  componentDidMount () {
    const path = this.props.location.pathname;
    if (path === '/home') {
      this.props.fetchAllNotes({});
    } else if (path.slice(0,7) === '/notes/') {
      this.props.fetchAllNotes({collection_name: path.slice(7)});
    }
  }

  componentWillReceiveProps (nextProps) {
    const thisPath = this.props.location.pathname;
    const nextPath = nextProps.location.pathname;
    if (nextPath === '/home' && thisPath !== nextPath) {
      this.props.fetchAllNotes({});
    } else if (nextPath.slice(0,7) === '/notes/' && thisPath !== nextPath) {
      this.props.fetchAllNotes({collection_name: nextPath.slice(7)});
    }
  }

  listNotes () {
    const searchParams = Object.keys(this.props.location.query)[0];
    const notes = this.props.location.pathname === '/search' && searchParams?
      noteSearch(Object.keys(this.props.location.query)[0],
      this.props.notes, this.props.collections) : this.props.notes;
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

  render () {
    const notes = this.listNotes();
    if (this.props.location.pathname === '/search' &&
      Object.keys(this.props.location.query).length === 0) {
      return (
        <div className="note-index">
          <div className="notes-header"> Type to search... </div>
          <div className="blank-notes-search">
            <i className="fa fa-cog" aria-hidden="true" /></div>
        </div>
      );
    } else {
      return (
        <div className="note-index">
          <div className="notes-header"> {`${this.notesHeader()}: ${notes.length} total`} </div>
          <Masonry className={'my-gallery-class'} elementType={'div'}
            options={masonryOptions} disableImagesLoaded={false}
            updateOnEachImageLoad={false}>
              {notes}
          </Masonry>
        </div>
      );
    }
  }
}

export default NotesIndex;
