import React from 'react';
import NoteIndexItem from './note_index_item';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};

class NotesIndex extends React.Component {
  constructor (props) {
    super(props);
    this.listNotes = this.listNotes.bind(this);
  }

  componentDidMount () {
    if (this.props.location.pathname === '/home') {
      this.props.fetchAllNotes({});
    }
    // else if (this.props.location.pathname.incudes('collection')){
    //   this.props.fetchAllNotes({collection_id: this.props.collectionFilter});
    // }
  }

  listNotes () {
    return this.props.notes.map(note => {
      return <NoteIndexItem key={`${note.id}${note.title}`} note={note}/>;
    });
  }

  render () {
    return (
      <div className="note-index">
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
