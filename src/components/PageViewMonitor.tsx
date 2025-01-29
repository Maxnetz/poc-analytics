'use client'

import { useQuery } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'

import { useGTM } from '@/hooks/useGTM'

export const PageViewMonitor = () => {
	const pathname = usePathname()

	const { pageView } = useGTM()

	useQuery({
		queryKey: ['page-view', pathname],
		queryFn: () => {
			pageView(pathname)

			return pathname
		},
	})

	return null
}
