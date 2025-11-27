import React from 'react'

function About() {
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>
          Hello, I'm Anushree, a passionate Computer Science Engineering student. 
          I specialize in web development with expertise in Java, C, React, JavaScript, and MySQL. 
          I'm dedicated to creating efficient, user-friendly applications and continuously expanding my technical skills.
        </p>
        <br />
        <h1 className='text-green-600 font-semibold text-xl'>
          Education & Training
        </h1>
        <div className='space-y-2'>
          <p><strong>B.Tech - Computer Science Engineering</strong></p>
          <p>Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, Odisha</p>
          <p>2022 – 2026 | CGPA: 8.29</p>
          <br />
          <p><strong>Higher Secondary Education (12th Grade)</strong></p>
          <p>Jawahar Vidya Mandir- Shyamali, Ranchi, Jharkhand</p>
          <p>2020-2022</p>
        </div>
        <br />
        <br />
        <h1 className='text-green-600 font-semibold text-xl'>
          Skills & Expertise
        </h1>
        <div className='space-y-2'>
          <p><strong>Languages:</strong> Java, C</p>
          <p><strong>Web:</strong> HTML, CSS, JavaScript, React</p>
          <p><strong>Database:</strong> MySQL</p>
          
          <p><strong>Soft Skills:</strong> Team player, Quick Learner, Communication Skills</p>
        </div>
        <br />
        <br />
        <h1 className='text-green-600 font-semibold text-xl'>
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative and practical solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  )
}

export default About