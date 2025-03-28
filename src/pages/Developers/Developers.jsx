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
  { id: 1, name: "Prof. B K Kanaujia", department: "Director, NITJ", image:"https://utkansh25.sirv.com/Director.jpg" , profile:"https://www.nitj.ac.in/admin/director.html"},
  { id: 2, name: "Prof. Ajay Bansal", department: "Registrar, NITJ",  image:"https://utkansh25.sirv.com/1717741345401-Passport%20Pic.jpg" , profile:"https://www.nitj.ac.in/admin/registrar.html" }
];

const faculty2 = [
  { id: 1, name: "Prof. Anish Sachdeva", department: "DSW", image:"https://utkansh25.sirv.com/18030537513.jpg" , profile:"https://departments.nitj.ac.in/dept/ipe/Faculty/6430445738bff038a780609d"},
  { id: 2, name: "Prof. Rohit Mehra", department: "DRC",  image:"https://utkansh25.sirv.com/20050251101.jpg" , profile:"https://departments.nitj.ac.in/dept/ph/Faculty/6430445b38bff038a7806a5a" }
];

const faculty3 = [
  { id: 1, name: "Dr. Indu Saini", department: "ADSW-I", image:"https://utkansh25.sirv.com/18011954316.png" , profile:"https://departments.nitj.ac.in/dept/ece/Faculty/6430445538bff038a7805caf"},
  { id: 2, name: "Dr. Anee Mohanty", department: "ADSW-II",  image:"https://utkansh25.sirv.com/22092713867.jpg" , profile:"https://departments.nitj.ac.in/dept/bt/Faculty/6430446038bff038a7807202" },
  { id: 3, name: "Dr. Nitai Basak", department: "ADRC-I",  image:"https://utkansh25.sirv.com/16061460015.jpeg" , profile:"https://departments.nitj.ac.in/dept/bt/Faculty/6430445038bff038a78046a4" },
  { id: 4, name: "Dr. Anurag Tiwari", department: "ADRC-II",  image:"https://utkansh25.sirv.com/1724257451890-Picture1.jpg" , profile:"https://departments.nitj.ac.in/dept/ch/Faculty/6430446838bff038a7807d7f" }

];

const faculty4 = [
  { id: 1, name: "Dr. Afzal Sikander", image:"https://utkansh25.sirv.com/18020663191.jpg" , profile:"https://departments.nitj.ac.in/dept/ice/Faculty/6430446838bff038a7807deb"},
  { id: 2, name: "Dr. Ashish Raman",  image:"https://utkansh25.sirv.com/23022129330.jpeg" , profile:"https://departments.nitj.ac.in/dept/ece/Faculty/6430445538bff038a7805aea" },
  { id: 3, name: "Dr. Sumit Sharma",  image:"https://utkansh25.sirv.com/19052171575.jpg" , profile:"https://departments.nitj.ac.in/dept/me/Faculty/6430446738bff038a7807cbb" },
  { id: 4, name: "Dr. Narendra Kumar",  image:"https://utkansh25.sirv.com/Photo_69247.jpeg" , profile:"https://departments.nitj.ac.in/dept/ipe/Faculty/6430446d38bff038a780895c" }

];

const faculty5 = [
  { id: 1, name: "Dr. Arvind Kumar", image:"https://utkansh25.sirv.com/19080476425.jpg" , profile:"https://departments.nitj.ac.in/dept/ph/Faculty/6430445b38bff038a7806bc5"},
  { id: 2, name: "Dr. Jaspal Kaur",  image:"https://utkansh25.sirv.com/1708510831263-unnamed.jpg" , profile:"https://departments.nitj.ac.in/dept/it/Faculty/65938d96633ad4665fa38509" },
  { id: 3, name: "Dr. Neelam Rani",  image:"https://utkansh25.sirv.com/1725103107378-NITJ.jpg" , profile:"https://departments.nitj.ac.in/dept/ce/Faculty/6430446d38bff038a7808929" },
  { id: 4, name: "Dr. Priyanka Gupta",  image:"https://utkansh25.sirv.com/1709620892714-Priyanka.jpg" , profile:"https://departments.nitj.ac.in/dept/tt/Faculty/65602b97d02be846b64e7b6c" }

];


function Card({ image, title, description, button1, button2, icon1, icon2, link }) {
  return (
    <div className="bg-white w-[18rem] shadow-xl rounded-2xl overflow-hidden border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center p-6">
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
    <div className="bg-white w-[0.1 rem] shadow-xl rounded-2xl overflow-hidden border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center p-6">
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
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button onClick={() => setSelectedCategory("developers")} className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "developers" ? "bg-yellow-500 text-black shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`}>Developers</button>
            <button onClick={() => setSelectedCategory("team")} className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "team" ? "bg-yellow-500 text-black shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`}>Team</button>
            <button onClick={() => setSelectedCategory("faculty")} className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "faculty" ? "bg-yellow-500 text-black shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`}>Faculty</button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {selectedCategory === "developers" && developers.map(dev => (
            <Card
              key={dev.id}
              image={dev.image}
              title={dev.name}
              description={dev.role}
              button1="github"
              button2="linkedin"
              icon1={<FaGithub />}
              icon2={<FaLinkedin />}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {selectedCategory === "team" &&
          <>
            {team.map(dev => (
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
          </>
          }
        </div>

        <div className="flex flex-col gap-16 justify-center">
          
          {selectedCategory === "faculty" &&
          <>
            {/* Faculty */}
            <div className="flex flex-wrap gap-8 justify-center">
              {faculty.map(fac => (
                <Card
                  key={fac.id}
                  image={fac.image}
                  title={fac.name}
                  description={fac.department}
                  button1="PATRON"
                  button2="Profile"
                  icon2={<FaUser />}
                  link={fac.profile}
                />
              ))}
            </div>

            {/* Faculty 2 */}
            <div className="flex flex-wrap gap-8 justify-center">
              {faculty2.map(fac => (
                <Card
                  key={fac.id}
                  image={fac.image}
                  title={fac.name}
                  description={fac.department}
                  button1="CHAIRPERSON"
                  button2="Profile"
                  icon2={<FaUser />}
                  link={fac.profile}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
              {faculty3.map(fac => (
                <Card
                  key={fac.id}
                  image={fac.image}
                  title={fac.name}
                  description={fac.department}
                  button1="CONVENER"
                  button2="Profile"
                  icon2={<FaUser />}
                  link={fac.profile}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
              {faculty4.map(fac => (
                <Card
                  key={fac.id}
                  image={fac.image}
                  title={fac.name}
                  // description={fac.department}
                  button1="COORDINATOR"
                  button2="Profile"
                  icon2={<FaUser />}
                  link={fac.profile}
                />
              ))}
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
              {faculty5.map(fac => (
                <Card
                  key={fac.id}
                  image={fac.image}
                  title={fac.name}
                  // description={fac.department}
                  button1="CO-COORDINATOR"
                  button2="Profile"
                  icon2={<FaUser />}
                  link={fac.profile}
                />
              ))}
            </div>
          </>
          }
        </div>
      </div>
    </div>
  );
}
