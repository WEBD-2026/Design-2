import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope, FaUser } from "react-icons/fa";

const developers = [
  { id: 1, name: "Jayant Joshi", role: "Full Stack Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 3, name: "Neha Sharma", role: "Backend Developer", github: "#", linkedin: "#" }
];

const team2 = [
  { id: 4, name: "John Doe", role: "UX Designer", github: "#", linkedin: "#" },
  { id: 5, name: "Jane Smith", role: "Project Manager", github: "#", linkedin: "#" }
];

const team = [
  { id: 1, name: "Jayant Joshi", role: "Full Stack Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 3, name: "Neha Sharma", role: "Backend Developer", github: "#", linkedin: "#" }
];

const faculty = [
  { id: 1, name: "Dr. Ramesh Kumar", department: "Computer Science", email: "ramesh@univ.edu" },
  { id: 1, name: "Dr. Ramesh Kumar", department: "Computer Science", email: "ramesh@univ.edu" },

];


function Card({ image, title, description, button1, button2, icon1, icon2, link }) {
  return (
    <div className=" bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center p-6">
      {/* Image Section */}
      <div className="w-40 h-40 flex justify-center items-center overflow-hidden rounded-full border border-gray-300 shadow-lg">
        <img src={image} alt={title} className="w-full h-full object-cover object-center" />
      </div>

      {/* Details Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>

      {/* Buttons Section */}
      <div className="mt-5 flex flex-col gap-4 w-full max-w-xs">
        <button className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-xl transition-all duration-300">
          {icon1} {button1}
        </button>
        <button onClick={() => window.open(link)} className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-xl transition-all duration-300">
          {icon2} {button2}
        </button>
      </div>
    </div>



  );
}

function Card2({ image, title, description, button1, button2, icon1, icon2, link }) {
  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center p-6">
      {/* Image Section */}
      <div className="w-40 h-40 flex justify-center items-center overflow-hidden rounded-full border border-gray-300 shadow-lg">
        <img src={image} alt={title} className="w-full h-full object-cover object-center" />
      </div>

      {/* Details Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
      {/* Buttons Section */}
      <div className="mt-5 flex flex-col gap-4 w-full max-w-xs">
        <button onClick={() => window.open(link)} className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-xl transition-all duration-300">
          {icon2} {button2}
        </button>
      </div>
    </div>



  );
}

export default function DevelopersPage() {
  const [selectedCategory, setSelectedCategory] = useState("team");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Navbar />
      <div className="container mx-auto my-16">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-yellow-400">Meet Our Team</h1>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={() => setSelectedCategory("developers")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "developers"
              ? "bg-yellow-500 text-black shadow-lg"
              : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
          >
            Developers
          </button>
          <button
            onClick={() => setSelectedCategory("team")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "team"
              ? "bg-yellow-500 text-black shadow-lg"
              : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
          >
            Team
          </button>
          <button
            onClick={() => setSelectedCategory("faculty")}
            className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "faculty"
              ? "bg-yellow-500 text-black shadow-lg"
              : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
          >
            Faculty
          </button>
        </div>

        {/* Cards Section */}
        <div className="w-50 h-50 grid md:grid-cols-2 lg:grid-cols-auto gap-8">
          {selectedCategory === "developers" &&
            developers.map((dev) => (
              <Card
                key={dev.id}
                image={dev.image}
                title={dev.name}
                description={dev.role}
                button1="github"
                button2={dev.linkedin}
                icon1={<FaGithub />}
                icon2={<FaLinkedin />}
              />
            ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {selectedCategory === "team" && (
            <>
              {team.map((dev) => (
                <Card
                  key={dev.id}
                  image={dev.image}
                  title={dev.name}
                  description={dev.role}
                  button1={dev.mobile}
                  button2="LinkedIn"
                  icon1={<FaPhone />}
                  icon2={<FaLinkedin />}
                  link={dev.linkedin}
                />
              ))}

              <div className="h-10"></div>

              {team2.map((dev) => (
                <Card2
                  key={dev.id}
                  image={dev.image}
                  title={dev.name}
                  description={dev.role}
                  button2="LinkedIn"
                  icon1={<FaPhone />}
                  icon2={<FaLinkedin />}
                />
              ))}
            </>
          )}

          {selectedCategory === "faculty" &&
            faculty.map((fac) => (
              <Card
                key={fac.id}
                image="/avatar.jpeg"
                title={fac.name}
                description={fac.department}
                button1="Email"
                button2="Profile"
                icon1={<FaEnvelope />}
                icon2={<FaUser />}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
