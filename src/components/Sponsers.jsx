import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "./canara.png";
import img2 from "./hdfc.png";
import img3 from "./icici.png";
import img4 from "./monotech.png";
import img5 from "./ntpc.png";
import img6   from "./NO_SCAR_LOGO_NEW_page-0001-removebg-preview.png";
import img7 from "./JioSaavn.png";

const sponsers = [
  { id: 1, img: img1, link: "https://canarabank.com/" },
  { id: 2, img: img2, link: "https://www.hdfcbank.com/" },
  { id: 3, img: img3, link: "https://www.icicibank.com/" },
  { id: 4, img: img4, link: "https://monotech.in/" },
  { id: 5, img: img5, link: "https://ntpc.co.in/" },
  { id: 6, img: img6, link: "https://noscar.co.in/" },
  { id: 7, img: img7, link: "https://jiosaavn.co.in/" },
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
              <img src={item.img} alt="" className="w-[164px]" />
              {/* <h1>ANNOUNCING SOON </h1> */}
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
