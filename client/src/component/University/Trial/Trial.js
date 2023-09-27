import React, { useState } from "react";
import { connect } from "../../../functions";
import { useDispatch } from "react-redux";
import { Container, TextField, Button } from "@material-ui/core";
import { UniversitySignIn, UniversitySignUp } from "../../../actions/auth";
import { useNavigate } from "react-router-dom";
import "./style.css";

function LoginForm() {
  const [loginFormData, setLoginFormData] = useState({
    UniversityEmail: "",
    UniversityPassword: "",
  });

  const [signupFormData, setSignupFormData] = useState({
    UniversityName: "",
    UniversityEmail: "",
    UniversityPassword: "",
    UniversityConfirmPassword: "",
    Branch: "",
    UniversityPublicKey: "",
    BranchPublicKey: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log(loginFormData);
    console.log("outside");
    const a = await connect();

    if (a) {
      console.log(dispatch(UniversitySignIn(loginFormData, navigate)));
    }
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    console.log(signupFormData);
    dispatch(UniversitySignUp(signupFormData, navigate));
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Your Email"
                            id="logemail"
                            autoComplete="off"
                            value={loginFormData.UniversityEmail}
                            onChange={(e) =>
                              setLoginFormData({
                                ...loginFormData,
                                UniversityEmail: e.target.value,
                              })
                            }
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                            value={loginFormData.UniversityPassword}
                            onChange={(e) =>
                              setLoginFormData({
                                ...loginFormData,
                                UniversityPassword: e.target.value,
                              })
                            }
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" className="btn mt-4" onClick={handleLoginSubmit}>
                          submit
                        </a>
                        <p className="mb-0 mt-4 text-center">
                          <a href="#0" className="link">
                            Forgot your password?
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <div className="form-group">
                          <input
                            type="text"
                            name="logname"
                            className="form-style"
                            placeholder="Your Full Name"
                            id="logname"
                            autoComplete="off"
                            value={signupFormData.UniversityName}
                            onChange={(e) =>
                              setSignupFormData({
                                ...signupFormData,
                                UniversityName: e.target.value,
                              })
                            }
                          />
                          <i className="input-icon uil uil-user"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Your Email"
                            id="logemail"
                            autoComplete="off"
                            value={signupFormData.UniversityEmail}
                            onChange={(e) =>
                              setSignupFormData({
                                ...signupFormData,
                                UniversityEmail: e.target.value,
                              })
                            }
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                            value={signupFormData.UniversityPassword}
                            onChange={(e) =>
                              setSignupFormData({
                                ...signupFormData,
                                UniversityPassword: e.target.value,
                              })
                            }
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logconfirmpass"
                            className="form-style"
                            placeholder="Confirm Password"
                            id="logconfirmpass"
                            autoComplete="off"
                            value={signupFormData.UniversityConfirmPassword}
                            onChange={(e) =>
                              setSignupFormData({
                                ...signupFormData,
                                UniversityConfirmPassword: e.target.value,
                              })
                            }
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="text"
                            name="logbranch"
                            className="form-style"
                            placeholder="Branch"
                            id="logbranch"
                            autoComplete="off"
                            value={signupFormData.Branch}
                            onChange={(e) =>
                              setSignupFormData({
                                ...signupFormData,
                                Branch: e.target.value,
                              })
                            }
                          />
                          <i className="input-icon uil uil-building"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="text"
                            name="loguniversitypublickey"
                            className="form-style"
                            placeholder="University Public Key"
                            id="loguniversitypublickey"
                            autoComplete="off"
                            value={signupFormData.UniversityPublicKey}
                            onChange={(e) =>
                              setSignupFormData({
                                ...signupFormData,
                                UniversityPublicKey: e.target.value,
                              })
                            }
                          />
                          <i className="input-icon uil uil-key-skeleton"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="text"
                            name="logbranchpublickey"
                            className="form-style"
                            placeholder="Branch Public Key"
                            id="logbranchpublickey"
                            autoComplete="off"
                            value={signupFormData.BranchPublicKey}
                            onChange={(e) =>
                              setSignupFormData({
                                ...signupFormData,
                                BranchPublicKey: e.target.value,
                              })
                            }
                          />
                          <i className="input-icon uil uil-key-skeleton"></i>
                        </div>
                        <a href="#" className="btn mt-4" onClick={handleSignupSubmit}>
                          submit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
