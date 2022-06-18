import React from "react";
function Home() {
  return (
    <div className="w-full sm:w-[400px]  p-3 mx-auto shadow-[0_0px_10px_rgba(0,0,0,0.253)] transition-all rounded-lg">
      <div className="flex flex-col space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <img src="/favicon.ico" alt="" className="rounded-full w-12" />
            <div>
              <p className="font-bold">Charchit</p>
              Active
            </div>
          </div>
          <div className="space-x-2">
            <button className="bg-black text-white px-3 py-1.5 rounded-md">
              logout
            </button>
            <button className="bg-black text-white px-3 py-1.5 rounded-md">
              Profile
            </button>
          </div>
        </div>
        <hr />
        <div className="flex py-1.5 justify-between">
          <p className="font-bold text-lg">Dark Mode</p>

          <label for="toogleA" class="flex items-center cursor-pointer">
            <div class="relative">
              <input id="toogleA" type="checkbox" class="sr-only peer" />

              <div class="dot absolute w-6 h-6 bg-white rounded-full peer-checked:bg-green-600 peer-checked:translate-x-full shadow -left-1 -top-3 transition"></div>
            </div>
              <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

          </label>
        </div>
        <hr />
        <div className="flex py-2">
        <input type="text" className="px-3 py-2 outline-0 border-[1px]  border-[#ced4da] focus:border-blue-500 rounded-md w-full" placeholder="Enter Name to Search" />
        </div>  
        <div className="flex flex-col space-y-2 h-64 overflow-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <img src="/favicon.ico" alt="" className="rounded-full w-12" />
            <div>
              <p className="font-bold">Charchit</p>
              <span className="font-extralight text-gray-600">Hey There</span>
            </div>
          </div>
          <div className="rounded-full bg-blue-600 text-white px-2.5 py-0.5">1</div>
        </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Home;
