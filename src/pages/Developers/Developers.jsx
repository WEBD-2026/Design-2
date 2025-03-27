import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar.js";
import { FaPhone , FaGithub, FaLinkedin, FaEnvelope, FaUser } from "react-icons/fa";

const developers = [
  { id: 1, name: "Jayant Joshi", role: "Full Stack Developer", github: "#", linkedin: "#" , image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743025206/18030537513_dakgxe.jpg" },
  { id: 2, name: "Aman Verma", role: "Frontend Developer", github: "#", linkedin: "#" },
  { id: 3, name: "Neha Sharma", role: "Backend Developer", github: "#", linkedin: "#" }
];

const team = [
  { id: 1, name: "Shubham Grover", role: "Convenor", image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743027653/1_gs61c9.png" ,mobile:"78766-00077", linkedin: "https://www.linkedin.com/in/shubhamgrover01/" },
  { id: 2, name: "Shubham K Garg", role: "Convenor",image: "https://res.cloudinary.com/diiyq5fwx/image/upload/v1743027664/WhatsApp_Image_2025-03-01_at_12.42.51_7ddd2c66_bzppte.jpg" ,mobile:"75086-19568", linkedin: "www.linkedin.com/in/shubham-k-g-6aa4b4281" },
  { id: 3, name: "Shivam Prasher", role: "Convenor",image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743027814/Untitled_design_zze38b.png" ,mobile:"88091-90913", linkedin: "https://www.linkedin.com/in/shivam-prashar-78368b227/" }
];

const team2 = [
  { id: 1, name: "Aryan Panigrahy", role: "Cultural Head", image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743034189/4_e2ahkf.png" , linkedin: "https://www.linkedin.com/in/shubhamgrover01/" },
  { id: 2, name: "Geetika Chopra", role: "Cultural Head",image: "https://res.cloudinary.com/diiyq5fwx/image/upload/v1743034189/3_ddeesj.png" , linkedin: "https://www.linkedin.com/in/geetika8/" },
  { id: 3, name: "Vipul Jain ", role: "Finance Head",image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743034623/Untitled_design_1_s2rykf.png" , linkedin: "https://www.linkedin.com/in/vipul-jain-b35ba725a/" },
  { id: 4, name: "Isha Khoda ", role: "Finance Head",image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743034846/Untitled_design_2_jfe0ib.png" , linkedin: "https://www.linkedin.com/in/vipul-jain-b35ba725a/" },

];

const director = [
  { id: 1, name: "Prof. Binod Kumar Kanaujia", department: "Director", image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743025216/Director_m4dk4a.jpg" , profile:"https://www.nitj.ac.in/admin/director.html" , position:"Patron"},
  { id: 2, name: "Prof. Ajay Bansal", department: "Registrar", position:"Patron" , image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743025215/1717741345401-Passport_Pic_gccmsn.jpg" , profile:"https://www.nitj.ac.in/admin/registrar.html"},
];

const faculty = [
  { id: 1, name: "Prof. Anish Sachdeva", department: "Dean Student Welfare",position:"Chairperson", image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743027830/18030537513_kq0gmt.jpg" , profile:"https://departments.nitj.ac.in/dept/ipe/Faculty/6430445738bff038a780609d"},
  { id: 2, name: "Prof. Rohit Mehra", department: "Dean Research & Consultancy", position:"Chairperson", email: "ramesh@univ.edu" , image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743025214/20050251101_xjoc6o.jpg" , profile:"https://departments.nitj.ac.in/dept/ph/Faculty/6430445b38bff038a7806a5a"},
];

const facConv = [
  { id: 1, name: "Dr. Indu Saini",position:"Convenor", image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743025206/18011954316_b0u1ei.png", profile:"https://departments.nitj.ac.in/dept/ece/Faculty/6430445538bff038a7805caf"},
  { id: 2, name: "Dr. Anee Mohanty", position:"Convenor", image:"https://res.cloudinary.com/diiyq5fwx/image/upload/v1743025216/22092713867_h0wzvc.jpg" , profile:"https://departments.nitj.ac.in/dept/bt/Faculty/6430446038bff038a7807202"},
];

function Card({ image, title, description, button1, button2, icon1, icon2 , link }) {
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

function Card2({ image, title, description, button1, button2, icon1, icon2 , link }) {
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
        {/* <div
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
        </div> */}

        {/* Filter Buttons */}
        <div className="flex justify-center gap-6 mb-8">
            <button onClick={() => setSelectedCategory("developers")} className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "developers" ? "bg-yellow-500 text-black shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`}>Developers</button>
            <button onClick={() => setSelectedCategory("team")} className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "team" ? "bg-yellow-500 text-black shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`}>Team</button>
            <button onClick={() => setSelectedCategory("faculty")} className={`px-6 py-3 rounded-lg font-semibold transition ${selectedCategory === "faculty" ? "bg-yellow-500 text-black shadow-lg" : "bg-gray-700 text-white hover:bg-gray-600"}`}>Faculty</button>
        </div>

        {/* Cards Section */}
        <div className="space-y-8">

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {selectedCategory === "developers" && developers.map(dev => (
            
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
                link = {dev.linkedin}
              />
            
          ))}

          <div className="h-10"></div>

          {team2.map(dev => ( 
            <Card2
              key={dev.id}
              image={dev.image}
              title={dev.name}
              description={dev.role}
              button2="LinkedIn"
              icon1={<FaPhone />}
              icon2={<FaLinkedin />}
              link = {dev.linkedin}
            />
          
        ))}


          </>
}
          </div>

          {selectedCategory === "faculty" && 
          <>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             
             {director.map(dev => (
               <Card
                 key={dev.id}
                 image={dev.image}
                 title={dev.name}
                 description={dev.department}
                 button1={dev.position}
                 button2="Profile"
                icon2={<FaUser />}
                link={dev.profile}
               />
             ))}
         
             </div>

         <div className="h-4"></div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
              {faculty.map(fac => (
                <Card
                  key={fac.id}
                  image={fac.image}
                  title={fac.name}
                  description={fac.department}
                  button1={fac.position}
                  button2="Profile"
                  // icon1={<FaEnvelope />}
                  icon2={<FaUser />}
                  link={fac.profile}
                />
              ))}
              </div>

              <div className="h-5"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
                {facConv.map(fac => (
                  <Card2
                    key={fac.id}
                    image={fac.image}
                    title={fac.name}
                    description={fac.position}
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
