import React from 'react'

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: "https://img.icons8.com/color/48/000000/react-native.png",
      name: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind CSS",
    },
    {
      id: 2,
      logo: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      name: "AI Chatbot",
      description: "Conversational AI chatbot interface using HTML, CSS & JS",
    },
    {
      id: 3,
      logo: "https://img.icons8.com/color/48/000000/partly-cloudy-day.png",
      name: "Weather App",
      description: "API-based web app with real-time weather data using wttr.in API",
    },
  ]

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        {/* <h1 className='text-3xl font-bold mb-5'>Portfolio</h1> */}
        <span className='underline font-semibold'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className='w-full h-auto border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300'
              key={id}
            >
              <div className='flex justify-center mb-4'>
                <img
                  src={logo}
                  className='w-16 h-16 rounded-full border-[2px]'
                  alt=""
                />
              </div>
              <div className='text-center mb-4'>
                <div className='font-bold text-lg mb-2'>{name}</div>
                <p className='text-gray-700 text-sm'>
                  {description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio