import React from 'react'

const Header = () => {
  return (
    <div><header class="bg-gray-900 text-white py-4 w-full">
    <div class="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
      <a href="/" class="flex items-center">
        <img src="/logo.svg" alt="Company Logo" class="h-8 w-auto mr-2" />
        <span class="text-xl font-bold">Newly Launched</span>
      </a>
      <nav class="space-x-4">
        <a href="/home" class="hover:text-gray-400">Home</a>
        <a href="/bicycles" class="hover:text-gray-400">Bicycles</a>
        <a href="/accessories" class="hover:text-gray-400">Accessories</a>
        <a href="/about" class="hover:text-gray-400">About Us</a>
        <a href="/contact" class="hover:text-gray-400">Contact</a>
      </nav>
      <div class="flex items-center">
        <span class="mr-2">$0.00</span>
        <a href="/cart" class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">0</span>
        </a>
      </div>
    </div>
    </header></div>
  )
}

export default Header