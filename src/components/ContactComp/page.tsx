"use client";
import { useState } from 'react';
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    )
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      toast('Your message has been sent!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      toast('Failed to send your message. Please try again.');
    });
  };

  return (
    <div className="m-10 py-16">
      <div className="text-center text-2xl font-semibold tracking-wide mb-4">
        CONTACT US
      </div>
      <div className="text-center tracking-wide lg:px-80">
        Ready to transform your business with cutting-edge AI solutions?
        Our team is here to help. Fill out the form below, and
        let's start the conversation!
      </div>
      <div className="flex justify-center items-center gap-10 my-16 flex-col md:flex-row">
        <div className="flex flex-col gap-3">
          <Link href="tel:+919108287982" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-2 m-2">
              <div className="bg-customBlack rounded-md w-12  flex justify-center items-center">
                <FaPhone color="white" fontSize={20}/>
              </div>
              <div>
                <div className="text-customBlack font-semibold tracking-wide">PHONE</div>
                <div className="text-customBlack">+91 9108287982</div>
              </div>
            </div>
          </Link>
          <Link href="mailto:sidkarthik@excentrix.tech" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-2 m-2">
              <div className="bg-customBlack rounded-md w-12  flex justify-center items-center">
                <MdEmail color="white" fontSize={20}/>
              </div>
              <div>
                <div className="text-customBlack font-semibold tracking-wide">EMAIL</div>
                <div className="text-customBlack">sidkarthik@excentrix.tech</div>
              </div>
            </div>
          </Link>
          <Link href="https://www.google.com/maps?q=Bengaluru,+India" target="_blank" rel="noopener noreferrer">
            <div className="flex gap-2 m-2">
              <div className="bg-customBlack rounded-md w-12  flex justify-center items-center">
                <FaLocationDot color="white" fontSize={20} />
              </div>
              <div>
                <div className="text-customBlack font-semibold tracking-wide">LOCATION</div>
                <div className="text-customBlack">Bengaluru, India</div>
              </div>
            </div>
          </Link>
        </div>
        <Toaster
  position="bottom-center"
  reverseOrder={false}
/>
        <div>
          <form onSubmit={handleSubmit} className="flex-col p-4">
            <div className="mb-4">
              {/* <label className="block text-sm font-bold mb-2" htmlFor="name">
                Name
              </label> */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              {/* <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label> */}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              {/* <label className="block text-sm font-bold mb-2" htmlFor="message">
                Message
              </label> */}
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-gray-500"
                id="message"
                name="message"
                placeholder='Message'
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-customBlack hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
