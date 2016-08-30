### List of all components
* AuthFormContainer
* AuthForm
* Home
* HeaderContainer
* Header
* NoteSearchBar
* Sidebar
* CollectionsIndexContainer
* CollectionsIndex
* CollectionsIndexItem
* NotesIndexContainer
* NotesIndexHeader
* NotesIndex
* NotesIndexItem
* NoteFormContainer
* NoteForm
* NoteRichTextTools
* NoteCollectionTags
* AddNoteCollectionTagsContainer
* AddNoteCollectionTags
* CollectionFormContainer
* CollectionForm
* NoteSearchContainer
* NoteSearchDefault


### Component Heirarchy
Each bolded section corresponds to at least one route.
AuthFormContainer corresponds to two routes (sign up & sign in).
NoteFormContainer corresponds to two routes (new note & existing note).
CollectionFormContainer corresponds to two routes (new collection & edit collection).

**AuthFormContainer**
* AuthForm - Needs errors from state

**Home**
* HeaderContainer
  * Header - Needs current user from state
  * NoteSearchBar - Needs search input from state. Changes url to "/search" when user clicks into search bar.
* Sidebar
  * CollectionsIndexContainer
    * CollectionIndex  - Needs collection from state.
      * CollectionIndexItem
* NotesIndexContainer - Shown by default on home page. I want this to unmount at every other route...would I use onLeave for this? Since this is the root url ("/"), I'm assuming I can't use IndexRoute but not sure.
  * NotesIndexHeader
  * NotesIndex - Needs notes from state.
    * NoteIndexItem

**NoteFormContainer**
* NoteForm - For existing note, needs access to notes in state and route params to know which note to display. Save when user clicks done. Bonus - autosave every few seconds (for a new note, autosave if anything is typed in form).
  * NoteRichTextTools
  * NoteCollectionTags - This will be used to display selected collection tags on the note form. Selected note id can be passed down as props from NoteForm.
  * AddNoteCollectionTagsContainer
    * AddNoteCollectionTags - Needs collections from state. This will be a dropdown checkbox list inside the form. This dropdown is super complicated the way I've mocked it up so I may need to change this. (a little confused as to how to structure this, specifically not sure how to create a new collection in the same dropdown as adding collection tags to a note)

**NotesIndexContainer**
(shown on home, collection filter, and search routes)
* NotesIndexHeader - needs filter from state; bonus - add collection stats
* NotesIndex
  * NoteIndexItem - needs notes and filter from state

**CollectionFormContainer**
* CollectionForm - needs errors form state

**NoteSearchContainer**
* NoteSearchDefault
  * Mounts a static component when user clicks into the search box.
* NotesIndexContainer
  * NotesIndexHeader
  * NotesIndex - needs search input from state
    * NoteIndexItem


## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/home" | "Home" |
| "/new-note" | "NoteFormContainer" |
| "/home/note/:noteId" | "NoteFormContainer" |
| "/home/collection/:collectionId/notes" | "NotesIndexContainer" |
| "/new-collection" | "CollectionFormContainer" |
| "/edit-collection" | "CollectionFormContainer" |
| "/search" | "NoteSearchContainer" |
