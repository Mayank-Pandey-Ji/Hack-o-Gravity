import React, { useState } from "react";
import { Mail, User, MessageSquare, Send, MapPin, Phone, Clock, Sparkles, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 text-center py-20 md:py-32 px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              We're Here to Help
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Have a question or suggestion? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-100">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Email Us</h3>
                <p className="text-gray-600">support@algomind.com</p>
                <p className="text-gray-600">hello@algomind.com</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-100">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-100">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">Response Time</h3>
                <p className="text-gray-600">Within 24 hours</p>
                <p className="text-gray-600">Usually much faster!</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-purple-100">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>

                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="flex items-center gap-2 mb-3 font-semibold text-gray-700">
                      <User className="w-5 h-5 text-purple-600" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-gray-800"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="flex items-center gap-2 mb-3 font-semibold text-gray-700">
                      <Mail className="w-5 h-5 text-pink-600" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 text-gray-800"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="flex items-center gap-2 mb-3 font-semibold text-gray-700">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none text-gray-800"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitted}
                    className={`w-full flex items-center justify-center gap-3 font-bold px-8 py-4 rounded-2xl transition-all duration-300 ${
                      isSubmitted
                        ? "bg-green-500 text-white"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:scale-105"
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-purple-100">
              <h3 className="text-xl font-bold mb-2 text-gray-800">How quickly will I receive a response?</h3>
              <p className="text-gray-600">We aim to respond to all inquiries within 24 hours, though most messages are answered much faster during business hours.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-100">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Is my information kept confidential?</h3>
              <p className="text-gray-600">Absolutely. We take privacy very seriously and all communications are kept strictly confidential and secure.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-100">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Can I request a feature or report a bug?</h3>
              <p className="text-gray-600">Yes! We welcome all feedback, feature requests, and bug reports. Your input helps us improve AlgoMind for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">AlgoMind</h3>
            <p className="text-purple-200">Mental Health Support for Everyone</p>
          </div>
          <div className="border-t border-purple-700 pt-6">
            <p className="text-purple-300">© 2025 AlgoMind. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;