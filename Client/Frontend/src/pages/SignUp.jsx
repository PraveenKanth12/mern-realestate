import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h3 className='font-medium text-3xl text-center'>Sign Up</h3>
      <form className='flex flex-col gap-4 p-3'>
        <input className='border p-3 rounded-xl text-xl' type='text' placeholder='username' id='username'/>
        <input className='p-3 border rounded-xl text-xl' type='text' placeholder='email' id='email'/>
        <input className='p-3 border rounded-xl text-xl' type='text' placeholder='password' id='password'/>
        <button className='bg-slate-700 uppercase text-white p-2 rounded-xl'>sign up</button>
      </form>
      <div className='flex px-3 text-base'>
        <p>Have an account?</p>
        <Link to="/sign-in" className='text-blue-700 text-base'>Sign-in</Link>
      </div>
    </div>
  )
}

export default SignUp
