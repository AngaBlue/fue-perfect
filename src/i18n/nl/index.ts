import type { BaseTranslation } from '../i18n-types';

const nl: BaseTranslation = {
    GENERIC: {
        DEAR: 'Geachte {title:string} {name:string} {surname:string}',
        MR: 'heer',
        MRS: 'mevrouw',
        FIRST: 'eerste',
        SECOND: 'tweede'
    },
    HAIR: {
        SUBJECT: 'Offerte + Analyse {2:LocalizedString} behandeling te Hoofddorp voor dhr {0:string} {1:string}',
        CONTENT: {
            INSPECTION_1:
                "Bedankt voor de interesse die u getoond heeft in onze organisatie, wij hebben uw aanvraag + foto's in goede orde ontvangen.",
            INSPECTION_2:
                "Uw foto's / toelichting zijn beoordeeld en hieronder vindt u de analyse terug m.b.t uw {0} behandeling, u bent altijd van harte welkom voor een vrijblijvend consult naar onze kliniek te Hoofddorp!",
            INSPECTION_3:
                "* Aangezien de beoordeling d.m.v. foto's is vastgesteld, bestaat een kleine kans van afwijking na de definitieve onderzoek in onze kliniek.",
            NO_INSPECTION_1:
                'Bedankt voor de interesse die u getoond heeft in onze organisatie, u heeft op <>{0:Date|date}<> een vooronderzoek ondergaan omtrent uw {1:LocalizedString} behandeling.',
            NO_INSPECTION_2: 'Hieronder vindt u de analyse en de samenvatting terug wat wij hebben gesproken.',
            MEDICAL_TEAM_REPORT: 'Rapport medisch team',
            TREATMENT: '<>Behandeling<>: {0:LocalizedString}',
            QUALITY_VOLUME: 'Kwaliteit / Volume donor',
            QUALITY_TYPE: 'Kwaliteit / Type haar',
            GRAFT_COUNT: '<>Aantal grafts {session|{1: eerste, 2: tweede}} sessie<>: {range:string} grafts',
            NOT_REQUIRED: 'niet verplicht',
            TECHNIQUE: 'Techniek',
            ZONES: 'Zone',
            ENDING_COMMENT:
                'Wij hopen u hiermee voldoende te hebben geïnformeerd en kijken uit naar uw bevindingen, mocht u vragen of opmerkingen hebben dan horen wij deze graag van u.',
            KIND_REGARDS: 'Met vriendelijke groeten',
            EXTRA_REMARKS: 'Extra Opmerking',
            TREATMENT_NOTES: 'Behandeling data',
            TREATMENT_LOCATION: 'Behandeling bestemming',
            PRP_PRICE: 'Kosten PRP behandeling (1 gratis): €{0:number}',
            TOTAL: 'Totaal: €{0:number}',
            DISCOUNT: '€{0:number} korting',
            FLIGHT_1: 'Retour vliegticket met KLM of Turkish Airlines',
            FLIGHT_2: '3 overnachtingen in Hilton Doubbletree Istanbul',
            ANESTHESIA: '<>Verdoving<>: Pijnloos lokaal verdoving',
            SESSIONS: '<>Sessie<>: {0:number} sessie behandeling',
            SHAMPOO: 'Shampoo, lotion en medicatie',
            FOLLOW_UP: '4x Nacontrole gedurende 10 maanden',
            PRP_COUNT: '{0:number}x prp behandeling in Nederland',
            INVESTIGATION: 'Vooronderzoek',
            TREATMENT_COST: 'Kosten behandeling {0:number} sessie{{s}} in {1:string} All-in €{2:number}',
            SESSION_COST: '{session|{1: Eerste, 2: Tweede}} sessie: €{cost:number}',
            SECOND_SESSION_NOTE: 'na min 12 maanden genezingstijd, niet verplicht',
            PACKAGE_CONTENT: 'Inhoud All-in pakket {0:string}:',
            SESSION_DURATION: '<>Duur behandeling {0|{1: eerste, 2: tweede}} sessie<>: {1:string} uur',
            SESSION_ZONES: '{0|{1: Eerste, 2: Tweede}} sessie zone: {1:string} (zie schema onder)'
        },
        TECHNIQUE: ['FUE Haartransplantatie', 'DHI Haartransplantatie', 'FUE Baardtransplantatie', 'DHI Baardtransplantatie'],
        COUNTRY: ['Turkije', 'Nederland', 'Turkije/Nederland'],
        GENDER: ['Mannelijk', 'Vrouwelijk'],
        QUALITY: ['Slecht', 'Normaal', 'Goed', 'Perfect']
    },
    DENTAL: {
        IMPLANT_TYPE: [
            'Normaal',
            'Implantaat',
            'Zirconium',
            'Porcelein',
            'Paars',
            'Wit',
            'Blank',
            'E-max',
            'Implantaat Porcelein',
            'Implantaat Wit',
            'Implantaat Zirconium',
            'Implantaat E-max'
        ],
        ALL_ON_TYPE: ['None', 'All On 4', 'All On 6'],
        ALL_ON_MATERIAL: ['Porcelein', 'Zirconium']
    }
};

export default nl;
