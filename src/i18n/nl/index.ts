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
        CONTENT: {
            INSPECTION_1:
                "Bedankt voor de interesse die u getoond heeft in onze organisatie, wij hebben uw aanvraag + foto's in goede orde ontvangen.",
            INSPECTION_2:
                "Uw foto's / toelichting zijn beoordeeld en hieronder vindt u de analyse terug m.b.t uw Haartransplantatie behandeling, u bent altijd van harte welkom voor een vrijblijvend consult naar onze kliniek te Hoofddorp!",
            INSPECTION_3:
                "* Aangezien de beoordeling d.m.v. foto's is vastgesteld, bestaat een kleine kans van afwijking na de definitieve onderzoek in onze kliniek.",
            NO_INSPECTION_1:
                'Bedankt voor de interesse die u getoond heeft in onze organisatie, u heeft op <>{date:Date|date}<> een vooronderzoek ondergaan omtrent uw FUE Haartransplantatie behandeling.',
            NO_INSPECTION_2: 'Hieronder vindt u de analyse en de samenvatting terug wat wij hebben gesproken.',
            MEDICAL_TEAM_REPORT: 'Rapport medisch team',
            TREATMENT: '<>Behandeling<>: FUE Haartransplantatie behandeling',
            FUE_HAIR_TRANSPLANT: '',
            QUALITY_VOLUME: 'Kwaliteit/ Volume donor',
            QUALITY_TYPE: 'Kwaliteit/ Type haar',
            GRAFT_COUNT: '<>Aantal grafts {session:string} sessie<>: {range:string}',
            NOT_REQUIRED: 'niet verplicht',
            TECHNIQUE: 'Techniek',
            ZONES: 'Zone'
        }
    }
};

export default nl;
