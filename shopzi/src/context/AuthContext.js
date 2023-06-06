import { createContext, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const localStorageData = JSON.parse(localStorage.getItem("loginDetails"));

  const [loginToken, setLoginToken] = useState(localStorageData?.token);
  const [currentUser, setCurrentUser] = useState(localStorageData?.user);

  const signInHandler = async (userLoginDetails) => {
    try {
      console.log(userLoginDetails.email);

      const response = await axios.post("/api/auth/login", {
        email: userLoginDetails.email,
        password: userLoginDetails.password,
      });

      if (response.status === 200) {
        // saving token and userDetails in local storage

        localStorage.setItem(
          "loginDetails",
          JSON.stringify({
            user: response.data.foundUser,
            token: response.data.encodedToken,
          })
        );

        setLoginToken(response.data.encodedToken);
        setCurrentUser(response.data.foundUser);
        toast.success("LoginIn Successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state?.from.pathname ?? "/");
      }
      //   console.log(response);
    } catch (error) {
      //   console.error(error);
      toast.error(error.response.data.errors[0], {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const signUpHandler = async (userSignupDetails) => {
    // console.log(userSignupDetails);
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: userSignupDetails.firstName,
        lastName: userSignupDetails.lastName,
        email: userSignupDetails.email,
        password: userSignupDetails.password,
        confirmPassword: userSignupDetails.confirmPassword,
      });
      console.log(response);
      if (response.status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ token: response.data.encodedToken })
        );
        setLoginToken(response.data.encodedToken);
        // alert("signup successfully login to continue");

        navigate("/sign-in");

        toast.success("Sign-Up Successfully!!", {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      //   console.error(error);
      toast.error(error.response.data.errors[0], {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{ signInHandler, signUpHandler, loginToken, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
