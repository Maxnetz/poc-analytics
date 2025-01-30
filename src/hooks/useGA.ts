import { sendGAEvent } from '@next/third-parties/google'

// The analyic each type will be updated again here is the workaround to support many actions
export interface Analytic {
	button_click: string
	link_click: string
	form_submit: boolean
	banner_click: string
	scroll_depth: number
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

	const trackScrollDepth = () => {
		const documentHeight = document.documentElement.scrollHeight - window.innerHeight
		const scrollPosition = window.scrollY
		const scrollPercentage = Math.round((scrollPosition / documentHeight) * 100)
	
		// Track scroll depth when user reaches certain thresholds
		if (scrollPercentage >= 25 && scrollPercentage < 50) {
		  sendGAEvent('event', 'scroll_depth', {
			event_category: 'Scroll Tracking',
			event_label: '25%',
			value: scrollPercentage,
		  })
		} else if (scrollPercentage >= 50 && scrollPercentage < 75) {
		  sendGAEvent('event', 'scroll_depth', {
			event_category: 'Scroll Tracking',
			event_label: '50%',
			value: scrollPercentage,
		  })
		} else if (scrollPercentage >= 75 && scrollPercentage < 100) {
		  sendGAEvent('event', 'scroll_depth', {
			event_category: 'Scroll Tracking',
			event_label: '75%',
			value: scrollPercentage,
		  })
		} else if (scrollPercentage >= 100) {
		  sendGAEvent('event', 'scroll_depth', {
			event_category: 'Scroll Tracking',
			event_label: '100%',
			value: scrollPercentage,
		  })
		}
	  }

	return {
		pageView,
		buttonClick,
		trackTimeSpent,
		trackScrollDepth,
	}
}
