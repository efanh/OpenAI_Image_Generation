import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';

import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-[#2d2d30] sm:px-8 px-4 py-4 border-b border-b-[#2d2d30]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain"/> 
        </Link>
        <Link to="/create-post" className="font-inter font-medium bg-[#007acc] text-white px-4 py-2 rounded-md hover:bg-[#00538a] transition ease-in-out delay-50 hover:scale-105">Create</Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#1e1e1e] min-h-[calc(100vh-73px)]">
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/create-post" element={<CreatePost />} c/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App