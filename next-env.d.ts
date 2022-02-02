/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '!url-loader!*.png' {
    const content: string;

    export default content;
}

declare module '!url-loader!*.jpg' {
    const content: string;

    export default content;
}

declare module '!url-loader!*.svg' {
    const content: string;

    export default content;
}

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
