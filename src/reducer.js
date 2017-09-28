const defaultState = {
  feeds : []
}

const feedsReducer = (state = Object.assign({},defaultState), action) => {
  switch (action.type) {
    case "add":
      state.feeds.push(action.feed);
      break;
    default:
      break;
  }
  return state;
}


export default { feedsReducer }
