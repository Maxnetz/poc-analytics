'use client'

import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'

import { useGA } from '@/hooks/useGA'

export const PageViewMonitor = () => {
	const pathname = usePathname()

	const { pageView } = useGA()

	useQuery({
		queryKey: ['page-view', pathname],
		queryFn: () => {
			pageView(pathname)

			return pathname
		},
	})

	return null
}
