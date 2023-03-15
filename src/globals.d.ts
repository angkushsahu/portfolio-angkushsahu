declare module "*.module.scss" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module "*.svg" {
    export default "" as string;
}

declare module "*.jfif" {
    export default "" as string;
}

declare module "*.png" {
    export default "" as string;
}
