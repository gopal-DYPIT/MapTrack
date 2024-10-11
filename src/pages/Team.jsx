import React from "react";
import HomeNavbar from "./HomeNavbar";

const TeamDetails = () => {
  const teamMembers = [
    {
      name: "Gopal Kadam",
      img: "../public/teamImg/Gopal.jpg", // Use require to correctly load the local image
      bio: `Student at Dr. D.Y. Patil Institute of Technology, Pimpri, Pune.`,
    },
    {
      name: "Harshvardhan Mohite",
      img: "https://via.placeholder.com/150",
      bio: `Student at Dr. D.Y. Patil Institute of Technology, Pimpri, Pune.`,
    },
    {
      name: "Anish Jawale",
      img: "https://via.placeholder.com/150",
      bio: `Student at Dr. D.Y. Patil Institute of Technology, Pimpri, Pune.`,
    },
    {
      name: "Vaibhav Solapure",
      img: "https://via.placeholder.com/150",
      bio: `Student at Dr. D.Y. Patil Institute of Technology, Pimpri, Pune.`,
    },
  ];

  const coordinators = [
    {
      name: "Dr. Atul Kathole",
      img: "https://via.placeholder.com/150",
      bio: "Teacher",
    },
    {
      name: "Mrs. Suvarna Patil",
      img: "https://via.placeholder.com/150",
      bio: "Teacher",
    },
  ];

  return (
    <>
      <HomeNavbar />
      <div className="flex justify-center mt-12">
        <h1 className="text-5xl font-semibold text-center text-gray-800">
          Our Team
        </h1>
      </div>
      <div className="w-3/4 m-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white shadow-2xl rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-58 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <h3 className="text-sm font-medium">{member.role || ""}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-center">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <h2 className="text-4xl font-semibold text-center text-gray-800">
          Team Coordinators
        </h2>
      </div>
      <div className="w-3/4 m-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        {coordinators.map((coordinator) => (
          <div
            key={coordinator.name}
            className="bg-white shadow-2xl rounded-xl overflow-hidden transition transform hover:scale-105 hover:shadow-xl mx-auto w-full max-w-xs"
          >
            <div className="relative">
              <img
                src={coordinator.img}
                alt={coordinator.name}
                className="w-full h-58 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4">
                <h2 className="text-xl font-semibold">{coordinator.name}</h2>
                <h3 className="text-sm font-medium">{coordinator.role || ""}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-center">{coordinator.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamDetails;
