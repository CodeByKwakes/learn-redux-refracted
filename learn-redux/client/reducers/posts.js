// a reducer takes in two things

// 1. the action (info about what happened)
// 2. copy of current state


// what happened
// action, store
// okay let me see
// store

//the reducer actually does the editing of state

function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES' :
    // return the updated state
    console.log("Incrementing Likes!!!");
    const i = action.index
    return [
      ...state.slice(0,i), // before the one we are updating
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1), // after the one we are updating
    ]
    default:
      console.log("The post will change")
      console.log(state, action);
      return state
  }
}

export default posts