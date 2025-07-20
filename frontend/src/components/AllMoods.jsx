import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const moods = [
  { label: "Stressed", emoji: "😰" },
  { label: "Sad", emoji: "😞" },
  { label: "Frustrated", emoji: "😡" },
  { label: "Tired", emoji: "😴" },
  { label: "Lonely", emoji: "🥺" },
  { label: "Overwhelmed", emoji: "😵" },
  { label: "Empty", emoji: "😶‍🌫️" },
  { label: "Just need a smile", emoji: "😊" },
];

const AllMoods = () => {
  const [selectedText, setSelectedText] = useState("");
  const navi = useNavigate();
  const [loading, setLoading] = useState(true)
  const handleMoodClick = async (moodLabel) => {
     setLoading(true)
    const res = await axios.post("http://localhost:3001/get-text", {
      mood: moodLabel,
    });
    const text = res.data.text;
    {loading ? navi("/mood", { state: { message: text } }) : navi("/loading")}
    setLoading(false)
  };
  return (
    <div className="max-w-4xl mx-auto mt-20 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {moods.map((mood, idx) => (
          <div
            key={idx}
            onClick={() => handleMoodClick(mood.label)}
            className="flex flex-col items-center justify-center p-8 rounded-4xl backdrop-blur-lg hover:scale-107 hover:shadow-white/10 hover:shadow-xl transition transform cursor-pointer"
          >
            <span className="text-5xl lg:text-6xl mb-3">{mood.emoji}</span>
            <span className="text-lg font-medium text-center text-white">
              {mood.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMoods;
