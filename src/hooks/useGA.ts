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
		console.log('GA Event:', action, value) // Debug log to see if this is called
		sendGAEvent('event', action, { value })
	}

	return {
		pageView,
		buttonClick,
	}
}
