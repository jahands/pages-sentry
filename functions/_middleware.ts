import sentryPlugin from '@cloudflare/pages-plugin-sentry'
import { RewriteFrames } from '@sentry/integrations'
import { version } from '../package.json'

function stripPrefix(path: string): string {
	const separator = '/static/_worker.js/../../'
	return path.substring(path.indexOf(separator) + separator.length)
}
export const onRequest: PagesFunction<{
	SENTRY_DSN: string
}> = (context) => {
	return sentryPlugin({
		dsn: context.env.SENTRY_DSN,
		release: version,
		integrations: [
			new RewriteFrames({
				iteratee: (frame) => {
					frame.abs_path = frame.abs_path ? stripPrefix(frame.abs_path) : frame.abs_path
					frame.filename = frame.filename ? stripPrefix(frame.filename) : frame.filename
					return frame
				},
			}),
		],
	})(context)
}
