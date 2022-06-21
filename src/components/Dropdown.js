import React from 'react'

function Dropdown() {
  
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-30 backdrop-brightness-50' style={{"margin":"0px"}}>
    <div className="bg-white border rounded-xl w-96 overflow-auto backdrop-opacity-100 animate-showModal mx-1">
      <div className="flex flex-col center-text">
      
          <button className="text-red-500 border-b py-3 font-bold active:bg-gray-200" >Delete for me</button>
          <button className="text-red-500 border-b py-3 font-bold active:bg-gray-200" >Delete for everyone</button>
          <button className="text-red-500 border-b py-3 font-bold active:bg-gray-200" >Delete all</button>
          <button className="text-red-500 border-b py-3 font-bold active:bg-gray-200" >Block User</button>
          <button className='border-b py-3 active:bg-gray-200' >Copy message</button>
          <button className='border-b py-3 active:bg-gray-200' >Cancel</button>
      </div>
    </div>
</div>
  )
}

export default Dropdown