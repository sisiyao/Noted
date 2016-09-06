import React from 'react';
import NoteIndexItem from './note_index_item';
import Masonry from 'react-masonry-component';

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
    if (nextPath === '/home' && thisPath != nextPath) {
      this.props.fetchAllNotes({});
    } else if (nextPath.slice(0,7) === '/notes/' && thisPath != nextPath) {
      this.props.fetchAllNotes({collection_name: nextPath.slice(7)});
    }
  }

  listNotes () {
    return this.props.notes.map(note => {
      return <NoteIndexItem key={`${note.id}${note.title}`}
        destroyNote={this.props.destroyNote} note={note}/>;
    });
  }

  notesHeader () {
    if (this.props.location.pathname==='/home') {
      return 'All notes';
    } else {
      return `${this.props.location.pathname.slice(7)}`;
    }
  }

  render () {
    return (
      <div className="note-index">
        <div className="notes-header"> {this.notesHeader()} </div>
        <Masonry className={'my-gallery-class'} elementType={'div'}
          options={masonryOptions} disableImagesLoaded={false}
          updateOnEachImageLoad={false}>
            {this.listNotes()}
        </Masonry>
      </div>
    );
  }
}

export default NotesIndex;
