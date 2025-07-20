import React from "react";
import Card from "../components/Card";
import { useNavigate, useLocation } from "react-router-dom";

const Mood = () => {
  const navi = useNavigate();
  const { state } = useLocation();
  const message = state?.message || "No message found.";

  return (
    <div>
      <Card message={message} />
      <div className="flex justify-center gap-50 mt-8">
        <button className="bg-[#fccee8]/80 backdrop-blur-xl shadow-xl border border-white/20 rounded-2xl px-8 py-4 font-mono text-purple-700 hover:scale-107 hover:bg-purple-300/50 hover:text-white duration-300">
          Save
        </button>
        <button
          onClick={() => navi("/")}
          className="bg-[#fccee8]/80 backdrop-blur-xl shadow-xl border border-white/20 rounded-2xl px-8 py-4 font-mono text-purple-700 hover:scale-107 hover:bg-purple-300/50 hover:text-white duration-300">
          Back
        </button>
      </div>
    </div>
  );
};

export default Mood;
