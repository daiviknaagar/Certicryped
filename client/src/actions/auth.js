import * as api from "../api/index";

function refreshPage() {
  window.location.reload(false);
}

export const UniversitySignIn = (formData, navigate) => async (dispatch) => {
  try {
    console.log("inside");
    const response = await api.UniversitySignIn(formData);
    if (response.status === 201) console.log(response.data);
    else {
      dispatch({ type: "AUTHUniversity", data: response.data });
      //   navigate("/university");
      refreshPage();
    }
  } catch (error) {
    console.log(error);
  }
};

export const UniversitySignUp = (formData, navigate) => async (dispatch) => {
  try {
    const response = await api.UniversitySignUp(formData);
    if (response.status === 201) console.log(response.data);
    else {
      dispatch({ type: "AUTHUniversity", data: response.data });
      refreshPage();
    }
  } catch (error) {
    console.log(error);
  }
};

export const Ownersignup = (formData, navigate) => async (dispatch) => {
  try {
    console.log("inside action creater");
    const response = await api.OwnerSignUp(formData);
    if (response.status === 201) console.log(response.data);
    else {
      dispatch({ type: "AUTHOwner", data: response.data });
      refreshPage();
    }
  } catch (error) {
    console.log(error);
  }
};

export const OwnerSignIn = (formData, navigate) => async (dispatch) => {
  try {
    console.log("inside");
    const response = await api.OwnerSignIn(formData);
    if (response.status === 201) console.log(response.data);
    else {
      dispatch({ type: "AUTHOwner", data: response.data });
  
      refreshPage();
    }
  } catch (error) {
    console.log(error);
  }
};

export const GranteeSignIn = (account, navigate) => async (dispatch) => {
  try{
    console.log("inside");
    const response = await api.GranteeSignIn(account);
    if(response.status === 201) console.log(response.data);
    else{
      dispatch({type: "AuthGrantee", data: response.data});
      navigate('/granteeportal')
      refreshPage();
    }
  } catch(error) {
    console.log(error);
  }
}
