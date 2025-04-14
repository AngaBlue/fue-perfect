import type { LocalizedString } from 'typesafe-i18n';
import WrappedTranslation from './WrappedTranslation';

interface BoldTranslationProps {
	children: LocalizedString;
	suppressHydrationWarning?: boolean;
}

export default function BoldTranslation({ children, suppressHydrationWarning }: BoldTranslationProps) {
	return (
		<WrappedTranslation
			message={children}
			renderComponent={infix => <strong suppressHydrationWarning={suppressHydrationWarning}>{infix}</strong>}
		/>
	);
}
