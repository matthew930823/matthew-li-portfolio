import React, { useState, useRef, useEffect } from 'react';
    import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
    import { generateChatResponse } from '../services/gemini';
    import { ChatMessage, MessageRole } from '../types';
    
    const ChatWidget: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [messages, setMessages] = useState<ChatMessage[]>([
        { role: MessageRole.MODEL, text: "嗨！我是 Matthew 的 AI 助手。歡迎詢問關於他的專案或技能的任何問題！", timestamp: Date.now() }
      ]);
      const [input, setInput] = useState("");
      const [loading, setLoading] = useState(false);
      const messagesEndRef = useRef<HTMLDivElement>(null);
    
      const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      };
    
      useEffect(() => {
        if (isOpen) scrollToBottom();
      }, [messages, isOpen]);
    
      const handleSend = async () => {
        if (!input.trim() || loading) return;
    
        const userMsg: ChatMessage = { role: MessageRole.USER, text: input, timestamp: Date.now() };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);
    
        const replyText = await generateChatResponse(input);
        
        const botMsg: ChatMessage = { role: MessageRole.MODEL, text: replyText, timestamp: Date.now() };
        setMessages(prev => [...prev, botMsg]);
        setLoading(false);
      };
    
      const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
      };
    
      return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
          {/* Chat Window */}
          {isOpen && (
            <div className="mb-4 w-[90vw] max-w-sm h-96 glass-panel rounded-2xl flex flex-col shadow-2xl border border-cyan-500/30 overflow-hidden transform transition-all duration-300 origin-bottom-right">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-900 to-blue-900 p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-cyan-300" />
                  <span className="font-semibold text-white">AI 助手</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
    
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/80">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-xl p-3 text-sm ${
                      msg.role === MessageRole.USER 
                        ? 'bg-cyan-600 text-white rounded-tr-none' 
                        : 'bg-slate-700 text-gray-200 rounded-tl-none border border-slate-600'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-700 rounded-xl rounded-tl-none p-3 border border-slate-600 flex gap-1">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></span>
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
    
              {/* Input */}
              <div className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="想問什麼關於 Matthew 的事？"
                  className="flex-1 bg-slate-900 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-slate-700"
                />
                <button 
                  onClick={handleSend}
                  disabled={loading}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white p-2 rounded-lg transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
    
          {/* Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Sparkles className="w-6 h-6 text-white" />}
            {!isOpen && (
              <span className="absolute right-16 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                與 AI 對話
              </span>
            )}
          </button>
        </div>
      );
    };
    
    export default ChatWidget;
    