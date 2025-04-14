import type { FormattersInitializer } from 'typesafe-i18n';
import { date } from 'typesafe-i18n/formatters';
import type { Formatters, Locales } from './i18n-types';

export const initFormatters: FormattersInitializer<Locales, Formatters> = locale => {
	const formatters = {
		date: date(locale, { year: 'numeric', month: 'long', day: 'numeric' }),
		datetime: date(locale, { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', weekday: 'long' })
	};

	return formatters;
};

export default initFormatters;
