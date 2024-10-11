import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => console.error('Error:', err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-black text-gray-300">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl text-center font-bold mb-12 text-red-600">Contact Me</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="relative">
            <User className="absolute left-3 top-3 text-red-600" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-12 py-3 border border-slate-700 rounded-md focus:outline-none bg-slate-800 text-gray-200 placeholder-gray-500"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-red-600" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-12 py-3 border border-slate-700 rounded-md focus:outline-none bg-slate-800 text-gray-200 placeholder-gray-500"
              required
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-red-600" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-12 py-3 border border-slate-700 rounded-md focus:outline-none bg-slate-800 text-gray-200 placeholder-gray-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 text-white rounded-md shadow-lg hover:bg-red-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
