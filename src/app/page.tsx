'use client'

import { useGA } from '@/hooks/useGA'

export default function Home() {
  const { buttonClick } = useGA()

  return (
    <div className="flex flex-col h-screen">
      {/* Banner at the top */}
      <div className="bg-blue-500 text-white py-4 text-center">
        <h1 className="text-3xl">This is the main page</h1>
      </div>

      {/* Details section */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <button
          onClick={() => buttonClick('button_click', 'session_01_button')}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          session 01 detail
        </button>

        <button
          onClick={() => buttonClick('button_click', 'session_banner_01')}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Session 01 Banner
        </button>
      </div>

      {/* Register session button at the bottom */}
      <div className="py-4 bg-gray-100 text-center">
        <button
          onClick={() => buttonClick('form_submit', true)}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Register Session
        </button>
      </div>
    </div>
  )
}
