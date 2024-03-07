import sentryPlugin from '@cloudflare/pages-plugin-sentry'
import { version } from '../package.json'

export const onRequest: PagesFunction<{
	SENTRY_DSN: string
	SENTRY_RELEASE: string
}> = (context) => {
	return sentryPlugin({
		dsn: 'https://a3edd40d3583695eebaa24e53140f622@o1072497.ingest.us.sentry.io/4506871980818432',
		release: version,
	})(context)
}
