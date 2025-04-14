import { ImplantType } from './templates';

function generateImports(name: string) {
	const imports: string[][] = [[], []];

	for (let i = 0; i < 2; i++) {
		for (let j = 0; j < 16; j++) {
			imports[i].push(`/assets/dental/${name}-${i}-${j}.png`);
		}
	}

	return imports;
}

const images = {
	[ImplantType.DEFAULT]: generateImports('teeth'),
	[ImplantType.SCREW]: generateImports('screws'),
	[ImplantType.ZIRCONIUM]: generateImports('zirconium'),
	[ImplantType.PORCELAIN]: generateImports('porcelain'),
	[ImplantType.PURPLE]: generateImports('purple'),
	[ImplantType.WHITE]: generateImports('white'),
	[ImplantType.BLANK]: generateImports('blank'),
	[ImplantType.EMAX]: generateImports('e-max'),
	[ImplantType.PORCELAIN_SCREW]: generateImports('porcelain-screws'),
	[ImplantType.EMAX_SCREW]: generateImports('emax-screws'),
	[ImplantType.ZIRCONIUM_SCREW]: generateImports('zirconium-screws')
};

export default images;
