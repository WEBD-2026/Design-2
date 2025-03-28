import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope, FaUser } from "react-icons/fa";

const developers = [
  { id: 1, name: "Shubham K Garg", role: "Web-Dev Lead", github: "https://github.com/skgarg18", linkedin: "https://www.linkedin.com/in/shubham-k-g-6aa4b4281/"  , image:"https://utkansh25.sirv.com/Untitled%20design%20(3).png"},
  { id: 2, name: "Devansh Sharma", role: "Web-Dev Lead", github: "https://github.com/Devansh-react", linkedin: "https://www.linkedin.com/in/devansh-davy16/" , image:"https://utkansh25.sirv.com/Untitled%20design%20(4).png" },
];

const team1 = [
  { id: 1, name: "Shubham Grover", image: "https://utkansh25.sirv.com/1.png",  phone: "78766-00077", linkedin: "https://www.linkedin.com/in/shubhamgrover01/" },
  { id: 2, name: "Shubham K Garg", image: "https://utkansh25.sirv.com/Untitled%20design%20(3).png", phone: "75086-19568", linkedin: "https://www.linkedin.com/in/shubham-k-g-6aa4b4281/" },
  { id: 3, name: "Shivam Prashar", image: "https://utkansh25.sirv.com/Untitled%20design.png", phone: "88091-90913", linkedin: "https://www.linkedin.com/in/shivam-prashar-78368b227/" }

];

const team2 = [
  { id: 1, name: "Aryan Panigrahy", image: "https://utkansh25.sirv.com/4.png",  role: "CULTURAL HEAD", linkedin: "#" },
  { id: 2, name: "Geetika Chopra", image: "https://utkansh25.sirv.com/3.png", role: "CULTURAL HEAD", linkedin: "https://www.linkedin.com/in/geetika8/" },
  { id: 3, name: "Apurva", image: "https://utkansh25.sirv.com/4.png",  role: "TECHNICAL HEAD", linkedin: "#" },
  { id: 4, name: "Pooja Gurjar", image: "https://utkansh25.sirv.com/3.png", role: "TECHNICAL HEAD", linkedin: "#" },
  { id: 5, name: "Vipul Jain", image: "https://utkansh25.sirv.com/Untitled%20design%20(1).png", role: "FINANCE HEAD", linkedin: "https://www.linkedin.com/in/vipul-jain-b35ba725a/" },
  { id: 6, name: "Isha Khoda", image: "https://utkansh25.sirv.com/Untitled%20design%20(2).png", role: "FINANCE HEAD", linkedin: "#" },
  { id: 7, name: "Sameer Chaurasia", image: "https://utkansh25.sirv.com/4.png",  role: "MARKETING HEAD", linkedin: "#" },
  { id: 8, name: "Akash Sharma", image: "https://utkansh25.sirv.com/Untitled%20design/9.png", role: "PR HEAD", linkedin: "#" },
  { id: 9, name: "Bhakti Chopra", image: "https://utkansh25.sirv.com/4.png",  role: "PR HEAD", linkedin: "#" },
  { id: 10, name: "Jashanpreet Kaur", image: "https://utkansh25.sirv.com/3.png", role: "DIGITAL HEAD", linkedin: "#" },
  { id: 11, name: "Sailesh", image: "https://utkansh25.sirv.com/4.png",  role: "SOCIAM MEDIA HEAD", linkedin: "#" },
  { id: 12, name: "Shashank Paliwal", image: "https://utkansh25.sirv.com/Untitled%20design/16.png", role: "WEB-DEV HEAD", linkedin: "#" },
  { id: 13, name: "Inder", image: "https://utkansh25.sirv.com/Untitled%20design/15.png",  role: "REFRESHMENT HEAD", linkedin: "#" },
  { id: 14, name: "Partik", image: "https://utkansh25.sirv.com/Untitled%20design/10.png", role: "VENUE MANAGEMENT HEAD", linkedin: "#" },
  { id:15, name: "Mukul", image: "https://utkansh25.sirv.com/Untitled%20design/11.png",  role: "DISCIPLINE HEAD", linkedin: "#" },
  { id: 16, name: "Manish Nanda", image: "https://utkansh25.sirv.com/Untitled%20design/14.png", role: "DISCIPLINE HEAD", linkedin: "#" },
  { id: 17, name: "Nitesh", image: "https://utkansh25.sirv.com/Untitled%20design/13.png",  role: "REGISTRATION HEAD", linkedin: "#" },
  { id: 19, name: "Sanket", image: "https://utkansh25.sirv.com/Untitled%20design/12.png",  role: "HOSPITALITY HEAD", linkedin: "#" },
  { id: 20, name: "Suman Meena", image: "https://utkansh25.sirv.com/Untitled%20design/17.png", role: "HOSPITALITY HEAD", linkedin: "#" },
  { id: 21, name: "Rishi ", image: "https://utkansh25.sirv.com/Untitled%20design/18.png",  role: "DECORATION HEAD", linkedin: "#" },
  { id: 22, name: "Diksha", image: "https://utkansh25.sirv.com/3.png", role: "DECORATION HEAD", linkedin: "#" }
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


function Card({ image, title, description, button1, button2, icon1, icon2, link , link2 }) {
  return (
    <div className="bg-white w-[18.5rem] shadow-xl rounded-2xl overflow-hidden border border-gray-300 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center p-6">
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
      <button onClick={() => window.open(link2)} className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-xl transition-all duration-300">
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
        <div className="flex flex-col gap-16 justify-center">
          
          {selectedCategory === "developers" &&
          <>
            {/* Faculty */}
            <div className="flex flex-wrap gap-8 justify-center">
              {developers.map(fac => (
                <Card
                  key={fac.id}
                  image={fac.image}
                  title={fac.name}
                  description={fac.role}
                  button1="Github"
                  button2="Linkedin"
                  icon1={<FaGithub />}
                  icon2={<FaLinkedin />}
                  link={fac.linkedin}
                  link2={fac.github}
                />
              ))}
            </div>

            {/* Faculty 2 */}
            {/* <div className="flex flex-wrap gap-8 justify-center">
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
            </div> */}    
          </>
          }
        </div>

        
        <div className="flex flex-col gap-16 justify-center">
          
          {selectedCategory === "team" &&
          <>
            {/* Faculty */}
            <div className="flex flex-wrap gap-8 justify-center">
              {team1.map(fac => (
                <Card
                  key={fac.id}
                  image={fac.image}
                  title={fac.name}
                  description="CONVENOR"
                  button1={fac.phone}
                  button2="Linkedin"
                  icon1={<FaPhone />}
                  icon2={<FaLinkedin />}
                  link={fac.linkedin}
                />
              ))}
            </div>

            {/* Faculty 2 */}
            {/* <div className="flex flex-wrap gap-8">
              {team2.map(fac => (
                <Card2
                  key={fac.id}
                  image={fac.image}
                  title={fac.name}
                  description={fac.role}
                  button2="Linkedin"
                  icon2={<FaLinkedin />}
                  link={fac.profile}
                />
              ))}
            </div>  */}
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
                  link={fac.linkedin}
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
