export const fetchAllCollections = (success) => {
  $.ajax({
    url: "/api/collections",
    method: "GET",
    success
  });
};

export const fetchSingleCollection = (collectionId, success) => {
  $.ajax({
    url: `/api/collections/${collectionId}`,
    method: "GET",
    success
  });
};

export const createCollection = (collection, success, error) => {
  $.ajax({
    url: "/api/collections",
    method: "POST",
    data: {collection: {name: collection.name}},
    success,
    error
  });
};

export const updateCollection = (collection, success, error) => {
  $.ajax({
    url: `/api/collections/${collection.id}`,
    method: "PATCH",
    data: {collection: {name: collection.name}},
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
