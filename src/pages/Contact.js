import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn } from 'react-icons/fa';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open user's email client
    window.location.href = `mailto:info@orbital-robots.com?subject=${subject}&body=${body}`;

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-20">
      <SEO
        title="Contact"
        description="Get in touch with Orbital Robotics. Contact our team for sales inquiries, investor relations, or career opportunities."
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to start your mission? Get in touch with our team.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-surface p-8 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

              <div className="flex items-start mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-1">Email</p>
                  <a href="mailto:info@orbital-robots.com" className="text-white hover:text-primary transition-colors">info@orbital-robots.com</a>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-1">Headquarters</p>
                  <p className="text-white">Puyallup, Washington</p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-text-muted text-sm mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/orbital-robotics-corp/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-surface p-8 md:p-10 rounded-2xl border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-text-secondary text-sm font-medium mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="Sales">Sales Inquiry</option>
                  <option value="Investors">Investor Relations</option>
                  <option value="Careers">Careers</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-primary/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;