'use client'

import React, { useEffect, useState } from 'react'

const searchBar: React.FC = () => {
    
  return (
    <div className="flex justify-center items-center bg-slate-800 rounded-md ">
        <form className="w-full max-w-sm ">
            <div className="flex items-center   py-2">
                <input
                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                name='search'
                
                placeholder="Search..."
                aria-label="Search"
                />
                <button
                className="flex-shrink-0 bg-gray-800 hover:bg-gray-700 border-gray-300 hover:border-gray-400 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
               
                >
                Search
                </button>
            </div>
        </form>
  </div>
  )
}

export default searchBar