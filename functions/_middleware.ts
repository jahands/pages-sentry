import sentryPlugin from '@cloudflare/pages-plugin-sentry'

export const onRequest: PagesFunction<{
	SENTRY_DSN: string
	SENTRY_RELEASE: string
}> = (context) => {
	return sentryPlugin({ dsn: context.env.SENTRY_DSN, release: context.env.SENTRY_RELEASE })(context)
}
