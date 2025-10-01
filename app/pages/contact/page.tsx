"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            We’d love to hear from you. Get in touch with us today!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="mt-4 ">
              Whether you have a question about services, pricing, or anything else,
              our team is ready to answer all your questions.
            </p>
            <div className="mt-6 space-y-4">
              <p>📞 <span className="font-semibold">+255 758 100 137</span></p>
              <p>✉️ <span className="font-semibold">arushanetworks@gmail.com</span></p>
              <p>📍 <span className="font-semibold">Arusha, Tanzania</span></p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-yellow-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
