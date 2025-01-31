'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { pageContent, useGA } from '@/hooks/useGA'

export default function Home() {
	const { buttonClick, trackTimeSpent, trackScrollDepth } = useGA()
	const [scrollPercentage, setScrollPercentage] = useState(0)

	useEffect(() => {
		const pathname = window.location.pathname
		const startTime = Date.now()

		const handleUnload = () => {
			trackTimeSpent(startTime, pathname)
		}

		window.addEventListener('beforeunload', handleUnload)

		return () => {
			window.removeEventListener('beforeunload', handleUnload)
		}
	}, [trackTimeSpent])

	useEffect(() => {
		const handleScroll = () => {
			const documentHeight = document.documentElement.scrollHeight - window.innerHeight
			const scrollPosition = window.scrollY
			const percentage = Math.round((scrollPosition / documentHeight) * 100)
			setScrollPercentage(percentage)

			trackScrollDepth()
		}

		// Attach scroll event listener
		window.addEventListener('scroll', handleScroll)

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [trackScrollDepth]) // Add trackScrollDepth as a dependency

	return (
		<div className="flex flex-col h-screen relative">
			{/* Scroll percentage indicator */}
			<div className="fixed top-0 left-0 w-full h-8 bg-gray-200">
				<div className="h-full bg-blue-500 text-white text-center" style={{ width: `${scrollPercentage}%` }}>
					{scrollPercentage}%
				</div>
			</div>

			{/* Banner at the top */}
			<div className="bg-blue-500 text-white py-4 text-center">
				<h1 className="text-3xl">This is the main page</h1>
				<p className="mt-2 text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula, nisi sit amet tempus euismod, lorem
					turpis feugiat enim, ac sodales odio nisi sit amet dolor.
				</p>
			</div>

			{/* Details section */}
			<div className="flex-1 flex flex-col items-center justify-center space-y-4">
				<div
					onClick={() => buttonClick('banner_click', 'session_banner_01')}
					className="flex items-center cursor-pointer border-red-600"
				>
					<span>Session 01 Banner</span>
					<Image
						src="https://i.pinimg.com/736x/f5/f8/87/f5f8879f0c89bfef5317d29abc54b41c.jpg"
						alt="Session Banner"
						width={350}
						height={350}
						className="ml-2"
					/>
				</div>
			</div>
			<p className="mt-2 text-xl">{pageContent.bannerText}</p>
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
