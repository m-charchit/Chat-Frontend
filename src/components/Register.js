import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="w-full h-screen sm:h-fit sm:w-[400px] mx-auto shadow-[0_0px_10px_rgba(0,0,0,0.253)] transition-all sm:rounded-lg">
      <div className="flex flex-col  h-full">
        <div className="flex justify-between items-center border-b px-3 py-2 shadow flex-col ">
          <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
          <div className="space-y-4 w-full">
          <div className="w-full">
          <label htmlFor="username" className="text-sm font-medium leading-none text-gray-800">username</label>
          <input type="text" id="username" className="bg-gray-100 text-sm shadow-md rounded font-medium leading-none py-2 pl-3 mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full" placeholder="username"/>
          </div>
          <div className="w-full">
          <label htmlFor="email" className="text-sm font-medium leading-none text-gray-800">email</label>
          <input type="text" id="email" className="bg-gray-100 text-sm shadow-md rounded font-medium leading-none py-2 pl-3 mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full" placeholder="password" />
          </div>
          <div className="w-full">
          <label htmlFor="password" className="text-sm font-medium leading-none text-gray-800">password</label>
          <input type="text" id="password" className="bg-gray-100 text-sm shadow-md rounded font-medium leading-none py-2 pl-3 mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full" placeholder="password" />
          </div>
          </div>
          <button className="bg-black text-white px-20 py-1.5 rounded-md  my-7">
              Submit
            </button>
          <p className="text-left w-full mb-1">Already have an Account ? <Link to="/login" className="text-blue-500">Sign In</Link></p>
        </div>
      </div>
    </div>

  )
}

export default Register