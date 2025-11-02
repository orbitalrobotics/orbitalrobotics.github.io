import React, { useState } from 'react';
import "./Contact.css"
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-background">
        <div className="contact-content">
            <h1>info@orbital-robots.com</h1>
            <p> For inquiries </p>
        </div>
      </div>
    </div>

    // <div className="container mx-auto pt-24">
    //   <h1 className="text-4xl font-bold text-center mb-12">Contact Orbital Robotics</h1>
    //   <form onSubmit={handleSubmit} className="max-w-md mx-auto">
    //     <div className="mb-4">
    //       <input 
    //         type="text" 
    //         name="name"
    //         placeholder="Your Name" 
    //         value={formData.name}
    //         onChange={handleChange}
    //         className="w-full p-3 border rounded-lg"
    //         required 
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <input 
    //         type="email" 
    //         name="email"
    //         placeholder="Your Email" 
    //         value={formData.email}
    //         onChange={handleChange}
    //         className="w-full p-3 border rounded-lg"
    //         required 
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <textarea 
    //         name="message"
    //         placeholder="Your Message" 
    //         value={formData.message}
    //         onChange={handleChange}
    //         className="w-full p-3 border rounded-lg h-32"
    //         required 
    //       />
    //     </div>
    //     <button 
    //       type="submit" 
    //       className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
    //     >
    //       Send Message
    //     </button>
    //   </form>
    // </div>
  );
}

export default Contact;