"use client";

import { sendGAEvent } from "@next/third-parties/google";

// import { useState } from "react";
// import { useGA } from "@/hooks/useGA";

export default function Home() {
//   const { action } = useGA();
//   const [clicked, setClicked] = useState(false);

//   const handleButtonClick = () => {
//     setClicked(true);
//     action("button_click", "My Button Clicked");
//   };

  return (
    <div>
      <h1>This is the main page</h1>
	  <button
        onClick={() => sendGAEvent('event', 'buttonClicked', { value: 'xyz' })}
      >
        Send Event
      </button>
    </div>
  );
}
