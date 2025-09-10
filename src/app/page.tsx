"use client";

import React, { useState } from 'react';

// Quote logo image for the header
const QuoteIcon = () => (
  <img
    src="/quote-logo.jpg"
    alt="Quote Logo"
    width={48}
    height={48}
    className="text-gray-800"
    style={{ display: 'inline-block' }}
  />
);

// SVG Icon for the copy button
const CopyIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="mr-2"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);


export default function QuoteGeneratorPage() {
  // Array of quotes to be displayed randomly
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle",
    },
    {
      text: "Whoever is happy will make others happy too.",
      author: "Anne Frank",
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    }
  ];

  // State to hold the current quote
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  
  // State to manage the text of the copy button
  const [copyButtonText, setCopyButtonText] = useState("Copy");

  // Function to get a new random quote
  const handleNewQuote = () => {
    let randomIndex;
    // Ensure the new quote is different from the current one
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (quotes[randomIndex].text === currentQuote.text);

    setCurrentQuote(quotes[randomIndex]);
  };

  // Function to copy the current quote to the clipboard
  const handleCopyQuote = () => {
    const quoteToCopy = `"${currentQuote.text}" - ${currentQuote.author}`;
    
    // Using a temporary textarea element to facilitate the copy command
    const textArea = document.createElement("textarea");
    textArea.value = quoteToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        setCopyButtonText("Copied!");
    } catch (err) {
        console.error('Failed to copy text: ', err);
        setCopyButtonText("Failed");
    }
    document.body.removeChild(textArea);

    // Reset the button text after 2 seconds
    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full font-sans bg-[#F8F5F2] flex flex-col items-center justify-between">
      <main className="flex flex-col flex-grow items-center justify-between w-full p-6 md:p-8">
        {/* Header Section */}
        <header className="w-full max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <QuoteIcon />
            <h1 className="text-3xl font-bold text-gray-800">Quote generator</h1>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-col items-center justify-center flex-grow w-full">
          {/* Quote Display Card */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 sm:p-12 md:p-16 w-full max-w-3xl min-h-[250px] flex flex-col justify-center items-center transform transition-all duration-300 mx-auto">
            <blockquote className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed">
                "{currentQuote.text}"
              </p>
              <footer className="mt-6 text-md sm:text-lg text-gray-500">
                - {currentQuote.author}
              </footer>
            </blockquote>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            <button 
              onClick={handleNewQuote}
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-75 transition-transform transform hover:scale-105"
            >
              Get new quote
            </button>
            <button
              onClick={handleCopyQuote}
              className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all duration-300 flex items-center justify-center"
            >
              <CopyIcon />
              {copyButtonText}
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="w-full max-w-4xl mx-auto flex justify-between text-sm text-gray-500">
          <p>&copy; 2025 Quoted.</p>
          <p>All rights reserved</p>
        </footer>
      </main>
    </div>
  );
}
