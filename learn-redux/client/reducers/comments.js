function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
    // console.log("Removing a comment")
    // we need to return the new state without the deleted comment
    return [
      // from the start to the one we want to delete
      ...state.slice(0, action.i),
      // after the deleted one, to the end
      ...state.slice(action.i + 1)
    ]
    default:
      return state
  }
  return state
}

function comments(state = [], action){
  // console.log("The comment will change")
  // console.log(state, action);
  if(typeof action.postId !== 'undefined'){
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

export default comments

// example for removeComment
// array
// ["wow", "neat", "cool", "sweet", "nice"]
// we want to remove "cool"
// ...state.slice(0, action.i) take from the start to the one we want to delete
// ["wow", "neat"]
//  ...state.slice(action.i + 1) takes after the deleted one, to the end
// ["sweet", "nice"]
// to end up with this final array (new state)
// ["wow", "neat", "sweet", "nice"]
     
      
      