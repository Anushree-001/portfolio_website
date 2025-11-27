import React from 'react'
import pic from "../assets/photo.avif"

function Home() {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
          <span className='text-xl'>Welcome</span>
          <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello, I'm a</h1>
            <span className='text-red-700 font-bold'>Developer</span>
          </div>
          <br />
          <p className='text-sm md:text-md text-justify'>
            I'm a Computer Science Engineering student with a passion for web development. 
            Skilled in Java, C, and modern web technologies like React, JavaScript, and MySQL. 
            I love creating innovative solutions and learning new technologies.
          </p>
          <br />
          <div className='flex justify-center md:justify-start'>
            <div className='space-y-2'>
              <h1 className='font-bold'>Currently working on</h1>
              <div className='flex space-x-5'>
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" className='w-8 h-8 cursor-pointer' />
                <img src="https://img.icons8.com/color/48/000000/react-native.png" className='w-8 h-8 cursor-pointer' />
                <img src="https://img.icons8.com/color/48/000000/javascript.png" className='w-8 h-8 cursor-pointer' />
                <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" className='w-8 h-8 cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" className='rounded-lg md:w-[450px] md:h-[450px] object-cover' alt="Coding" />
        </div>
      </div>
    </div>
  )
}

export default Home