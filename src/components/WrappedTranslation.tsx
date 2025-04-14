import type React from 'react';
import type { LocalizedString } from 'typesafe-i18n';

interface WrappedTranslationProps {
	message: LocalizedString;
	renderComponent: (messagePart: LocalizedString) => React.ReactNode;
}

export default function WrappedTranslation({ message, renderComponent }: WrappedTranslationProps) {
	const [prefix, infix, postfix] = message.split('<>') as LocalizedString[];

	return (
		<>
			{prefix}
			{renderComponent(infix)}
			{postfix}
		</>
	);
}
