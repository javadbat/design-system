type FileStringModules = {
    readonly default: string;
}
declare module '*.scss' {
    const value: FileStringModules;
    export default value;
}
declare module '*.svg' {
    const value: string;
    export default value;
}