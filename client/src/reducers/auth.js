const authReducer = (state = { UniversityAuthData: null, OwnerAuthData: null }, action) => {
  switch (action.type) {
    case 'AUTHUniversity':
      // console.log(action?.data);
      localStorage.setItem("Universityprofile", JSON.stringify({ ...action?.data }));

      return { ...state, UniversityAuthData: action?.data };
    // const rahil = 4;
    // return rahil;
    // console.log("inReducer");
    // console.log(action.data);
    case 'AUTHOwner':
      // console.log(action?.data);
      localStorage.setItem("OwnerProfile", JSON.stringify({ ...action?.data }));

      return { ...state, OwnerAuthData: action?.data };
    case "LOGOUT":
      localStorage.clear();
      return { ...state, UniversityAuthData: null, OwnerAuthData: null };
    default:
      return state;
  }
};

export default authReducer;
