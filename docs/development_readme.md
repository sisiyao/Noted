# Noted

[Heroku link][heroku] **Note:** This will link to my production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Noted is a web application for collecting and organizing beautiful notes, built using Ruby on Rails and React / Redux. The inspiration for this app was derived from Google Keep and Evernote.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Notes in a tile view
- [ ] Collections for organizing notes (hybrid of notebooks & tags)
- [ ] Note colors and autosizing note text box
- [ ] Search notes by title / body / collection
- [ ] Production README [sample](../README.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-heirarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup & Front End User Authentication (Tues 8/30, Wed 8/31)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/signin components
- [ ] Style signup/signin components
- [ ] Landing component after signup/signin includes header on home page with logged in username
- [ ] Style home page header
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Sidebar & Collections Model, API, and components(Thur 9/1, Fri 9/2 AM)

**Objective:** Note collections that can be created, read, edited, and destroyed through the API.

- [ ] `Collection` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for collections (`CollectionssController`)
- [ ] JBuilder views for collections
- Collection components and respective Redux loops
  - [ ] `CollectionsIndex`
  - [ ] `CollectionsIndexItem`
  - [ ] `CollectionForm`
- [ ] Create sidebar component
- [ ] Style sidebar and collections components
- [ ] Seed collections

### Phase 3: Notes Model, API, and components (Fri 9/2 PM, Sat 9/3, Sun 9/4)

**Objective:** Notes can be created, read, edited and destroyed through the API. Notes belong to Collections.

- [ ] `Note` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for notes (`NotesController`)
- [ ] JBuilder views for notes
- Note components and respective Redux loops
  - [ ] `NotesIndex`
  - [ ] `NoteIndexItem`
  - [ ] `NoteForm`
- [ ] Integrate tile view using `React Masonry` for `NotesIndex`
- [ ] Seed notes

### Phase 4: Note collection tags (Mon 9/5, Tues 9/6)

**Objective:** Notes can be tagged with multiple collections. Notes can be viewed by collection.

- [ ] `Collection Taggings` join table
- [ ] Fetching collection tags for notes
- [ ] Adding, editing, removing collection tags to notes
- [ ] Style collection tag components
- [ ] Viewing notes by collection. Update `NotesController#index` to accept collection filter params.

### Phase 5: Search (Wed 9/7, Thurs 9/8 AM)

**Objective:** Can search for notes by keywords. Search will match results in title, body, and collection tags.

- [ ] Update `NotesController#index` to accept search input params.
- [ ] Create and style search component for `NoteSearchDefault` which shows when search bar is clicked in but has no input
- [ ] Redux cycle for fetching and receiving search results from search input
- [ ] Search results auto update as user types

### Phase 6: Allow Styling for Notes (Thurs 9/8 PM, Fri 9/9 AM)

**Objective:** Allow color choices for notes. Create autosizing note text boxes.

- [ ] Add color options for notes. Save color to database
- [ ] Render color on notes index and note form components
- [ ] Create autosizing note text boxes that expand as you write / hit enter
- [ ] Render note text boxes with the correct text box height
- [ ] Render notes on note index with new line spacing. Cut off notes on note index after a certain amount of text

### Bonus Features (TBD)
- [ ] Collection search in edit collections dropdown
- [ ] New collection in edit collections dropdown
- [ ] Infinite scroll
- [ ] Collection and note stats
- [ ] Add images to notes. Images show up in tile view. Limiting to 1 image per note.
- [ ] IBM Watson API for AI categorization of notes (natural language classifiers)
- [ ] Search ranking
- [ ] Autosave
- [ ] Changelogs for notes
- [ ] Set reminders on notes
