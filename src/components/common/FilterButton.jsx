// components/FilterButton.js
import React from 'react';
import { FaFilter } from "react-icons/fa";

export default function FilterButton({ setClickhandler, clickhandler }) {
  return (
    <div className="flex justify-end px-4">
      <button 
        onClick={() => setClickhandler(!clickhandler)} 
        className="text-white bg-blue-600 p-2 rounded hover:bg-blue-700 flex items-center gap-2"
      >
        <FaFilter />
      </button>
    </div>
  );
}
