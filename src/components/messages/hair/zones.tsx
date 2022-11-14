function generateImports(color: string) {
    return Array(7)
        .fill(0)
        .map((_, i) => `/assets/hair/${i + 1}-${color}.png`);
}

const zones = [generateImports('Orange'), generateImports('Blue')];

const head = '/assets/hair/head.png';

export { head, zones };
