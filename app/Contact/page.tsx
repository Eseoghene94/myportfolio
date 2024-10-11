'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, User, MessageSquare } from 'lucide-react';
import React from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send('service_i7sw16k', 'template_r0hknap', formData, 'YOUR_USER_ID')
      .then((response) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => console.error('Error:', err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section id="contact" className="py-4 bg-black text-gray-800">
      <h2 className="text-3xl text-center text-red-600 font-bold">CONTACT NO</h2>
      <p className="text-center text-gray-500">Feel free to reach out for any inquiries or collaborations!</p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-6 p-4 border border-gray-700 bg-gray-900 rounded-lg">
        <div className="relative mb-4">
          <User className="absolute left-3 top-3 text-red-600" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 pl-10 mb-4 border border-slate-700 bg-slate-800 text-gray-200 placeholder-gray-500 rounded-md focus:outline-none"
            required
          />
        </div>
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-3 text-red-600" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 pl-10 mb-4 border border-slate-700 bg-slate-800 text-gray-200 placeholder-gray-500 rounded-md focus:outline-none"
            required
          />
        </div>
        <div className="relative mb-4">
          <MessageSquare className="absolute left-3 top-3 text-red-600" />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 pl-10 mb-4 border border-slate-700 bg-slate-800 text-gray-200 placeholder-gray-500 rounded-md focus:outline-none"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;



// 'use client'


// import { useState } from 'react';
// import emailjs from 'emailjs-com';
// import { Mail, User, MessageSquare } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.send('service_i7sw16k', 'template_r0hknap', formData, 'YOUR_USER_ID')
//       .then((response) => {
//         alert('Message sent successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       })
//       .catch((err) => console.error('Error:', err));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   return (
//     <section id="contact" className="py-4 bg-black text-gray-800">
//       <h2 className="text-3xl text-center text-red-600 font-bold">CONTACT NO</h2>
//       <p className="text-center text-gray-500">Feel free to reach out for any inquiries or collaborations!</p>
//       <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-6 p-4 border border-gray-700 bg-gray-900 rounded-lg">
//         <div className="relative mb-4">
//           <User className="absolute left-3 top-3 text-red-600" />
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 pl-10 mb-4 border border-slate-700 bg-slate-800 text-gray-200 placeholder-gray-500 rounded-md focus:outline-none"
//             required
//           />
//         </div>
//         <div className="relative mb-4">
//           <Mail className="absolute left-3 top-3 text-red-600" />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 pl-10 mb-4 border border-slate-700 bg-slate-800 text-gray-200 placeholder-gray-500 rounded-md focus:outline-none"
//             required
//           />
//         </div>
//         <div className="relative mb-4">
//           <MessageSquare className="absolute left-3 top-3 text-red-600" />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-2 pl-10 mb-4 border border-slate-700 bg-slate-800 text-gray-200 placeholder-gray-500 rounded-md focus:outline-none"
//             rows="4"
//             required
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition duration-300"
//         >
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
