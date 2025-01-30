'use client'

import { Analytic } from '@/hooks/useGA'
import { sendGAEvent } from '@next/third-parties/google'

const buttonClick = <T extends keyof Analytic>(action: T, value: Analytic[T]) => {
	sendGAEvent({
		eventName: action,
		value,
	})
}

export default function Home() {
	return (
		<div>
			<h1>This is the main page</h1>

			<button onClick={() => buttonClick('button_click', 'session_01_button')}>session 01 detail</button>

			{/* <button onClick={() => buttonClick('link_click', 'connext')}>Banner</button> */}

			<button onClick={() => buttonClick('banner_click', 'session_banner_01')}>Session 01 Banner</button>

			<button onClick={() => buttonClick('form_submit', true)}>register session</button>
		</div>
	)
}
