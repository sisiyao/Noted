import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, hashHistory }
  from 'react-router';
import App from './structural/app';
import SessionFormContainer from './session_form/session_form_container';
import Home from './structural/home';
import NotesIndex from './notes/notes_index_container';
import NoteFormContainer from './notes/note_form_container';
import CollectionFormContainer from './collections/collection_form_container';

class AppRouter extends React.Component{
  constructor (props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn (nextState, replace) {
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  }

  _redirectIfLoggedIn (nextState, replace) {
    const currentState = this.context.store.getState();
    const currentUser = currentState.session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  }

  render(){
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRedirect to="/login" />
          <Route path="login" component={ SessionFormContainer }
              onEnter={this._redirectIfLoggedIn} />
          <Route path="signup" component={ SessionFormContainer }
              onEnter={this._redirectIfLoggedIn} />

        <Route path="home" component={ Home }
              onEnter={ this._ensureLoggedIn } >
            <IndexRoute component={ NotesIndex } />
          </Route>
          <Route component={ Home }>
            <Route path="/new-note" component={ NoteFormContainer } />
            <Route path="/note/:noteId" component={ NoteFormContainer } />
            <Route path="/new-collection" component={ CollectionFormContainer } />
            <Route path="/collection/:collectionId" component={ CollectionFormContainer } />
          </ Route>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
