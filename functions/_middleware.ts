import sentryPlugin from '@cloudflare/pages-plugin-sentry'
import { version } from '../package.json'

export const onRequest: PagesFunction<{
	SENTRY_DSN: string
}> = (context) => {
	return sentryPlugin({ dsn: context.env.SENTRY_DSN, release: version })(context)
}
