import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Chat() {
  const [showPopup, setShowPopup] = useState(false)
  const [coordinates, SetCoordinates] = useState({x:null,y:null})
  const popup = (e) => {
    SetCoordinates({x:e.screenX,y:e.screenY})
    setShowPopup(true)
  }
  return (
    <>
    {showPopup && <Dropdown coordinates={coordinates} />}
    <div className="w-full h-screen sm:h-[480px] sm:w-[400px] mx-auto shadow-[0_0px_10px_rgba(0,0,0,0.253)] transition-all sm:rounded-lg">
      <div className="flex flex-col  h-full">
        <div className="flex justify-between items-center border-b px-3 py-2 shadow">
          <div className="flex space-x-2 items-center">
            <Link to="/"><i className="fas fa-arrow-left"></i></Link>
            <img src="/favicon.ico" alt="" className="rounded-full w-12 h-12" />
            <div>
              <p className="font-bold text-2xl">Charchit</p>
              Last Seen Oct 16 20:22
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full bg-gray-100 overflow-auto px-3 font-['Poppins', sans-serif]">
          <div className="flex space-x-2 my-4">
            <img src="/favicon.ico" alt="" className="rounded-full w-8 h-8" />
            <div className="flex flex-col px-3 py-2.5 rounded-r-2xl rounded-b-2xl bg-black max-w-[75%]  text-white hover:shadow-lg shadow-md transition-shadow duration-500">
              <div className="flex justify-between space-x-3">
                <span className="">Lorem ipsum dolor sit amet.</span>
                <i className="fa-solid fa-angle-down text-xs cursor-pointer" onClick={popup}></i>
              </div>
              <p className="text-right font-semibold text-[10px]">Oct 14 22:03</p>
            </div>
          </div>
          <div className="space-x-2 my-4">
            <div className="flex max-w-[80%] float-right flex-col px-3 py-2.5 rounded-l-2xl rounded-b-2xl bg-white hover:shadow-lg shadow-md transition-shadow duration-500  ">
              <div className="flex justify-between space-x-3">
                <span className="">Lorem, ipsum dolor.lorem Lorem, ipsum dolor. lorem31</span>
                <i className="fa-solid fa-angle-down text-xs cursor-pointer"></i>
              </div>
              <p className="text-right font-semibold text-[10px]">Oct 14 22:03</p>
            </div>
          </div>
        </div>
        <div className="flex ">
          <input
            className="text-gray-700 shadow border border-gray-300 focus:outline-none focus:shadow-outline py-2 px-3 w-full"
            type="text"
            placeholder="Message..."
          />
          <button className="bg-black px-3 text-white">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Chat;
