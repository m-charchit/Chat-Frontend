import React from 'react'

function Chat() {
  return (
    <div className="w-full h-screen sm:h-[480px] sm:w-[400px] mx-auto shadow-[0_0px_10px_rgba(0,0,0,0.253)] transition-all sm:rounded-lg">
        <div className="flex flex-col  h-full">
        <div className="flex justify-between items-center border-b px-3 py-2 shadow">
        <div className="flex space-x-2 items-center">
        <i class="fas fa-arrow-left"></i>
            <img src="/favicon.ico" alt="" className="rounded-full w-12 h-12" />
            <div>
              <p className="font-bold text-2xl">Charchit</p>
              Last Seen Oct 16 20:22
            </div>
          </div>
</div>
<div className="h-full shadow"></div>
<div className="flex ">
<input type="text" className="px-3 py-2 outline-0 border-[1px]  border-[#ced4da] focus:border-blue-500 w-full shadow" placeholder="Message..." />
    <button className='bg-black px-2 text-white'>Send</button>
</div>
        </div>
        </div>
  )
}

export default Chat