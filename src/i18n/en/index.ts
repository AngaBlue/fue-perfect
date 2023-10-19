import type { Translation } from '../i18n-types';
import nl from '../nl';

const en: Translation = {
    GENERIC: {
        DEAR: 'Dear {title} {name} {surname}',
        MR: 'Mr.',
        MRS: 'Mrs.',
        FIRST: 'first',
        SECOND: 'second'
    },
    HAIR: {
        SUBJECT: 'Quote + Analysis for {2} treatment in Hoofddorp for {0} {1}',
        CONTENT: {
            INSPECTION_1:
                'Thank you for the interest you have shown in our organization, we have received your request + photos in good order.',
            INSPECTION_2:
                'Your photos / comments have been reviewed and below you will find the analysis of your {0} treatment, you are always welcome for a free consultation at our clinic in Hoofddorp!',
            INSPECTION_3:
                'Since the assessment is determined by photographs, there is a small chance of deviation after the final examination in our clinic.',
            NO_INSPECTION_1:
                'Thank you for the interest you have shown in our organization, you underwent a preliminary examination on <>{0|date}<> regarding your {1}.',
            NO_INSPECTION_2: 'Below is the analysis and summary which we discussed.',
            MEDICAL_TEAM_REPORT: 'Medical team report',
            TREATMENT: '<>Treatment<>: {0}',
            QUALITY_VOLUME: 'Quality / Volume donor',
            QUALITY_TYPE: 'Quality / Type of hair',
            GRAFT_COUNT: '<>Number of grafts {session|{1: first, 2: second}} session<>: {range} grafts',
            NOT_REQUIRED: 'not required',
            TECHNIQUE: 'Technique',
            ZONES: 'Zone',
            ENDING_COMMENT:
                'We hope to have informed you sufficiently with this and look forward to your findings, should you have any questions or comments we would be happy to hear from you.',
            KIND_REGARDS: 'Yours sincerely',
            EXTRA_REMARKS: 'Additional Note',
            TREATMENT_NOTES: 'Treatment notes',
            TREATMENT_LOCATION: 'Treatment destination',
            PRP_PRICE: 'Cost of PRP treatment (1 free): €{0}',
            TOTAL: 'Total: €{0}',
            DISCOUNT: '€{0} discount',
            FLIGHT_1: 'Return flight ticket with KLM or Turkish Airlines',
            FLIGHT_2: '3 nights in Hilton DoubleTree Istanbul',
            ANESTHESIA: '<>Anesthesia<>: Painless local anesthesia',
            SESSIONS: '<>Session<>: {0} session treatment',
            SHAMPOO: 'Shampoo, lotion and medication',
            FOLLOW_UP: '4x follow-up checkup during 10 months',
            PRP_COUNT: '{0}x prp treatment in the Netherlands',
            INVESTIGATION: 'Preliminary examination',
            TREATMENT_COST: 'Cost of treatment {0} session{{s}} in {1} all-inclusive €{2}',
            SESSION_COST: '{session|{1: First, 2: Second}} session: €{cost}',
            SECOND_SESSION_NOTE: 'after min 12 months healing time, not required',
            PACKAGE_CONTENT: 'Contents all-inclusive package {0}:',
            SESSION_DURATION: '<>Duration of treatment {0|{1: first, 2: second}} session<>: {1} hours',
            SESSION_ZONES: '{0|{1: First, 2: Second, FUE: FUE, DHI: DHI}} session zone: {1} (see diagram below)'
        },
        TECHNIQUE: [
            'FUE Hair Transplant',
            'DHI Hair Transplant',
            'FUE + DHI Hair Transplant',
            'FUE Beard Transplant',
            'DHI Beard Transplant'
        ],
        COUNTRY: ['Turkey', 'Netherlands', 'Turkey/Netherlands'],
        GENDER: ['Male', 'Female'],
        QUALITY: ['Poor', 'Normal', 'Good', 'Perfect']
    },
    HAIR_APPOINTMENT: (nl as Translation).HAIR_APPOINTMENT,
    DENTAL_APPOINTMENT: (nl as Translation).DENTAL_APPOINTMENT,
    DENTAL: (nl as Translation).DENTAL
};

export default en;
