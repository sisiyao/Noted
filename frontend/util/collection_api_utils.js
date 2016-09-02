export const fetchAllCollections = (success) => {
  $.ajax({
    url: "/api/collections",
    method: "GET",
    success
  });
};

export const createCollection = (collection, success, error) => {
  $.ajax({
    url: "/api/collections",
    method: "POST",
    data: {collection: collection},
    success,
    error
  });
};

export const updateCollection = (collection, success, error) => {
  $.ajax({
    url: `/api/collections/${collection.id}`,
    method: "PATCH",
    data: {collection: collection},
    success,
    error
  });
};

export const destroyCollection = (collectionId, success, error) => {
  $.ajax({
    url: `/api/collections/${collectionId}`,
    method: "DELETE",
    success,
    error
  });
};

// testing
window.fetchAllCollections = fetchAllCollections;
