// import cpp from '../assets/cpp.png'
// import express from '../assets/express.png'
// import github from '../assets/github.png'
// import html from '../assets/html.png'
// import js from '../assets/js.png'
// import mongodb from '../assets/mongodb.png'
// import nodejs from '../assets/nodejs.png'
// import react from '../assets/react.png'
// import sql from '../assets/sql-server.png'
// import vs from '../assets/vs.png'

const Skills = () => {
  return (
    <section id='skills'>
      <div className='h-9'></div>
      <div className='w-full min-h-screen'>
        <h1 className='font-bold text-6xl text-center py-3 text-white'>Skills</h1>
         <div className="w-32 h-1 bg-red-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold text-center">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
        
        <div className='w-full max-w-6xl flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 mx-auto py-10'>

          {/* Languages */}
          <div className='h-70 w-72 border border-white rounded-2xl px-6 py-4 shadow-2xl overflow-hidden cursor-pointer hover:shadow-red-600/50 hover:-translate-y-2 transition-transform duration-300'>
            <h1 className='text-xl text-center text-white py-2 font-bold'>Languages</h1>
            <div className='text-black flex flex-wrap gap-6 justify-center items-center py-4 '>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
                
                <p>C++</p>
              </span>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
               
                <p>JavaScript</p>
              </span>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
                
                <p>HTML</p>
              </span>
            </div>
          </div>

          {/* Frontend */}
          <div className='h-70 w-72 border border-white rounded-2xl px-6 py-4 shadow-2xl overflow-hidden cursor-pointer hover:shadow-red-600/50 hover:-translate-y-2 transition-transform duration-300'>
            <h1 className='text-xl text-center text-white py-2 font-bold'>Frontend</h1>
            <div className='text-black flex flex-wrap gap-6 justify-center items-center py-4'>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
               
                <p>ReactJS</p>
              </span>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
                <p className='text-lg'>TailwindCSS</p>
              </span>
            </div>
          </div>

          {/* Backend */}
          <div className='h-70 w-72 border border-white rounded-2xl px-6 py-4 shadow-2xl overflow-hidden cursor-pointer hover:shadow-red-600/50 hover:-translate-y-2 transition-transform duration-300'>
            <h1 className='text-xl text-center text-white py-2 font-bold'>Backend</h1>
            <div className='text-black flex flex-wrap gap-6 justify-center items-center py-4'>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
              
                <p>Node.js</p>
              </span>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
               
                <p>Express.js</p>
              </span>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
                
                <p>MongoDB</p>
              </span>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
                <p>Mongoose</p>
              </span>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
               
                <p>MySQL</p>
              </span>
            </div>
          </div>

          {/* Others */}
          <div className='h-70 w-72 border border-white rounded-2xl px-6 py-4 shadow-2xl overflow-hidden cursor-pointer hover:shadow-red-600/50 hover:-translate-y-2 transition-transform duration-300'>
            <h1 className='text-xl text-center text-white py-2 font-bold'>Others</h1>
            <div className='text-black flex flex-wrap gap-6 justify-center items-center py-4'>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
                <p>OOPs</p>
              </span>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
                
                <p>GitHub</p>
              </span>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
                <p>Render</p>
              </span>
              <span className='flex flex-col items-center gap-2 bg-white px-2 py-2 rounded-2xl'>
                
                <p>VS Code</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
