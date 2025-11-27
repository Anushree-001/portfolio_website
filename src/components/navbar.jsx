import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center py-4 shadow-md'>
      <div className='flex items-center'>
        <h1 className='text-2xl font-bold'>ANUSHREE</h1>
      </div>
      <div>
        <ul className='flex space-x-6'>
          <li>
            <Link to="home" smooth={true} duration={500} className='hover:text-blue-500 cursor-pointer'>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className='hover:text-blue-500 cursor-pointer'>
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} className='hover:text-blue-500 cursor-pointer'>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} className='hover:text-blue-500 cursor-pointer'>
              Experience
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className='hover:text-blue-500 cursor-pointer'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
