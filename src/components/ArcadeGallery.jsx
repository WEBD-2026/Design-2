import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gamepad, Music, Camera, Trophy } from 'lucide-react';
import gallery1 from '../images/gallery1.JPG';
import gallery2 from '../images/gallery2.JPG';
import gallery3 from '../images/gallery3.JPG';
import gallery4 from '../images/gallery4.JPG';
import gallery5 from '../images/gallery5.jpg';
import gallery6 from '../images/gallery6.jpg';

const EventGallery = () => {
  const [scrollX, setScrollX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const events = [
    { title: "DJ Snake Night", description: "Epic EDM night that shook the campus", category: "Performance", imageUrl: gallery1, icon: <Music className="w-6 h-6" /> },
    { title: "Imagine Dragons", description: "Thunder and bones shattered the stage", category: "Concert", imageUrl: gallery2, icon: <Music className="w-6 h-6" /> },
    { title: "Local Bands Night", description: "Campus talents unleashed", category: "Performance", imageUrl: gallery3, icon: <Music className="w-6 h-6" /> },
    { title: "DJ Wars", description: "Battle of the beats", category: "Competition", imageUrl: gallery4, icon: <Trophy className="w-6 h-6" /> },
    { title: "Rock Night", description: "When metal met melody", category: "Concert", imageUrl: gallery5, icon: <Music className="w-6 h-6" /> },
    { title: "Cultural Eve", description: "Tradition meets modern", category: "Performance", imageUrl: gallery6, icon: <Camera className="w-6 h-6" /> }
  ];

  useEffect(() => {
    const scrollSpeed = 3;
    let animationFrameId;

    const scroll = () => {
      if (!isPaused) {
        setScrollX(prev => {
          const newScrollX = prev + scrollSpeed;
          if (newScrollX >= 330 * events.length) {
            return 0;
          }
          return newScrollX;
        });
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, events.length]);

  return (
    <section className="relative w-full bg-black py-12 overflow-hidden">
      {/* <div className="max-w-7xl mx-auto px-4 mb-10 relative">
        <motion.div className="flex items-center justify-center gap-4" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <motion.div animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ rotate: { duration: 4, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}>
            <Gamepad className="w-10 h-10 text-purple-500" />
          </motion.div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 tracking-tight">
            Gallery
          </h2>
        </motion.div>
      </div> */}

      <div className="relative px-4 py-6" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="flex gap-6 relative" style={{ transform: `translateX(-${scrollX}px)`, width: 'fit-content' }}>
          {[...events, ...events, ...events].map((event, index) => (
            <motion.div key={index} className="relative flex-none w-[300px] h-[400px] rounded-xl overflow-hidden group" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-purple-500/20 rounded-lg">{event.icon}</div>
                    <span className="text-purple-400 font-semibold">{event.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
