import React from 'react'
import "@/Static/CSS/index.css";
export default function page() {
  return (
    <>
      <div className='contactus'>
        <div className='contact-form'>
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
          <hr className='underLine-short' />
          <p className="text-center text-xl mt-4 mb-8">We'd love to hear from you! Reach out with any questions or feedback.</p>
          <form className='max-w-md mx-auto'>
            <div className='mb-4'>
              <label className='block text-light-700'>Name</label>
              <input type='text' className='w-full p-2 border rounded' placeholder='Your Name' />
            </div>
            <div className='mb-4'>
              <label className='block text-light-700'>Email</label>
              <input type='email' className='w-full p-2 border rounded' placeholder='Your Email' />
            </div>
            <div className='mb-4'>
              <label className='block text-light-700'>Message</label>
              <textarea className='w-full p-2 border rounded' rows={4} placeholder='Your Message'></textarea>
            </div>
            <button type='submit' className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700'>Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}
