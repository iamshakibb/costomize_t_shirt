const isEditor = (state = false, action) => {
  switch (action.type) {
    case "NOTOPEN":
      return !state;
    case "OPEN":
      return false;
    default:
      return state;
  }
};

export default isEditor;
