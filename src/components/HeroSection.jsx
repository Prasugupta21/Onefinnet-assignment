import React from "react";

const HeroSection = () => {
  return (
    <div className="flex h-screen w-full relative ">
      <img src="../../images/background.jpeg" className=" absolute w-full h-full  top-0 left-0 object-cover" />
      <div className="w-full h-full flex">
        <div class="w-1/2 h-full bg-black opacity-50 flex items-center justify-center">
          <div>
          <h2 class="text-3xl font-bold text-white mb-4">Kryo X26 </h2>
          <h2 class="text-3xl font-bold text-white mb-4">MTB </h2>
            <ul class="text-gray-400 space-y-2">
              <li>Lightweight 18" Frame</li>
              <li>Steel Suspension Fork</li>
              <li>Steel Hardtail Frame</li>
            </ul>
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mt-6">
              Buy Now
            </button>
          </div>
        </div>
        <div class="w-1/2 h-full bg-red-500 z-10 opacity-75"></div>
      </div>
    </div>
  );
};

export default HeroSection;
