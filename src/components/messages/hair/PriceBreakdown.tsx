import { useI18nContext } from '../../../i18n/i18n-react';
import { Country, HairState, PRPPrices, Technique } from './data';

interface PriceBreakdownProps {
    state: HairState;
    country: Country;
}

export default function PriceBreakdown({ state, country }: PriceBreakdownProps) {
    const context = useI18nContext();
    const { LL } = context;

    if (!LL) console.log(context);

    // Calculate the PRP price, noting that the first session is free
    const PRPPrice = PRPPrices[state.prp - 1] * state.prp;

    const countryIndex = country === Country.NETHERLANDS ? 0 : 1;
    const firstSessionPrice = state.price[countryIndex][0];
    const secondSessionPrice = state.price[countryIndex][1];

    const bothSessionPrice = firstSessionPrice + secondSessionPrice;

    // Show discount if applicable
    const discount = state.discount ? `(${LL.HAIR.CONTENT.DISCOUNT(Math.abs(state.discount))})` : '';

    return (
        <>
            {/* Price breakdown */}
            <p>
                <strong style={{ color: '#c82613' }}>
                    {LL.HAIR.CONTENT.TREATMENT_COST(state.sessions, LL.HAIR.COUNTRY[country](), bothSessionPrice)} {discount}
                </strong>
                {state.sessions === 2 && (
                    <>
                        <br />
                        <strong style={{ textDecoration: 'underline' }}>
                            {LL.HAIR.CONTENT.SESSION_COST({ session: '1', cost: firstSessionPrice })} {discount}
                        </strong>
                        <br />
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>{LL.HAIR.CONTENT.SESSION_COST({ session: '2', cost: secondSessionPrice })} </strong>(
                            {LL.HAIR.CONTENT.SECOND_SESSION_NOTE()})
                        </span>
                    </>
                )}
                <strong style={{ color: '#c82613' }}>
                    <br />
                    {LL.HAIR.CONTENT.PRP_PRICE(PRPPrice)}
                    <br />
                    {LL.HAIR.CONTENT.TOTAL(bothSessionPrice + PRPPrice)}
                </strong>
            </p>
            <p>
                <strong>{LL.HAIR.CONTENT.PACKAGE_CONTENT(LL.HAIR.COUNTRY[country]())}</strong>
            </p>
            {/* Included product dot points */}
            <ul style={{ marginLeft: '32px' }}>
                <li>{LL.HAIR.CONTENT.INVESTIGATION()}</li>
                {/* Include flight information for Turkey */}
                {country === Country.TURKEY && (
                    <>
                        <li>{LL.HAIR.CONTENT.FLIGHT_1()}</li>
                        <li>{LL.HAIR.CONTENT.FLIGHT_2()}</li>
                    </>
                )}
                <li>{LL.HAIR.TECHNIQUE[Technique.FUE_HAIR]()}</li>
                <li>{LL.HAIR.CONTENT.SHAMPOO()}</li>
                <li>{LL.HAIR.CONTENT.PRP_COUNT(state.prp)}</li>
                <li>{LL.HAIR.CONTENT.FOLLOW_UP()}</li>
            </ul>
        </>
    );
}
