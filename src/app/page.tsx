'use client'

import { useEffect } from 'react'

import { useGA } from '@/hooks/useGA'

export default function Home() {
	const { buttonClick, trackTimeSpent, trackScrollDepth } = useGA()

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
			trackScrollDepth() // Call the scroll tracking function
		}

		// Attach scroll event listener
		window.addEventListener('scroll', handleScroll)

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [trackScrollDepth]) // Add trackScrollDepth as a dependency

	return (
		<div className="flex flex-col h-screen">
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
				<div className="w-3/4 text-center">
					<p className="text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl
						quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem.
						Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus.
						Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu,
						luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin
						tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget
						sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor
						neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod,
						aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum
						ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum
						aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu
						tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus
						euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
						bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus
						condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo
						hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse
						sed lectus euismod, aliquam metus eu, luctus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis
						metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl
						quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem.
						Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus.
						Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu,
						luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin
						tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget
						sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor
						neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod,
						aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum
						ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum
						aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu
						tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus
						euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
						bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus
						condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo
						hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse
						sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis
						metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl
						quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem.
						Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus.
						Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu,
						luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin
						tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget
						sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor
						neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod,
						aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum
						ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum
						aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu
						tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus
						euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
						bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus
						condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo
						hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse
						sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis
						metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl
						quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem.
						Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus.
						Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu,
						luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin
						tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget
						sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor
						neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod,
						aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum
						ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum
						aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu
						tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus
						euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
						bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus
						condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo
						hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse
						sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis
						metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl
						quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem.
						Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus.
						Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu,
						luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin
						tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget
						sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor
						neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod,
						aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum
						ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum
						aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu
						tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus
						euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
						bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus
						condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo
						hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse
						sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis
						metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl
						quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem.
						Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus.
						Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu,
						luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin
						tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget
						sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor
						neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod,
						aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum
						ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum
						aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu
						tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus
						euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut
						bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus
						condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo
						hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse
						sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus. Cras ut est quis
						metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl
						quis leo hendrerit, eu tempor neque cursus. Cras ut est quis metus condimentum aliquet eget sed lorem.
						Suspendisse sed lectus euismod, aliquam metus eu, luctus dolor Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Vivamus ut bibendum ipsum. Proin tincidunt nisl quis leo hendrerit, eu tempor neque cursus.
						Cras ut est quis metus condimentum aliquet eget sed lorem. Suspendisse sed lectus euismod, aliquam metus eu,
						luctus dolor
					</p>
				</div>

				<button
					onClick={() => buttonClick('button_click', 'session_01_button')}
					className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
				>
					session 01 detail
				</button>

				<button
					onClick={() => buttonClick('banner_click', 'session_banner_01')}
					className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
				>
					Session 01 Banner
				</button>
			</div>

			{/* Register session button at the bottom */}
			<div className="py-4 bg-gray-100 text-center">
				<p className="text-lg">
					Curabitur nec feugiat ipsum. Sed pharetra erat vel orci tristique, non tincidunt ipsum volutpat. Etiam
					consequat magna ut volutpat iaculis. Phasellus eu magna felis.
				</p>

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
