import type { Translation } from '../i18n-types';
import nl from '../nl';

const es: Translation = {
    GENERIC: {
        DEAR: 'Estimado {title} {name} {surname}',
        MR: 'Sr.',
        MRS: 'Sra.',
        FIRST: 'primera',
        SECOND: 'segunda'
    },
    HAIR: {
        SUBJECT: 'Presupuesto + Análisis Tratamiento de {2} en Leylstad para {0} {1}',
        CONTENT: {
            INSPECTION_1: 'Gracias por el interés que ha mostrado en nuestra organización, hemos recibido su solicitud + fotos en regla.',
            INSPECTION_2:
                'Sus fotos / comentarios han sido revisados y a continuación encontrará el análisis relativo a su tratamiento de {0}, ¡siempre es bienvenido a una consulta gratuita en nuestra clínica de Hoofddorp!',
            INSPECTION_3:
                '* Como la evaluación se determina mediante fotografías, existe una pequeña posibilidad de desviación tras el examen final en nuestra clínica.',
            NO_INSPECTION_1:
                'Gracias por el interés que ha mostrado en nuestra organización, se ha sometido a un examen preliminar el <>{0|date}<> con respecto a su tratamiento de {1}.',
            NO_INSPECTION_2: 'A continuación encontrarás el análisis y un resumen de lo que hemos hablado.',
            MEDICAL_TEAM_REPORT: 'Informe del equipo médico',
            TREATMENT: '<>Tratamiento<>: {0}',
            QUALITY_VOLUME: 'Calidad / Donante de volumen',
            QUALITY_TYPE: 'Calidad / Tipo de cabello',
            GRAFT_COUNT: '<>Número de injertos {session|{1: primera, 2: segunda}} sesión<>: {range} injertos',
            NOT_REQUIRED: 'no obligatorio',
            TECHNIQUE: 'Técnica',
            ZONES: 'Zonas',
            ENDING_COMMENT:
                'Esperamos haberlo informado lo suficiente con esto y esperamos sus hallazgos. Si tiene alguna pregunta o comentario, nos gustaría saber de usted.',
            KIND_REGARDS: 'Atentamente',
            EXTRA_REMARKS: 'Nota adicional',
            TREATMENT_NOTES: 'Fechas del tratamiento',
            TREATMENT_LOCATION: 'Destino del tratamiento',
            PRP_PRICE: 'Costo del tratamiento PRP (1 gratuito): €{0}',
            TOTAL: 'Total: €{0}',
            DISCOUNT: '€{0} descuento',
            FLIGHT_1: 'Billete de avión de ida y vuelta con KLM o Turkish Airlines',
            FLIGHT_2: '3 noches en Hilton DoubleTree Estambul',
            ANESTHESIA: '<>Anestesia<>: Anestesia local indolora',
            SESSIONS: '<>Sesión<>: {0} sesión de tratamiento',
            SHAMPOO: 'Champú, loción y medicación',
            FOLLOW_UP: '4x chequeos durante 10 meses',
            PRP_COUNT: '{0}x tratamiento prp en los Países Bajos',
            INVESTIGATION: 'Investigación preliminar',
            TREATMENT_COST: 'Costo de {0} sesión{{s}} en {1} todo incluido €{2}',
            SESSION_COST: '{session|{1: Primera, 2: Segunda}} sesíon: €{cost}',
            SECOND_SESSION_NOTE: 'después de un mínimo de 12 meses de curación, no es necesario',
            PACKAGE_CONTENT: 'Contenido Paquete todo incluido {0}:',
            SESSION_DURATION: '<>Duración del tratamiento de la {0|{1: primera, 2: segunda}} sesíon<>: {1} horas',
            SESSION_ZONES: '{0|{1: Primera, 2: Segunda, FUE: FUE, DHI: DHI}} sesíon zona: {1} (véase el siguiente diagrama)'
        },
        TECHNIQUE: [
            'Trasplante Capilar FUE',
            'Trasplante Capilar DHI',
            'Trasplante Capilar FUE + DHI',
            'Trasplante de Barba FUE',
            'Trasplante de Barba DHI'
        ],
        COUNTRY: ['Turquia', 'los Países Bajos', 'Turquia/los Países Bajos'],
        GENDER: ['Masculino', 'Femenino'],
        QUALITY: ['Malo', 'Normal', 'Bueno', 'Perfecto']
    },
    HAIR_APPOINTMENT: (nl as Translation).HAIR_APPOINTMENT,
    DENTAL_APPOINTMENT: (nl as Translation).DENTAL_APPOINTMENT,
    DENTAL: (nl as Translation).DENTAL
};

export default es;
