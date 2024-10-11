import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import HomeNavbar from "./HomeNavbar";

const provider = new GoogleAuthProvider();
const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in!");
      navigate("/user");
    } catch (error) {
      console.log("Error logging in:", error);
      alert("Invalid email/password", error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("Signed up with Google!");
      navigate("/user");
    } catch (error) {
      console.log("Error signing up with Google:", error);
      alert("Error signing up with Google:", error);
    }
  };

  return (
    <>
      <HomeNavbar />
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start"
        // style={{ backgroundImage: "url(BG1.jpg)" }}
      >
        {/* <h1 className="text-4xl  text-white font-bold mt-8 mb-8 ml-2">Sign Up</h1> */}
        <h1 className="text-4xl text-white font-primaryRegular mt-8 mb-8 font-bold flex items-center  justify-center">
          MyprofileApp
        </h1>
        <div className="w-96 bg-white bg-opacity-50 rounded-md p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-white  font-normal text-lg  font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-normal text-lg font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 w-full justify-center align-middle hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <span>
              <p className="text-gray-700 text-center mt-4">Or</p>
            </span>
            <div className="align-middle justify-center ml-14 mt-4">
              <button
                onClick={handleGoogleSignup}
                type="button"
                className="flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-opacity-50 rounded-lg shadow-sm px-4 py-2"
              >
                <img
                  className="mr-2"
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="google"
                />
                <span className="text-gray-700 font-medium">
                  Sign in with Google
                </span>
              </button>
            </div>
            <div className="mt-4">
              <p className="text-center">Not a user?</p>
              <Link to="/signup">
                <button className=" ml-28 bg-white hover:bg-gray-300 text-sm font-semibold py-2 px-4 mt-4  rounded focus:outline-none focus:shadow-outline">
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
