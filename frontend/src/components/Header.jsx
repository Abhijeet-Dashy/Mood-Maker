import React from "react";
import { Home, Info, Rabbit } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navi = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="flex bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl shadow-2xl rounded-2xl mt-5 px-8 py-5 gap-10 overflow-hidden border border-white/20 relative">
        <div className="absolute inset-0 z-0 pointer-events-none rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full from-transparent via-white/7 to-transparent"></div>
        </div>

        <div className="flex items-center gap-2 text-white font-bold text-lg hover:scale-105 transition duration-300 relative z-10">
          <Rabbit size={20} />
          Bunny Inc
        </div>

        <div className="flex items-center gap-2 text-white hover:text-[#e0b0ff] hover:scale-105 transition duration-300 cursor-pointer relative z-10">
          <Home size={18} />
          Home
        </div>

        <div
          onClick={() => navi("/about")}
          className="flex items-center gap-2 text-white hover:text-[#e0b0ff] hover:scale-105 transition duration-300 cursor-pointer relative z-10"
        >
          <Info size={18} />
          About
        </div>
      </div>
    </div>
  );
};

export default Header;
