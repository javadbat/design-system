type Initializers = any[];
type Constructor<T extends object = object> = new (...args: any[]) => T;
export declare const useMobx: <T extends object>(Store: Constructor<T>, initializers: Initializers) => T;
export {};
