'use client';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        toast.success('Submitted Successfully!');
      } else {
        const error = await res.json();
        toast.error(`Error: ${error.message || 'Failed to submit form'}`);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <div className='contactus mt-10 bg-cover bg-no-repeat bg-[url("https://i.pinimg.com/736x/34/18/60/341860b14a97fee2f9ea91648ea40611.jpg")]'>
      <div className='contact-form inset-0 bg-black/20 p-[40px]'>
        <h1 className="text-4xl font-bold text-center text-white">Contact Us</h1>
        <hr className='w-[150px] h-1 bg-white mx-auto my-[5px] rounded-[20px]' />
        <p className="text-center text-xl mt-4 mb-8 text-white">
          We'd love to hear from you! Reach out with any questions or feedback.
        </p>

        <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-white'>Name</label>
            <input
              type='text'
              name='name'
              className='w-full p-2 border rounded inset-0 bg-black/40 text-white'
              placeholder='Your Name'
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-white'>Email</label>
            <input
              type='email'
              name='email'
              className='w-full p-2 border rounded inset-0 bg-black/40 text-white'
              placeholder='Your Email'
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-white'>Message</label>
            <textarea
              name='message'
              className='w-full p-2 border rounded inset-0 bg-black/40 text-white'
              rows={4}
              placeholder='Your Message'
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700'
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <p className="text-green-300 text-center mt-4">Thank you! Your message has been sent.</p>
        )}
      </div>
    </div>
  );
}
