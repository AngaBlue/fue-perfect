import { ImplantType } from './data';

function generateImports(name: string) {
    const imports: string[][] = [[], []];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 16; j++) {
            imports[i].push(`/assets/dental/${name}-${i}-${j}.png`);
        }
    }

    return imports;
}

const images: Record<ImplantType, string[][]> = {
    [ImplantType.DEFAULT]: generateImports('teeth'),
    [ImplantType.SCREW]: generateImports('screws'),
    [ImplantType.ZIRCONIUM]: generateImports('zirconium'),
    [ImplantType.GREEN]: generateImports('green'),
    [ImplantType.PURPLE]: generateImports('purple'),
    [ImplantType.WHITE]: generateImports('white')
};

export default images;
