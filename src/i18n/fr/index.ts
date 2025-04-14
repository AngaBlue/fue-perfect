import type { Translation } from '../i18n-types';
import nl from '../nl';

const fr: Translation = {
	GENERIC: {
		DEAR: 'Cher {title} {name} {surname}',
		MR: 'M.',
		MRS: 'Mme.',
		FIRST: 'première',
		SECOND: 'deuxième'
	},
	HAIR: {
		SUBJECT: "Devis + Analyse d'un traitement de {2} à Leylstad pour {0} {1}",
		CONTENT: {
			INSPECTION_1: "Merci de l'intérêt que vous portez à notre organisation, nous avons reçu votre demande + les photos en bon ordre",
			INSPECTION_2:
				"Vos photos / commentaires ont été examinés et vous trouverez ci-dessous l'analyse de votre traitement de {0}, vous êtes toujours le bienvenu pour une consultation gratuite à notre clinique de Hoofddorp !",
			INSPECTION_3:
				"* L'évaluation étant déterminée par des photographies, il existe un faible risque de déviation après l'examen final dans notre clinique",
			NO_INSPECTION_1:
				"Nous vous remercions de l'intérêt que vous portez à notre organisation, vous avez subi un examen préliminaire le <>{0|date}<> concernant votre traitement de {1}.",
			NO_INSPECTION_2: "Veuillez trouver ci-dessous l'analyse et le résumé de ce que nous avons discuté.",
			MEDICAL_TEAM_REPORT: "Rapport de l'équipe médicale",
			TREATMENT: '<>Traitement<>: {0}',
			QUALITY_VOLUME: 'Qualité / volume',
			QUALITY_TYPE: 'Qualité / type de cheveux',
			GRAFT_COUNT: '<>Nombre de greffes {session|{1: première, 2: deuxième}} session<>: {range} greffes',
			NOT_REQUIRED: 'non obligatoire',
			TECHNIQUE: 'Technique',
			ZONES: 'Zone',
			ENDING_COMMENT:
				'Nous espérons vous avoir suffisamment informé et attendons vos conclusions. Si vous avez des questions ou des commentaires, nous serons heureux de les entendre',
			KIND_REGARDS: 'Cordialement',
			EXTRA_REMARKS: 'Note supplémentaire',
			TREATMENT_NOTES: 'Données relatives au traitement',
			TREATMENT_LOCATION: 'Destination du traitement',
			PRP_PRICE: 'Coût du traitement PRP (1 gratuit) : €{0}',
			TOTAL: 'Total: €{0}',
			DISCOUNT: '€{0} de réduction',
			FLIGHT_1: 'Billet aller-retour avec KLM ou Turkish Airlines',
			FLIGHT_2: "3 nuits à l'hôtel Hilton Doubbletree Istanbul",
			ANESTHESIA: '<>Asthésie<>: Anesthésie locale indolore',
			SESSIONS: '<>Session<>: {0} traitement de la session',
			SHAMPOO: 'Shampooing, lotion et médicaments',
			FOLLOW_UP: 'Suivi de 4x pendant 10 mois',
			PRP_COUNT: '{0}x traitement prp en les Pays-Bas',
			INVESTIGATION: 'Examen préliminaire',
			TREATMENT_COST: 'Le traitement coûte {0} session{s} en {1} tout compris €{2}',
			SESSION_COST: '{session|{1: Première, 2: Deuxième}} session : €{cost}',
			SECOND_SESSION_NOTE: 'après une période de guérison de 12 mois minimum, non obligatoire',
			PACKAGE_CONTENT: 'Contenu du paquet tout compris {0}:',
			SESSION_DURATION: '<>Durée du traitement de la {0|{1: première, 2: deuxième}} session<>: {1} heures',
			SESSION_ZONES: '{0|{1: Première, 2: Deuxième, FUE: FUE, DHI: DHI}} session zone : {1} (voir le diagramme ci-dessous)'
		},
		TECHNIQUE: [
			'Greffe de cheveux FUE',
			'Greffe de cheveux DHI',
			'Greffe de cheveux FUE + DHI',
			'Greffe de barbe FUE',
			'Greffe de barbe DHI'
		],
		COUNTRY: ['Turquie', 'les Pays-Bas', 'Turquie/les Pays-Bas'],
		GENDER: ['Homme', 'Femme'],
		QUALITY: ['Mauvaise', 'Normale', 'Bon', 'Parfait']
	},
	HAIR_APPOINTMENT: (nl as Translation).HAIR_APPOINTMENT,
	DENTAL_APPOINTMENT: (nl as Translation).DENTAL_APPOINTMENT,
	DENTAL: (nl as Translation).DENTAL,
	DENTAL_MISSED_CALL: (nl as Translation).DENTAL_MISSED_CALL
};

export default fr;
