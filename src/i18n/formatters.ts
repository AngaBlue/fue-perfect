import type { FormattersInitializer } from 'typesafe-i18n';
import { date } from 'typesafe-i18n/formatters';
import type { Locales, Formatters } from './i18n-types';

export const initFormatters: FormattersInitializer<Locales, Formatters> = locale => {
    const formatters = {
        date: date(locale, { year: 'numeric', month: 'long', day: 'numeric' })
    };

    return formatters;
};

export default initFormatters;