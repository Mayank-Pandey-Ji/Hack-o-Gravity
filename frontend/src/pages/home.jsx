import React from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Users, Heart, Sparkles, Brain, Shield } from "lucide-react";
import Navbar from "./Navbar.jsx";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/chatPage");
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navbar */}
     

      {/* Hero Section */}
      <section className="relative overflow-hidden mt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        <div className="relative z-10 text-center py-24 md:py-32 px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI-Powered Mental Wellness
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Welcome to AlgoMind
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Your compassionate AI companion for mental health. Chat anonymously, gain mood insights, and connect with supportive communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleStart}
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-10 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Start Chatting
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur"></div>
            </button>

            <button className="bg-white text-purple-600 font-bold py-4 px-10 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-purple-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              How AlgoMind Helps You Thrive
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Empowering your mental wellness journey with cutting-edge AI and genuine human connection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <FeatureCard icon={<Brain className="w-8 h-8 text-white" />} title="AI Mood Detection" color="from-purple-500 to-pink-500" description="Advanced AI analyzes your conversations to understand your emotional state in real-time, providing personalized insights." />
            <FeatureCard icon={<Users className="w-8 h-8 text-white" />} title="Group Support" color="from-pink-500 to-orange-500" description="Connect with others who understand. Join anonymous group sessions matched by mood and experience." />
            <FeatureCard icon={<Heart className="w-8 h-8 text-white" />} title="Peer-to-Peer Support" color="from-blue-500 to-purple-500" description="Share experiences and receive support from peers who care, all in a safe and confidential environment." />
            <FeatureCard icon={<Shield className="w-8 h-8 text-white" />} title="Complete Privacy" color="from-green-500 to-teal-500" description="Your conversations are completely anonymous and encrypted. We prioritize your privacy and safety above all." />
            <FeatureCard icon={<Sparkles className="w-8 h-8 text-white" />} title="24/7 Availability" color="from-yellow-500 to-orange-500" description="Access support whenever you need it. Our AI companion is always here, day or night, ready to listen." />
            <FeatureCard icon={<MessageCircle className="w-8 h-8 text-white" />} title="Personalized Care" color="from-indigo-500 to-purple-500" description="Receive tailored recommendations and resources based on your unique needs and emotional journey." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards better mental health. Join thousands who trust AlgoMind.
          </p>
          <button
            onClick={handleStart}
            className="bg-white text-purple-600 font-bold py-4 px-12 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started Now
          </button>
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

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, color, description }) => (
  <div className={`group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-${color.split(' ')[1]}`}>
    <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default Home;
