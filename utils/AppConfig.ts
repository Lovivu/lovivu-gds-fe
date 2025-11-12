import type { LocalePrefixMode } from 'next-intl/routing';
import { getBaseUrl } from './Helpers';

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
    name: 'Lovivu GDS',
    description: 'A modern GDS for travel agencies.',
    url: `${getBaseUrl()}/`,
    locales: ['en', 'vi'],
    defaultLocale: 'en',
    localePrefix,
    pathnames: {
        '/': '/',
        '/login': {
            en: '/login',
            vi: '/dang-nhap'
        },
        '/register': {
            en: '/register',
            vi: '/dang-ky'
        },
        '/plan': {
            en: '/plan',
            vi: '/chuyen-di'
        },
        '/plan/create': {
            en: '/plan/create',
            vi: '/chuyen-di/tao-moi'
        },
        '/plan/[id]': {
            en: '/plan/[id]',
            vi: '/chuyen-di/[id]'
        },
        '/plan-recommendation/create': {
            en: '/plan-recommendation/create',
            vi: '/de-xuat-chuyen-di/tao-moi'
        }
    }
};