import type { Translation } from '../i18n-types';

const tr: Translation = {
    GENERIC: {
        DEAR: 'Sayın {title} {name} {surname}',
        MR: '',
        MRS: '',
        FIRST: 'i̇lk',
        SECOND: 'i̇kinci'
    },
    HAIR: {
        SUBJECT: "{0} {1} için Hoofddorp'ta FUE Saç Ekimi tedavisi için fiyat teklifi + Analiz",
        CONTENT: {
            INSPECTION_1:
                'Organizasyonumuza göstermiş olduğunuz ilgi için teşekkür ederiz, talebinizi + fotoğraflarınızı iyi bir şekilde aldık.',
            INSPECTION_2:
                "Fotoğraflarınız / yorumlarınız incelendi ve aşağıda saç ekimi tedavinizin analizini bulacaksınız, Hoofddorp'taki kliniğimizde her zaman ücretsiz bir konsültasyona davetlisiniz!",
            INSPECTION_3: 'Değerlendirme fotoğraflarla belirlendiği için kliniğimizdeki son muayeneden sonra küçük bir sapma şansı vardır.',
            NO_INSPECTION_1:
                'Kuruluşumuza göstermiş olduğunuz ilgiden dolayı teşekkür ederiz. <>{date|date}<> tarihinde FUE Saç Ekimi tedaviniz ile ilgili ön incelemeden geçtiniz.',
            NO_INSPECTION_2: 'Aşağıda konuştuklarımızın analizini ve özetini bulacaksınız.',
            MEDICAL_TEAM_REPORT: 'Tıbbi ekip raporut',
            TREATMENT: '<>Tedavi<>: FUE Saç Ekimi Tedavisi',
            QUALITY_VOLUME: 'Kalite / Hacim donörü',
            QUALITY_TYPE: 'Saç Kalitesi / Tipi',
            GRAFT_COUNT: '<>{session|{1: İlk seanstaki, 2: İkinci seans}} greft sayısı<>: {range} greft',
            NOT_REQUIRED: 'gerekli değildir',
            TECHNIQUE: 'Teknik',
            ZONES: 'Bölge',
            ENDING_COMMENT:
                'Sizi yeterince bilgilendirdiğimizi umuyor ve bulgularınızı dört gözle bekliyoruz, herhangi bir sorunuz veya yorumunuz varsa sizden duymak isteriz.',
            KIND_REGARDS: 'Saygılarımla',
            EXTRA_REMARKS: 'Ek Not',
            TREATMENT_NOTES: 'Tedavi tarihleri',
            TREATMENT_LOCATION: 'Tedavi hedefi',
            PRP_PRICE: 'Maliyet PRP tedavisi (1 ücretsiz): {0} €',
            TOTAL: 'Toplam: {0} €',
            DISCOUNT: '{0} € indirim',
            FLIGHT_1: 'KLM veya Türk Hava Yolları ile dönüş uçak bileti',
            FLIGHT_2: "Hilton Doubbletree İstanbul'da 3 gece konaklama",
            ANESTHESIA: '<>Anestezi<>: Ağrısız lokal anestezi',
            SESSIONS: '<>Oturum<>: {0} seans tedavisi',
            SHAMPOO: 'Şampuan, losyon ve ilaçlar',
            FOLLOW_UP: '10 ay boyunca 4 kez takip muayenesi',
            PRP_COUNT: "Hollanda'da {0}x prp tedavisi",
            INVESTIGATION: 'Ön inceleme',
            TREATMENT_COST: "Tedavi maliyeti {1}'de {0} seans her şey dahil {2} €",
            SESSION_COST: '{session|{1: İlk, 2: İkinci}} seans: {cost} €',
            SECOND_SESSION_NOTE: 'en az 12 aylık iyileşme süresinden sonra, zorunlu değil',
            PACKAGE_CONTENT: 'İçerik Hepsi bir arada paket {0}:',
            SESSION_DURATION: '<>Tedavi süresi {0|{1: ilk, 2: ikinci}} seans<>: {1} saat',
            SESSION_ZONES: '{0|{1: Birinci, 2: İkinci}} seans bölgesi: {1} (aşağıdaki şemaya bakın)'
        },
        TECHNIQUE: ['FUE Saç Ekimi', 'DHI Saç Ekimi', 'FUE Beard Transplant', 'DHI Sakal Ekimi'],
        COUNTRY: ['Türkiye', 'Hollanda', 'Türkiye/Hollanda'],
        GENDER: ['Erkek', 'Kadın'],
        QUALITY: ['Şık', 'Normal', 'İyi', 'Mükemmel']
    }
};

export default tr;
