'use client'

import { GoogleTagManager } from '@next/third-parties/google'
import type { ReactNode } from 'react'

import { PageViewMonitor } from '@/components/PageViewMonitor'

import { ReactQueryProvider } from '@/setup/ReactQueryProvider'

interface ProvidersProps {
	children: ReactNode
}

export const Providers = ({ children }: Readonly<ProvidersProps>) => {
	return (
		<ReactQueryProvider>
			<PageViewMonitor />

			{children}

			<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID} />
		</ReactQueryProvider>
	)
}
