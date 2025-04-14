import { createSystem, defaultConfig } from '@chakra-ui/react';

export const system = createSystem(defaultConfig, {
	theme: {
		tokens: {
			colors: {
				brand: {
					50: { value: '#e3f6fc' },
					100: { value: '#b7e8f7' },
					200: { value: '#8ad9f3' },
					300: { value: '#62caee' },
					400: { value: '#47bfec' },
					500: { value: '#36b3ea' },
					600: { value: '#2fa5dc' },
					700: { value: '#2792c9' },
					800: { value: '#2481b5' },
					900: { value: '#1a6193' }
				}
			}
		}
	}
});
