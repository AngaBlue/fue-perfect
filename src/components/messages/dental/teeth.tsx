function generateImports(name: string) {
    const imports: string[][] = [[], []];

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 16; j++) {
            imports[i].push(`/assets/teeth/${name}-${i}-${j}.png`);
        }
    }

    return imports;
}

const images = {
    teeth: generateImports('teeth'),
    screws: generateImports('screws'),
    white: generateImports('white'),
    purple: generateImports('purple'),
    green: generateImports('green'),
    zirconium: generateImports('zirconium')
};

export default images;
