
const INITIAL_STATE = { current: null, next: null, expanded: false}

export default(state = INITIAL_STATE, action) => {
  switch(action.type){
    case "select_library":
      const {current, next} = action.payload;
      let expand = false;
      if(current === next){
        console.log("equals");
        console.log(state.expanded);
        if(!state.expanded){
           expand = true;
        }
      }
      return {...state,
              current: action.payload.current,
              next: action.payload.next,
              expanded: expand};
    default:
      return state;
  }
}
