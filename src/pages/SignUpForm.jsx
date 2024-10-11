import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { storage } from "../firebase";
import { uploadBytes, ref } from "firebase/storage";
import HomeNavbar from "./HomeNavbar";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!name || !email || !password || !image) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${user.uid}/profilePic.jpg`);
      await uploadBytes(storageRef, image);

      alert("Signed up successfully!");
      navigate("/signin");
    } catch (error) {
      console.error("Error signing up:", error);
      alert(`Error signing up: ${error.message}`);
    }
  };

  const handleContinueToSignin = () => {
    navigate("/signin");
  };

  return (
    <>
      <HomeNavbar />
      <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-start">
        <h1 className="text-4xl text-white font-primaryRegular mt-8 mb-8 font-bold flex items-center justify-center">
          MyProfileApp
        </h1>
        <div className="w-full max-w-md bg-white bg-opacity-50 rounded-md p-8 sm:w-96">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-white font-normal text-lg font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-white font-normal text-lg font-bold mb-2"
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
                htmlFor="file"
              >
                Avatar
              </label>
              <input
                className="shadow border-white border-4 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="file"
                type="file"
                accept=".png, .jpg, .jpeg"
                placeholder="Image"
                onChange={handleImageChange}
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

            <div className="mb-6">
              <label
                className="block text-white font-normal text-lg font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>

            <div className="flex items-center justify-between flex-col sm:flex-row">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto mb-2 sm:mb-0"
                type="submit"
              >
                Sign Up
              </button>
              <button
                onClick={handleContinueToSignin}
                type="button"
                className="flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-opacity-50 rounded-lg shadow-sm px-4 py-2 w-full sm:w-auto"
              >
                <span className="text-gray-700 font-medium">
                  Continue to Signin
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
