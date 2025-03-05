import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import { FaGithub, FaLinkedin, FaEnvelope, FaUser } from "react-icons/fa";

const developers = [
  { id: 1, name: "Jayant Joshi", role: "Full Stack Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 3, name: "Neha Sharma", role: "Backend Developer", github: "#", linkedin: "#" }
];

const team = [
  { id: 1, name: "Jayant Joshi", role: "Full Stack Developer", github: "#", linkedin: "#" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 3, name: "Neha Sharma", role: "Backend Developer", github: "#", linkedin: "#" }
];

const faculty = [
  { id: 1, name: "Dr. Ramesh Kumar", department: "Computer Science", email: "ramesh@univ.edu" },
  { id: 2, name: "Prof. Anjali Mehta", department: "Data Science", email: "anjali@univ.edu" }
];

function Card({ image, title, description, button1, button2, icon1, icon2 }) {
  return (
    <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-3xl">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 border-b pb-3">{title}</h3>
        <p className="text-gray-700 mt-3">{description}</p>
        <div className="mt-5 flex justify-center gap-4">
          <button className="flex items-center gap-2 bg-yellow-500 text-black font-bold py-2 px-5 rounded-lg shadow-lg hover:bg-yellow-600 transition">
            {icon1}{button1}
          </button>
          <button className="flex items-center gap-2 bg-yellow-500 text-black font-bold py-2 px-5 rounded-lg shadow-lg hover:bg-yellow-600 transition">
            {icon2}{button2}
          </button>
        </div>
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
        <div
          className="overlay absolute top-0 left-0 w-full h-full inset-10"
          style={{
            backdropFilter: "blur(2px)",
            background:
              "linear-gradient(8deg, black 10%, rgba(36, 30, 0, 0.203) 100%)",
          }}
        >
          <h1 className="mt-60 text-white z-10 md:text-8xl sm:text-6xl text-4xl font-semibold py-4 w-full text-center">
            Announcing Soon...
          </h1>
        </div>

        {/* Filter Buttons */}
        {/* <div className="flex justify-center gap-6 mb-8">
            <button onClick={() => setSelectedCategory("developers")} className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "developers" ? "bg-yellow-500 text-black shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`}>Developers</button>
            <button onClick={() => setSelectedCategory("team")} className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "team" ? "bg-yellow-500 text-black shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`}>Team</button>
            <button onClick={() => setSelectedCategory("faculty")} className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "faculty" ? "bg-yellow-500 text-black shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`}>Faculty</button>
        </div> */}

        {/* Cards Section */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCategory === "developers" && developers.map(dev => (
            <Card
              key={dev.id}
              image="/avatar.jpeg"
              title={dev.name}
              description={dev.role}
              button1="GitHub"
              button2="LinkedIn"
              icon1={<FaGithub />}
              icon2={<FaLinkedin />}
            />
          ))}

          {selectedCategory === "team" && team.map(dev => (
            <Card
              key={dev.id}
              image="/avatar.jpeg"
              title={dev.name}
              description={dev.role}
              button1="GitHub"
              button2="LinkedIn"
              icon1={<FaGithub />}
              icon2={<FaLinkedin />}
            />
          ))}

          {selectedCategory === "faculty" && faculty.map(fac => (
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
        </div> */}
      </div>
    </div>
  );
}
