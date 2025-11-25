import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { loaderImage } from "../assets";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // increase percentage
      });
    }, 60); // ~3s total

    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  //rajes
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      {/* Floating Logo */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="p-2 rounded-[30px] bg-gradient-to-r from-pink-500 to-blue-500 shadow-[0_0_20px_pink,0_0_20px_blue]"
      >
        <div className="bg-black rounded-[30px] p-3 flex items-center justify-center">
          <img
            src={loaderImage}
            alt="logo"
            className="w-28 h-28 object-cover rounded-lg"
          />
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-black rounded mt-6 overflow-hidden">
        <div
          className="h-full bg-purple-500 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <p className="mt-2 font-bold text-white drop-shadow-[2px_2px_10px_pink,-2px_-2px_10px_blue]">
        {progress}%
      </p>
    </div>
  );
};

export default SplashScreen;
