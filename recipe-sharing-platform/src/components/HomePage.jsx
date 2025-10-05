import React from 'react';
import { useState, useEffect } from 'react'
import './data.json'

export default function HomePage() {
const [count, setCount] = useState(0) --- IGNORE ---
  return (
    <>
        <div className='container mx-auto sm:p-3 md:p-4 shadow-lg hover: shadow-2xl rounded-lg scale-105 transition-transform duration-300'>
            <h2 className='text-blue-500 p-4 '>ID</h2>
            <h3 className='text-blue-900 p-3 '>Title</h3>
            <p className='text-blue-200 p-3'>Summary</p>
            <img src="" alt="Recipe Image" />
        </div>
    </>
  );
}
