import { GetStaticProps } from 'next';
import { loadedLocales } from '../i18n/i18n-util';
import { loadAllLocalesAsync } from '../i18n/i18n-util.async';

const getI18nProps: GetStaticProps = async () => {
    const locale = 'nl';
    await loadAllLocalesAsync();

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
