import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { ReactNode } from 'react'

import './globals.css'
import { Providers } from './providers'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'PoC Analytics',
	description:
		'This proof of concept aims to demonstrate how to track user behavior on a webpage, including scroll depth and time spent on the page, using Google Analytics.',
	keywords: ['analytics', 'user behavior', 'scroll tracking', 'time on page'],
}

interface RootLayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
