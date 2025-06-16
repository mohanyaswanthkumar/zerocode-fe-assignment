import React, { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaDownload } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';
import { Message } from '../types';

// Extended rule-based responses
const responseMap: { [key: string]: string } = {
  greeting: 'Hey there! What’s on your mind today?',
  help: 'I’m here to chat! Try asking about the weather, a joke, or even a movie star!',
  weather: 'It’s always sunny in my world! 🌞 How’s the weather where you are?',
  joke: 'Why did the computer go to art school? Because it wanted to learn to draw a better "byte"! 😄',
  bye: 'Catch you later! Come back anytime!',
  prabhas:
    'Oh, a Prabhas fan? 🦁 Are we talking Baahubali or Salaar? What’s your favorite movie?',
  movie:
    'Love movies! Got a favorite genre or actor? Maybe someone like Prabhas? 😉',
  thanks: 'You’re welcome! 😊 What else can I do for you?',
};

// Varied default responses
const defaultResponses = [
  'Hmm, that’s an interesting one! Can you tell me more?',
  'I’m not quite sure about that. Try asking something else!',
  'You’ve got me curious! What’s that about?',
  'Oops, I didn’t catch that. Wanna try another question?',
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [error, setError] = useState<string | null>(null);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { logout } = useAuth();
  let recognition: SpeechRecognition | null = null;

  // Check for Web Speech API support
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setIsSpeechSupported(true);
      try {
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
        };
        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error('Speech Recognition error:', event.error);
          setError('Speech recognition failed. Please try again.');
        };
      } catch (err) {
        console.error('Failed to initialize Web Speech API:', err);
        setIsSpeechSupported(false);
        setError('Voice input initialization failed.');
      }
    } else {
      console.warn('Web Speech API not supported in this browser.');
      setIsSpeechSupported(false);
    }
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    // Map common inputs to response keys
    const keywordMap: { [key: string]: string } = {
      hi: 'greeting',
      hii: 'greeting',
      hello: 'greeting',
      help: 'help',
      weather: 'weather',
      joke: 'joke',
      bye: 'bye',
      prabhas: 'prabhas',
      movie: 'movie',
      movies: 'movie',
      thank: 'thanks',
      thanks: 'thanks',
    };
    for (const keyword in keywordMap) {
      if (input.includes(keyword)) {
        return responseMap[keywordMap[keyword]];
      }
    }
    // Random default response
    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setError(null);
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setHistory((prev) => [input, ...prev]);
    setInput('');
    setHistoryIndex(-1);

    try {
      // Simulate bot response with delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const botResponse = getBotResponse(input);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to get bot response.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
    if (e.key === 'ArrowUp' && historyIndex < history.length - 1) {
      setHistoryIndex((prev) => prev + 1);
      setInput(history[historyIndex + 1]);
    }
    if (e.key === 'ArrowDown' && historyIndex > -1) {
      setHistoryIndex((prev) => prev - 1);
      setInput(history[historyIndex - 1] || '');
    }
  };

  const exportChat = () => {
    try {
      const chatText = messages
        .map((msg) => `${msg.sender}: ${msg.text}`)
        .join('\n');
      const blob = new Blob([chatText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'chat_export.txt';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error exporting chat:', err);
      setError('Failed to export chat.');
    }
  };

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 h-screen flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Chatbot
        </h1>
        <button
          onClick={logout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Loading...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          placeholder="Type your message..."
        />
        {isSpeechSupported && recognition && (
          <button
            onClick={() => recognition!.start()}
            className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            <FaMicrophone />
          </button>
        )}
        <button
          onClick={sendMessage}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          disabled={isLoading}
        >
          Send
        </button>
        <button
          onClick={exportChat}
          className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          <FaDownload />
        </button>
      </div>
    </div>
  );
};

export default Chat;
