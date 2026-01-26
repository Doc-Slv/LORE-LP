import posthog from 'posthog-js';

const POSTHOG_KEY = 'phc_INSERT_KEY_HERE'; // TODO: Replace with env var or ask user
const POSTHOG_HOST = 'https://app.posthog.com';

export const Analytics = {
    init: () => {
        posthog.init(POSTHOG_KEY, {
            api_host: POSTHOG_HOST,
            autocapture: true,
            capture_pageview: false, // We handle this manually for SPA
            loaded: (posthog) => {
                if (import.meta.env.DEV) posthog.opt_out_capturing();
            }
        });
    },

    trackPage: (path: string) => {
        posthog.capture('$pageview', { path });
    },

    trackEvent: (name: string, properties?: Record<string, any>) => {
        posthog.capture(name, properties);
    },

    identify: (id: string, properties?: Record<string, any>) => {
        posthog.identify(id, properties);
    }
};
