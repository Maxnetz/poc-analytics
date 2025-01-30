'use client'

import { useGA } from '@/hooks/useGA'

export default function Home() {
	const { buttonClick } = useGA()

	return (
		<div className="flex flex-col">
			<h1>This is the main page</h1>

			<button
				onClick={() => {
					console.log('Button clicked!') // Check if the button is triggering
					buttonClick('button_click', 'homepage_banner')
				}}
			>
				test
			</button>

			<button onClick={() => buttonClick('button_click', 'session_01_button')}>session 01 detail</button>

			{/* Change 'banner_click' to 'button_click' if 'banner_click' is not in the interface */}
			<button onClick={() => buttonClick('button_click', 'session_banner_01')}>Session 01 Banner</button>

			<button onClick={() => buttonClick('form_submit', true)}>register session</button>
		</div>
	)
}
