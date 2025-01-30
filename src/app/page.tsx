import { useGA } from "@/hooks/useGA"


export default function Home() {
  const { action } = useGA()

  const handleButtonClick = () => {
    action('button_click', 'My Button Clicked')
  }

  return (
    <div>
      <h1>This is the main page</h1>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  )
}
