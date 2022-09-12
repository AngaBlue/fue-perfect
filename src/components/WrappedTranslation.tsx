import { LocalizedString } from 'typesafe-i18n';

interface WrappedTranslationProps {
    message: LocalizedString;
    renderComponent: (messagePart: LocalizedString) => JSX.Element;
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
