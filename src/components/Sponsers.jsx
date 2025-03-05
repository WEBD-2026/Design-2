import React from "react";
import Marquee from "react-fast-marquee";

const sponsers = [
  { id: 1, img: "cocacola.png", link: "www.cocacola.com" },
  { id: 2, img: "cocacola.png", link: "www.cocacola.com" },
  { id: 3, img: "cocacola.png", link: "www.cocacola.com" },
  { id: 4, img: "cocacola.png", link: "www.cocacola.com" },
  { id: 4, img: "cocacola.png", link: "www.cocacola.com" },
  { id: 4, img: "cocacola.png", link: "www.cocacola.com" },
];
export default function Sponsers() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-white bg-black z-10 text-6xl font-semibold py-4 w-full text-center">
        <p className="mt-32 mb-10">Our Sponsors</p>
      </h1>

      <Marquee
        speed={60}
        pauseOnHover={true}
        className="bg-black w-full overflow-hidden"
      >
        <div className="flex gap-16 py-4">
          {sponsers.map((item, index) => (
            <a key={index} href={item.link} className="w-56">
              {/* <img src={item.img} alt="" className="w-56" /> */}
              <h1>ANNOUNCING SOON </h1>
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
