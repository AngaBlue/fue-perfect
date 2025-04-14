import type { GetStaticProps } from 'next';
import type { Locales } from '../i18n/i18n-types';
import { baseLocale, loadedLocales } from '../i18n/i18n-util';
import { loadLocaleAsync } from '../i18n/i18n-util.async';

const getI18nProps: GetStaticProps = async context => {
	const locale = (context.locale as Locales) ?? baseLocale;
	await loadLocaleAsync(locale);

	return {
		props: {
			i18n: {
				locale,
				dictionary: loadedLocales[locale]
			}
		}
	};
};

export default getI18nProps;
