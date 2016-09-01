export const fetchAllCollections = (userId, success) => {
  $.ajax({
    url: "/api/collections",
    method: "GET",
    data: {user_id: userId},
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
    method: "DELTE",
    success,
    error
  });
};

// testing
window.fetchAllCollections = fetchAllCollections;
