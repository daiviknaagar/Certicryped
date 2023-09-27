import * as api from "../api/index";

export const getuniversites = () => async (dispatch) => {
  try {
    console.log("inside getUniversitues");
    const response = await api.fetchUniversites();
    dispatch({ type: "FETCH_ALL", data: response.data });
  } catch (error) {
    console.log(error);
  }
};



export const updateUniversity = (updatedUniversity) => async (dispatch) => {
  try {
    console.log("inside updateUniversitues");
    const response = await api.updateUniversity(updatedUniversity);
    dispatch({ type: "UPDATE", data: updatedUniversity });
  } catch (error) {
    // console.log(error);
  }
};

export const revokeUniversity= () => {

};