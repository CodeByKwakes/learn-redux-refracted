// a reducer takes in two things

// 1. the action (info about what happened)
// 2. copy of current state


// what happened
// action, store
// okay let me see
// store

//the reducer actually does the editing of state

function posts(state = [], action){
  console.log("The post will change")
  console.log(state, action);
  return state
}

export default posts