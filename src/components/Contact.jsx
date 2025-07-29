import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='text-white'>
      <div className='h-9'></div>
       <h1 className='font-bold text-3xl lg:text-5xl  text-center py-3 text-white'>Contact Me</h1>
         <div className="w-49 h-1 bg-red-500 mx-auto mt-4"></div>
     <div className="min-h-screen flex items-center justify-center  px-4">
      
      <div className="bg-gray-900 text-white w-full max-w-lg p-8 rounded-xl shadow-lg border-2 border-gray-700">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>
        
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="1f3fa6b2-be48-46ed-bbbf-1a9d984d0386" />
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input 
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none focus:border-red-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none focus:border-red-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea 
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border rounded-lg bg-gray-700 border-gray-600 focus:outline-none focus:border-red-400"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition duration-300 hover:cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </div>
    </section>
  )
}

export default Contact