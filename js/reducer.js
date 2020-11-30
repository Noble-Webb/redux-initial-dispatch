let state;
//sets the initial value of state in change state
function changeState(state = { count: 0 }, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

// render()

// shows the initial state by sending inane type triggering default
// works as it calls the changeState function which
// sets the initial state count to 0
dispatch({ type: '@@INIT' })

// calls the function to trigger increase case 
// dispatch({type: "INCREASE_COUNT"})
