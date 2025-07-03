import React from 'react'
export default function page() {
  return (
    <>
      <div className='contactus mt-10 bg-cover bg-no-repeat bg-[url("https://i.pinimg.com/736x/34/18/60/341860b14a97fee2f9ea91648ea40611.jpg")]'>
        <div className='contact-form inset-0 bg-black/20 p-[40px]'>
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
                          <hr className='w-[150px] h-1 bg-white mx-auto my-[5px] rounded-[20px]'/>

          <p className="text-center text-xl mt-4 mb-8">We'd love to hear from you! Reach out with any questions or feedback.</p>
          <form className='max-w-md mx-auto'>
            <div className='mb-4'>
              <label className='block text-light-700'>Name</label>
              <input type='text' className='w-full p-2 border rounded inset-0 bg-black/40' placeholder='Your Name' />
            </div>
            <div className='mb-4'>
              <label className='block text-light-700'>Email</label>
              <input type='email' className='w-full p-2 border rounded inset-0 bg-black/40' placeholder='Your Email' />
            </div>
            <div className='mb-4'>
              <label className='block text-light-700'>Message</label>
              <textarea className='w-full p-2 border rounded inset-0 bg-black/40' rows={4} placeholder='Your Message'></textarea>
            </div>
            <button type='submit' className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700'>Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}
