"use client";

import { useState } from "react";
import { useGA } from "@/hooks/useGA";

export default function Home() {
  const { action } = useGA();
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
    action("button_click", "My Button Clicked");
  };

  return (
    <div>
      <h1>This is the main page</h1>
      <button
        onClick={handleButtonClick}
        className={`px-4 py-2 text-white rounded ${
          clicked ? "bg-green-500" : "bg-blue-500"
        }`}
      >
        {clicked ? "Clicked!" : "Click Me"}
      </button>
    </div>
  );
}
