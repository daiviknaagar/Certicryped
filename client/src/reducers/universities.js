const approval = (state = { universities: [] }, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...state, universities: action?.data };
      
    case "UPDATE":
      return {
        ...state,
        universities: state.universities.filter(
          (university) => university._id !== action?.data._id
        ),
      };
      
    case "LOGOUT":
      localStorage.clear();
      return { ...state, authData: null };
      
    default:
      return state;
  }
};

export default approval;
