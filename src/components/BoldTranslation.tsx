import { LocalizedString } from 'typesafe-i18n';
import WrappedTranslation from './WrappedTranslation';

interface BoldTranslationProps {
    children: LocalizedString;
}

export default function BoldTranslation({ children }: BoldTranslationProps) {
    return <WrappedTranslation message={children} renderComponent={infix => <strong>{infix}</strong>} />;
}
