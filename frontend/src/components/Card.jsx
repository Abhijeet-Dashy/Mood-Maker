import React from "react";

const Card = ({ message }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative mt-30">
        <div
          className="bg-pink-200 rounded-lg shadow-lg w-80 sm:w-96 md:w-[400px] lg:w-[800px] p-6 sm:p-8"
          style={{
            clipPath:
              "polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))",
          }}
        >
          <div
            className="bg-purple-100 p-6 sm:p-8 md:p-10 relative h-[400px] flex flex-col justify-center items-center text-center"
            style={{
              clipPath:
                "polygon(0 3px, 3px 3px, 3px 0, calc(100% - 3px) 0, calc(100% - 3px) 3px, 100% 3px, 100% calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 3px 100%, 3px calc(100% - 3px), 0 calc(100% - 3px))",
            }}
          >
            {/* Message title */}
            <h2 className="text-purple-600 font-mono text-xl sm:text-2xl md:text-3xl leading-tight mb-4">
               {message}
                ♥
            </h2>
            {/* Decorative dots */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-pink-300"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-pink-300"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-pink-300"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-pink-300"></div>
            <div className="absolute -top-1 left-4 w-3 h-3 bg-yellow-200 opacity-70"></div>
            <div className="absolute -top-1 right-8 w-3 h-3 bg-green-200 opacity-70"></div>
            <div className="absolute -bottom-1 left-8 w-3 h-3 bg-blue-200 opacity-70"></div>
            <div className="absolute -bottom-1 right-4 w-3 h-3 bg-red-200 opacity-70"></div>
          </div>
        </div>

        {/* Shadow layer */}
        <div
          className="absolute top-2 left-2 w-full h-full bg-gray-300 -z-10 opacity-40"
          style={{
            clipPath:
              "polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
