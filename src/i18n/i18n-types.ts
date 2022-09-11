// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'nl'

export type Locales =
	| 'en'
	| 'nl'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	GENERIC: {
		/**
		 * Geachte {title} {name} {surname}
		 * @param {string} name
		 * @param {string} surname
		 * @param {string} title
		 */
		DEAR: RequiredParams<'name' | 'surname' | 'title'>
		/**
		 * heer
		 */
		MR: string
		/**
		 * mevrouw
		 */
		MRS: string
		/**
		 * eerste
		 */
		FIRST: string
		/**
		 * tweede
		 */
		SECOND: string
	}
	HAIR: {
		CONTENT: {
			/**
			 * Bedankt voor de interesse die u getoond heeft in onze organisatie, wij hebben uw aanvraag + foto's in goede orde ontvangen.
			 */
			INSPECTION_1: string
			/**
			 * Uw foto's / toelichting zijn beoordeeld en hieronder vindt u de analyse terug m.b.t uw Haartransplantatie behandeling, u bent altijd van harte welkom voor een vrijblijvend consult naar onze kliniek te Hoofddorp!
			 */
			INSPECTION_2: string
			/**
			 * * Aangezien de beoordeling d.m.v. foto's is vastgesteld, bestaat een kleine kans van afwijking na de definitieve onderzoek in onze kliniek.
			 */
			INSPECTION_3: string
			/**
			 * Bedankt voor de interesse die u getoond heeft in onze organisatie, u heeft op <>{date|date}<> een vooronderzoek ondergaan omtrent uw FUE Haartransplantatie behandeling.
			 * @param {Date} date
			 */
			NO_INSPECTION_1: RequiredParams<'date|date'>
			/**
			 * Hieronder vindt u de analyse en de samenvatting terug wat wij hebben gesproken.
			 */
			NO_INSPECTION_2: string
			/**
			 * Rapport medisch team
			 */
			MEDICAL_TEAM_REPORT: string
			/**
			 * <>Behandeling<>: FUE Haartransplantatie behandeling
			 */
			TREATMENT: string
			FUE_HAIR_TRANSPLANT: string
			/**
			 * Kwaliteit/ Volume donor
			 */
			QUALITY_VOLUME: string
			/**
			 * Kwaliteit/ Type haar
			 */
			QUALITY_TYPE: string
			/**
			 * <>Aantal grafts {session|{1: eerste, 2: tweede}} sessie<>: {range} grafts
			 * @param {string} range
			 * @param {'1' | '2'} session
			 */
			GRAFT_COUNT: RequiredParams<'range' | `session|{1:${string}, 2:${string}}`>
			/**
			 * niet verplicht
			 */
			NOT_REQUIRED: string
			/**
			 * Techniek
			 */
			TECHNIQUE: string
			/**
			 * Zone
			 */
			ZONES: string
			/**
			 * Wij hopen u hiermee voldoende te hebben geïnformeerd en kijken uit naar uw bevindingen, mocht u vragen of opmerkingen hebben dan horen wij deze graag van u.
			 */
			ENDING_COMMENT: string
			/**
			 * Met vriendelijke groeten
			 */
			KIND_REGARDS: string
			/**
			 * Extra Opmerking
			 */
			EXTRA_REMARKS: string
			/**
			 * Behandeling data
			 */
			TREATMENT_NOTES: string
			/**
			 * Behandeling bestemming
			 */
			TREATMENT_LOCATION: string
			/**
			 * Kosten PRP behandeling (1 gratis): €{0}
			 * @param {number} 0
			 */
			PRP_PRICE: RequiredParams<'0'>
			/**
			 * Totaal: €{0}
			 * @param {number} 0
			 */
			TOTAL: RequiredParams<'0'>
			/**
			 * €{0} korting
			 * @param {number} 0
			 */
			DISCOUNT: RequiredParams<'0'>
			/**
			 * Retour vliegticket met KLM of Turkish Airlines
			 */
			FLIGHT_1: string
			/**
			 * 3 overnachtingen in Hilton Doubbletree Istanbul
			 */
			FLIGHT_2: string
			/**
			 * <>Verdoving<>: Pijnloos lokaal verdoving
			 */
			ANESTHESIA: string
			/**
			 * <>Sessie<>: {0} sessie behandeling
			 * @param {number} 0
			 */
			SESSIONS: RequiredParams<'0'>
			/**
			 * Shampoo, lotion en medicatie
			 */
			SHAMPOO: string
			/**
			 * 4x Nacontrole gedurende 10 maanden
			 */
			FOLLOW_UP: string
			/**
			 * {0}x prp behandeling in NL
			 * @param {number} 0
			 */
			PRP_COUNT: RequiredParams<'0'>
			/**
			 * Vooronderzoek
			 */
			INVESTIGATION: string
			/**
			 * Kosten behandeling {0} sessie{{s}} in {1} All-in €{2}
			 * @param {number} 0
			 * @param {string} 1
			 * @param {number} 2
			 */
			TREATMENT_COST: RequiredParams<'0' | '1' | '2'>
			/**
			 * {session|{1: Eerste, 2: Tweede}} sessie: €{cost}
			 * @param {number} cost
			 * @param {'1' | '2'} session
			 */
			SESSION_COST: RequiredParams<'cost' | `session|{1:${string}, 2:${string}}`>
			/**
			 * na min 12 maanden genezingstijd, niet verplicht
			 */
			SECOND_SESSION_NOTE: string
			/**
			 * Inhoud All-in pakket {0}:
			 * @param {string} 0
			 */
			PACKAGE_CONTENT: RequiredParams<'0'>
			/**
			 * <>Duur behandeling {0}e sessie<>: {1} uur
			 * @param {number} 0
			 * @param {string} 1
			 */
			SESSION_DURATION: RequiredParams<'0' | '1'>
			/**
			 * {0}e sessie zone: {1} (zie schema onder)
			 * @param {number} 0
			 * @param {string} 1
			 */
			SESSION_ZONES: RequiredParams<'0' | '1'>
		}
		TECHNIQUE: {
			/**
			 * FUE Haartransplantatie
			 */
			'0': string
			/**
			 * DHI Haartransplantatie
			 */
			'1': string
			/**
			 * FUE Baardtransplantatie
			 */
			'2': string
			/**
			 * DHI Baardtransplantatie
			 */
			'3': string
		}
		COUNTRY: {
			/**
			 * Turkije
			 */
			'0': string
			/**
			 * Nederland
			 */
			'1': string
			/**
			 * Turkije/Nederland
			 */
			'2': string
		}
		GENDER: {
			/**
			 * Mannelijk
			 */
			'0': string
			/**
			 * Vrouwelijk
			 */
			'1': string
		}
		QUALITY: {
			/**
			 * Shlect
			 */
			'0': string
			/**
			 * Normaal
			 */
			'1': string
			/**
			 * Goed
			 */
			'2': string
			/**
			 * P
			 */
			'3': string
		}
	}
}

export type TranslationFunctions = {
	GENERIC: {
		/**
		 * Geachte {title} {name} {surname}
		 */
		DEAR: (arg: { name: string, surname: string, title: string }) => LocalizedString
		/**
		 * heer
		 */
		MR: () => LocalizedString
		/**
		 * mevrouw
		 */
		MRS: () => LocalizedString
		/**
		 * eerste
		 */
		FIRST: () => LocalizedString
		/**
		 * tweede
		 */
		SECOND: () => LocalizedString
	}
	HAIR: {
		CONTENT: {
			/**
			 * Bedankt voor de interesse die u getoond heeft in onze organisatie, wij hebben uw aanvraag + foto's in goede orde ontvangen.
			 */
			INSPECTION_1: () => LocalizedString
			/**
			 * Uw foto's / toelichting zijn beoordeeld en hieronder vindt u de analyse terug m.b.t uw Haartransplantatie behandeling, u bent altijd van harte welkom voor een vrijblijvend consult naar onze kliniek te Hoofddorp!
			 */
			INSPECTION_2: () => LocalizedString
			/**
			 * * Aangezien de beoordeling d.m.v. foto's is vastgesteld, bestaat een kleine kans van afwijking na de definitieve onderzoek in onze kliniek.
			 */
			INSPECTION_3: () => LocalizedString
			/**
			 * Bedankt voor de interesse die u getoond heeft in onze organisatie, u heeft op <>{date|date}<> een vooronderzoek ondergaan omtrent uw FUE Haartransplantatie behandeling.
			 */
			NO_INSPECTION_1: (arg: { date: Date }) => LocalizedString
			/**
			 * Hieronder vindt u de analyse en de samenvatting terug wat wij hebben gesproken.
			 */
			NO_INSPECTION_2: () => LocalizedString
			/**
			 * Rapport medisch team
			 */
			MEDICAL_TEAM_REPORT: () => LocalizedString
			/**
			 * <>Behandeling<>: FUE Haartransplantatie behandeling
			 */
			TREATMENT: () => LocalizedString
			FUE_HAIR_TRANSPLANT: () => LocalizedString
			/**
			 * Kwaliteit/ Volume donor
			 */
			QUALITY_VOLUME: () => LocalizedString
			/**
			 * Kwaliteit/ Type haar
			 */
			QUALITY_TYPE: () => LocalizedString
			/**
			 * <>Aantal grafts {session|{1: eerste, 2: tweede}} sessie<>: {range} grafts
			 */
			GRAFT_COUNT: (arg: { range: string, session: '1' | '2' }) => LocalizedString
			/**
			 * niet verplicht
			 */
			NOT_REQUIRED: () => LocalizedString
			/**
			 * Techniek
			 */
			TECHNIQUE: () => LocalizedString
			/**
			 * Zone
			 */
			ZONES: () => LocalizedString
			/**
			 * Wij hopen u hiermee voldoende te hebben geïnformeerd en kijken uit naar uw bevindingen, mocht u vragen of opmerkingen hebben dan horen wij deze graag van u.
			 */
			ENDING_COMMENT: () => LocalizedString
			/**
			 * Met vriendelijke groeten
			 */
			KIND_REGARDS: () => LocalizedString
			/**
			 * Extra Opmerking
			 */
			EXTRA_REMARKS: () => LocalizedString
			/**
			 * Behandeling data
			 */
			TREATMENT_NOTES: () => LocalizedString
			/**
			 * Behandeling bestemming
			 */
			TREATMENT_LOCATION: () => LocalizedString
			/**
			 * Kosten PRP behandeling (1 gratis): €{0}
			 */
			PRP_PRICE: (arg0: number) => LocalizedString
			/**
			 * Totaal: €{0}
			 */
			TOTAL: (arg0: number) => LocalizedString
			/**
			 * €{0} korting
			 */
			DISCOUNT: (arg0: number) => LocalizedString
			/**
			 * Retour vliegticket met KLM of Turkish Airlines
			 */
			FLIGHT_1: () => LocalizedString
			/**
			 * 3 overnachtingen in Hilton Doubbletree Istanbul
			 */
			FLIGHT_2: () => LocalizedString
			/**
			 * <>Verdoving<>: Pijnloos lokaal verdoving
			 */
			ANESTHESIA: () => LocalizedString
			/**
			 * <>Sessie<>: {0} sessie behandeling
			 */
			SESSIONS: (arg0: number) => LocalizedString
			/**
			 * Shampoo, lotion en medicatie
			 */
			SHAMPOO: () => LocalizedString
			/**
			 * 4x Nacontrole gedurende 10 maanden
			 */
			FOLLOW_UP: () => LocalizedString
			/**
			 * {0}x prp behandeling in NL
			 */
			PRP_COUNT: (arg0: number) => LocalizedString
			/**
			 * Vooronderzoek
			 */
			INVESTIGATION: () => LocalizedString
			/**
			 * Kosten behandeling {0} sessie{{s}} in {1} All-in €{2}
			 */
			TREATMENT_COST: (arg0: number, arg1: string, arg2: number) => LocalizedString
			/**
			 * {session|{1: Eerste, 2: Tweede}} sessie: €{cost}
			 */
			SESSION_COST: (arg: { cost: number, session: '1' | '2' }) => LocalizedString
			/**
			 * na min 12 maanden genezingstijd, niet verplicht
			 */
			SECOND_SESSION_NOTE: () => LocalizedString
			/**
			 * Inhoud All-in pakket {0}:
			 */
			PACKAGE_CONTENT: (arg0: string) => LocalizedString
			/**
			 * <>Duur behandeling {0}e sessie<>: {1} uur
			 */
			SESSION_DURATION: (arg0: number, arg1: string) => LocalizedString
			/**
			 * {0}e sessie zone: {1} (zie schema onder)
			 */
			SESSION_ZONES: (arg0: number, arg1: string) => LocalizedString
		}
		TECHNIQUE: {
			/**
			 * FUE Haartransplantatie
			 */
			'0': () => LocalizedString
			/**
			 * DHI Haartransplantatie
			 */
			'1': () => LocalizedString
			/**
			 * FUE Baardtransplantatie
			 */
			'2': () => LocalizedString
			/**
			 * DHI Baardtransplantatie
			 */
			'3': () => LocalizedString
		}
		COUNTRY: {
			/**
			 * Turkije
			 */
			'0': () => LocalizedString
			/**
			 * Nederland
			 */
			'1': () => LocalizedString
			/**
			 * Turkije/Nederland
			 */
			'2': () => LocalizedString
		}
		GENDER: {
			/**
			 * Mannelijk
			 */
			'0': () => LocalizedString
			/**
			 * Vrouwelijk
			 */
			'1': () => LocalizedString
		}
		QUALITY: {
			/**
			 * Shlect
			 */
			'0': () => LocalizedString
			/**
			 * Normaal
			 */
			'1': () => LocalizedString
			/**
			 * Goed
			 */
			'2': () => LocalizedString
			/**
			 * P
			 */
			'3': () => LocalizedString
		}
	}
}

export type Formatters = {
	date: (value: Date) => unknown
}
