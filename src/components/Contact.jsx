import React from 'react'

function Contact() {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
      <div className='mb-6'>
        <p className='mb-2'><strong>Email:</strong> anushreesinha2003@gmail.com</p>
        <p className='mb-2'><strong>Phone:</strong> +91-7808217717</p>
        <p className='mb-4'><strong>LinkedIn:</strong> Anushree Sinha</p>
      </div>
      <span>Please fill out the form below to contact me</span>
      <div className='flex flex-col items-center justify-center mt-5'>
        <form action="https://formspree.io/f/xpwzgkqr" method="POST" className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
          <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700'>FullName</label>
            <input
              className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='name'
              name='name'
              type='text'
              placeholder='Enter your fullname'
              required
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700'>Email Address</label>
            <input
              className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              name='email'
              type='email'
              placeholder='Enter your email address'
              required
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='block text-gray-700'>Message</label>
            <textarea
              className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='message'
              name='message'
              placeholder='Enter your Query'
              required
            />
          </div>
          <button
            type='submit'
            className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact