import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaMapMarker } from 'react-icons/fa';
import ContactCard from './contactCard';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 backdrop-blur-lg text-yellow-500 py-8 px-6 shadow-2xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center border-b border-yellow-500 pb-6">
        <img src="/LOGO.svg" alt="logo" width={300} height={300} className="mb-4 md:mb-0" />
        <div className="flex flex-col items-center text-center md:text-left space-y-4">
          <nav className="flex flex-row gap-6 text-lg font-medium justify-center">
            <a href="/event" className="hover:text-yellow-300 transition duration-300">Event</a>
            <a href="/accomodation" className="hover:text-yellow-300 transition duration-300">Accomodation</a>
            <a href="/schedule" className="hover:text-yellow-300 transition duration-300">Schedule</a>
            <a className="hover:text-yellow-300 transition duration-300">Register</a>
            <a href="/Developers" className="hover:text-yellow-300 transition duration-300">Team</a>
          </nav>
          <nav className="mt-4 justify-center pt-4">
            <div className="flex gap-6">
              <a href="https://twitter.com" className="hover:scale-110 transition-transform duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://youtube.com" className="hover:scale-110 transition-transform duration-300">
                <FaYoutube size={24} />
              </a>
              <a href="https://facebook.com" className="hover:scale-110 transition-transform duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="hover:scale-110 transition-transform duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://maps.google.com" className="hover:scale-110 transition-transform duration-300">
                <FaMapMarker size={24} />
              </a>
            </div>
          </nav>
        </div>
        {/* <ContactCard /> */}
      </div>
      
      <div className="text-center mt-6 text-sm opacity-80">Made with ❤️ by <a href='/Developers'>Developers</a></div>
    </footer>
  );
};

export default Footer;
