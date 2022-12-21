const Reducer_34 = (state, action) => {
  if (action.type === 'SHOW_ALERT') {
    return { ...state, alert: action.payload };
  }

  if (action.type === 'REMOVE_ITEM') {
    let remove_item = state.blogs.filter((item) => item.id !== action.payload);
    return { ...state, blogs: remove_item };
  }
};

export default Reducer_34;
