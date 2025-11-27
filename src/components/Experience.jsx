import React from 'react'

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png",
      name: "Java",
      experience: "Programming",
    },
    {
      id: 2,
      logo: "https://img.icons8.com/color/48/000000/c-programming.png",
      name: "C",
      experience: "Programming",
    },
    {
      id: 3,
      logo: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      name: "HTML",
      experience: "Web Dev",
    },
    {
      id: 4,
      logo: "https://img.icons8.com/color/48/000000/css3.png",
      name: "CSS",
      experience: "Web Dev",
    },
    {
      id: 5,
      logo: "https://img.icons8.com/color/48/000000/javascript.png",
      name: "JavaScript",
      experience: "Web Dev",
    },
    {
      id: 6,
      logo: "https://img.icons8.com/color/48/000000/react-native.png",
      name: "React",
      experience: "Web Dev",
    },
    {
      id: 7,
      logo: "https://img.icons8.com/color/48/000000/mysql-logo.png",
      name: "MySQL",
      experience: "Database",
    },
  ]

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 my-3'>
          {cardItem.map(({ id, logo, name, experience }) => (
            <div
              className='flex flex-col items-center justify-center border-[2px] rounded-lg w-full h-auto shadow-md p-4 cursor-pointer hover:scale-105 duration-300'
              key={id}
            >
              <img src={logo} className='w-16 h-16 mb-3' alt="" />
              <div className='text-center'>
                <div className='font-bold text-sm mb-1'>{name}</div>
                <p className='text-gray-700 text-xs'>{experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience