import { sendGAEvent } from '@next/third-parties/google'

// The analyic each type will be updated again here is the workaround to support many actions
export interface Analytic {
	button_click: string
	link_click: string
	form_submit: boolean
	banner_click: string
}

export const useGA = () => {
	const pageView = (pathname: string) => {
		sendGAEvent({
			eventName: 'page_view',
			value: pathname,
		})
	}

	const buttonClick = <T extends keyof Analytic>(action: T, value: Analytic[T]) => {
		sendGAEvent('event', action, { value })
	}

	// Track time spent on each page
	const trackTimeSpent = (startTime: number, pathname: string) => {
		const timeSpent = Date.now() - startTime
		sendGAEvent('event', 'time_spent', {
			event_category: 'Page Timing',
			event_label: pathname,
			time_spent_in_seconds: Math.floor(timeSpent / 1000),
		})
	}

	return {
		pageView,
		buttonClick,
		trackTimeSpent,
	}
}
