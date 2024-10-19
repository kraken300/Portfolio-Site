import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMailTo = () => {
    const { name, email, message } = formData;
    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 animate-fade-in-down">Contact Me</h2>
        <div className="max-w-lg mx-auto animate-fade-in">
          <form className="bg-gray-800 p-8 rounded-lg shadow-lg" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-6 animate-slide-up">
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
            </div>
            <div className="mb-6 animate-slide-up">
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
            </div>
            <div className="mb-6 animate-slide-up">
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              ></textarea>
            </div>
            <div className="text-center animate-fade-in">
              <button
                type="button"
                onClick={handleMailTo}
                className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-600 hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
