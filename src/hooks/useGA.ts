import { sendGAEvent } from '@next/third-parties/google'

// The analyic each type will be updated again here is the workaround to support many actions
interface Analytic {
	button_click: string
	link_click: number
	form_submit: boolean
}

export const useGA = () => {
	const pageView = (pathname: string) => {
		sendGAEvent({
			eventName: 'page_view',
			value: pathname,
		})
	}

	const action = <T extends keyof Analytic>(action: T, value: Analytic[T]) => {
		sendGAEvent({
			eventName: action,
			value,
		})
	}

	return {
		pageView,
		action,
	}
}
