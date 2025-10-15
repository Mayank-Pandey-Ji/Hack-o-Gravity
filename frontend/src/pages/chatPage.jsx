import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome to AlgoMind! Start chatting below.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
  if (input.trim() === "") return;

  const userMessage = { text: input, sender: "user" };
  setMessages(prev => [...prev, userMessage]);
  setInput("");
  setLoading(true);

  try {
    const response = await axios.post(
      "https://hack-o-gravity-two.vercel.app/api/chat",
      { messages: [{ role: "user", content: input }] }
    );
    // Use 'reply' instead of 'message'
    const botMessageText = response.data.reply || "AlgoMind could not respond.";
    setMessages(prev => [...prev, { text: botMessageText, sender: "bot" }]);
  } catch (error) {
    setMessages(prev => [...prev, { text: "Failed to get response from AlgoMind.", sender: "bot" }]);
  } finally {
    setLoading(false);
  }
};


  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="font-sans text-gray-800 h-screen flex flex-col">
      {/* Centered Chat Container */}
      <div className="flex-1 flex items-center justify-center mt-20 bg-gray-100 px-4">
        <div className="flex flex-col w-full max-w-4xl bg-white rounded-xl shadow-lg h-[80vh]">
          {/* Chat Messages */}
          <div className="flex-1 p-6 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[60%] ${
                    msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="mb-4 flex justify-start">
                <div className="px-4 py-2 rounded-lg max-w-[60%] bg-gray-200 text-gray-800 animate-pulse">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="bg-gray-100 p-4 flex items-center gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition"
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
