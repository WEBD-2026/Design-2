import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactCard() {
  return (
    <div className="flex justify-center w-[300px]">
      <div className="bg-black bg-opacity-90 text-yellow-400 p-6 w-full max-w-md rounded-xl shadow-2xl backdrop-blur-lg">
        <div className="text-center text-2xl font-semibold">
          <a href="/ContactUs" target="_blank">Contact Us</a>
        </div>
        <div className="border-b border-yellow-500 my-4"></div>
        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center space-x-3 text-lg">
            <FaEnvelope className="text-yellow-300" />
            <a href="mailto:utkansh@nitj.ac.in" className="hover:underline hover:text-yellow-300 transition duration-300">nitj.utk.accounts@nitj.ac.in</a>
          </div>
          <div className="flex flex-colitems-center justify-center space-x-3 text-lg">
            <FaPhone className="text-yellow-300" />
            <span className="hover:text-yellow-300 transition duration-300">7508617568</span>
            <FaPhone className="text-yellow-300" />
            <span className="hover:text-yellow-300 transition duration-300">8809190913</span>
          </div>
        </div>
      </div>
    </div>
  );
}
