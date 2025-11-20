
import React, { useEffect, useRef, useState } from 'react';
import { X, Send } from 'lucide-react';
import { ChatMessage } from '../types';

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: '1',
  text: "As-salamu alaykum!\nI'm Ibraheem. How can I help you with your trip today?",
  sender: 'bot',
  timestamp: new Date()
};

export const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onToggle, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Thank you. Our team will review your request and call you at 03184898594 soon to discuss details.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-[360px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform origin-bottom-right transition-all animate-in fade-in slide-in-from-bottom-4 duration-300 ring-1 ring-black/5">
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ibraheem&clothing=graphicShirt" alt="AI Advisor" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm leading-tight">Ibraheem | Travel Assistant</h3>
                <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span> Active Now
                </span>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-[350px] bg-gray-50 overflow-y-auto flex flex-col gap-4">
             {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100 shrink-0 hidden sm:block">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ibraheem&clothing=graphicShirt" alt="AI" />
                    </div>
                  )}
                  
                  <div className={`p-3 rounded-2xl shadow-sm text-sm leading-relaxed max-w-[85%] whitespace-pre-wrap ${
                    msg.sender === 'user' 
                      ? 'bg-[#1a3c6e] text-white rounded-tr-none' 
                      : 'bg-white border border-gray-100 text-gray-700 rounded-tl-none'
                  }`}>
                     {msg.sender === 'bot' && msg.id === '1' ? (
                       <>
                         <p className="font-bold text-gray-900 mb-1">As-salamu alaykum!</p>
                         {msg.text.replace("As-salamu alaykum!\n", "").split('\n').map((line, i) => <p key={i} className={i === 0 ? "mb-2" : ""}>{line}</p>)}
                       </>
                     ) : (
                       msg.text
                     )}
                  </div>
                </div>
             ))}
             <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100">
            <form 
              className="relative"
              onSubmit={handleSendMessage}
            >
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..." 
                className="w-full bg-white border border-gray-200 text-gray-800 text-sm rounded-full py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#1a3c6e]/20 focus:border-[#1a3c6e] transition-all shadow-sm placeholder:text-gray-400"
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim()}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all ${
                  inputValue.trim() 
                    ? 'text-blue-600 hover:text-blue-700 hover:bg-blue-50' 
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={onToggle}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 ${isOpen ? 'bg-[#1a3c6e] rotate-0' : 'bg-[#1a3c6e]'}`}
      >
        {isOpen ? (
           <X size={24} className="text-white" />
        ) : (
           <div className="relative w-full h-full flex items-center justify-center">
             <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ibraheem&clothing=graphicShirt" alt="Chat" className="w-full h-full object-cover bg-white" />
             </div>
             <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
           </div>
        )}
      </button>
    </div>
  );
};
