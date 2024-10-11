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
        className="min-h-screen pt-8 bg-cover bg-center flex flex-col items-center justify-start"
        // style={{ backgroundImage: "url(BG1.jpg)" }}
      >
        

        <h1 className="text-4xl text-white font-primaryRegular mt-4 mb-8 font-bold flex items-center justify-center">
          MyprofileApp
        </h1>
        <div className="w-full max-w-md bg-white bg-opacity-50 rounded-md p-8 sm:w-96 shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
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
                className="block text-white font-bold mb-2"
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
            <div className="flex items-center justify-between mb-4">
              <button
                className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <span>
              <p className="text-gray-700 text-center mt-4">Or</p>
            </span>
            <div className="flex justify-center mt-4">
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
            <div className="mt-4 text-center">
              <p className="text-gray-700">Not a user?</p>
              <Link to="/signup">
                <button className="w-full bg-white hover:bg-gray-300 text-sm font-semibold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline">
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
        <h2 className="text-white mt-4 bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <span className="block text-lg font-semibold mb-2">
            Dummy Login Credentials:
          </span>
          <span className="block">
            <span className="font-semibold">Email:</span> dummy123@gmail.com
          </span>
          <span className="block">
            <span className="font-semibold">Password:</span> 123456
          </span>
        </h2>
      </div>
    </>
  );
};

export default LoginForm;
