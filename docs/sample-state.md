```{
  currentUser: {
    id: 1,
    username: "guest-demo"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createNote: {errors: ["body can't be blank"]},
    createCollection: {errors: ["title can't be blank"]}
  },
  notes: {
    1: {
      title: "Fav quote",
      body: "Lalala",
      author_id: 1,
      notebook_id: 1,
      color: "red",
      image_url: "www.google.com/image2",
      collection_tags: {
        1: {
          id: 1,
          name: "quotes"
        }
      }
    }
  },
  collections: {
    1: {
      name: "quotes",
    }
  },
  collectionFilter: 1,
  searchInput: "quotes"
}```
