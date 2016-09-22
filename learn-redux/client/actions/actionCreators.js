// action is an object with some information about what happened
// and what needs to change

//increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
    // can also do:-
    // index: index
  }
}

// add comment
export function addComment(postId, author, comment) {
  console.log("Dispatching add comment")
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

