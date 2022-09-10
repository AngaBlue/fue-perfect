import { useI18nContext } from '../../../i18n/i18n-react';
import { Countries, HairState, PRPPrices } from './data';

export default function PriceBreakdown(state: HairState) {
    const { LL } = useI18nContext();

    // Calculate the PRP price, noting that the first session is free
    const PRPPrice = PRPPrices[state.prp - 1] * state.prp;

    const countryIndex = state.country === Countries.NETHERLANDS ? 0 : 1;
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
                    Kosten behandeling {state.sessions} sessie
                    {state.sessions === 1 ? '' : 's'} in {state.country} All-in €{bothSessionPrice} {discount}
                </strong>
                {state.sessions === 2 && (
                    <>
                        <br />
                        <strong style={{ textDecoration: 'underline' }}>
                            Eerste sessie: €{firstSessionPrice} {discount}
                        </strong>
                        <br />
                        <span style={{ textDecoration: 'underline' }}>
                            <strong>Tweede sessie: €{secondSessionPrice} </strong>(na min 12 maanden genezingstijd, niet verplicht)
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
                <strong>Inhoud All-in pakket Turkije/Istanbul:</strong>
            </p>
            {/* Included product dot points */}
            <ul style={{ marginLeft: '32px' }}>
                <li>{LL.HAIR.CONTENT.INVESTIGATION()}</li>
                {/* Include flight information for Turkey */}
                {state.country === Countries.TURKEY && (
                    <>
                        <li>{LL.HAIR.CONTENT.FLIGHT_1()}</li>
                        <li>{LL.HAIR.CONTENT.FLIGHT_2()}</li>
                    </>
                )}
                <li>{LL.HAIR.TREATMENT.FUE_HAIR()}</li>
                <li>{LL.HAIR.CONTENT.SHAMPOO()}</li>
                <li>{LL.HAIR.CONTENT.PRP_COUNT(state.prp)}</li>
                <li>{LL.HAIR.CONTENT.FOLLOW_UP()}</li>
            </ul>
        </>
    );
}
