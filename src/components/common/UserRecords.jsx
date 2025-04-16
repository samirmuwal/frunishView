
 import React from 'react'
 
 export default function UserRecords() {
   return (
    <>
     <div class="p-7 space-y-4 m-4 bg-white">
    <div class="flex justify-between px-3 gap-7 w-full">
      
      {/* <!-- Dropdown --> */}
      <div class="flex gap-[50%] items-center">
        <div class="border px-10 py-2 relative">
          {/* <!-- Replace icon dynamically --> */}
          <span>&#9660;</span>
          <ul class="absolute right-0 top-[32px] border hidden">
            <li class="px-[38px] border-gray-400 border hover:bg-blue-300" data-value="5">5</li>
            <li class="px-[38px] border-gray-400 border hover:bg-blue-300" data-value="10">10</li>
            <li class="px-[38px] border-gray-400 border hover:bg-blue-300" data-value="20">20</li>
          </ul>
        </div>
      </div>

      {/* <!-- Search Bar --> */}
      <div class="flex px-4 py-3 rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input type="email" placeholder="Search Something..." class="w-full outline-none bg-transparent text-gray-600 text-sm" />
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" class="fill-gray-600">
            <path d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"/>
          </svg>
        </a>
      </div>

      {/* <!-- Action Icons --> */}
      <div class="flex flex-row gap-4 items-center text-[20px]">
        <div>
          <span class="text-green-500 flex items-center bg-gray-200 shadow-gray-400 shadow-md p-1 hover:scale-110 duration-500">🔁</span>
        </div>
        <span class="text-red-700 flex items-center bg-gray-200 shadow-gray-400 shadow-md p-1 hover:scale-110 duration-500">🗑️</span>
        <span class="text-green-700 flex items-center bg-gray-200 shadow-gray-400 shadow-md p-1 hover:scale-110 duration-500">📄</span>
        <span class="text-green-700 flex items-center bg-gray-200 shadow-gray-400 shadow-md p-1 hover:scale-110 duration-500">📄</span>
      </div>
    </div>

    {/* <!-- Table --> */}
    <div>
      <table class="table-auto w-full border-gray-200 border-2">
        <thead>
          <tr class="bg-gray-50 text-gray-500">
            <th class="border-gray-200 border-2 px-4 py-2"><input type="checkbox" /></th>
            <th class="border-gray-200 border-2 px-4 py-2">Name</th>
            <th class="border-gray-200 border-2 px-4 py-2">Email</th>
            <th class="border-gray-200 border-2 px-4 py-2">Phone</th>
            <th class="border-gray-200 border-2 px-4 py-2">Status</th>
            <th class="border-gray-200 border-2 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- Sample row --> */}
          <tr class="text-center text-gray-500">
            <td class="border px-4 py-2"><input type="checkbox" /></td>
            <td class="border-gray-200 border-2 px-4 py-2">John Doe</td>
            <td class="border-gray-200 border-2 px-4 py-2">john@example.com</td>
            <td class="border-gray-200 border-2 px-4 py-2">1234567890</td>
            <td class="border-gray-200 border-2 px-4 py-2"><span class="bg-green-400 text-white px-2.5 rounded-2xl font-bold">Active</span></td>
            <td class="border-gray-200 border-2 px-4 py-2 text-green-600">✏️</td>
          </tr>
          {/* <!-- If no records --> */}
           <tr><td colspan="6" class="text-center py-4">No records</td></tr> 
        </tbody>
      </table>

      {/* <!-- Pagination --> */}
      <div class="flex items-center justify-center space-x-4 mt-4">
        <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md shadow-sm transition-all duration-200">Prev</button>
        <span class="text-lg font-semibold text-blue-600">1</span>
        <span class="text-lg font-semibold text-blue-600">⏪</span>
        <span class="text-lg font-semibold text-blue-600">⏩</span>
        <span class="text-lg font-semibold text-blue-600">5</span>
        <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md shadow-sm transition-all duration-200">Next</button>
      </div>
    </div>
  </div>


    </>
   )
 }
 