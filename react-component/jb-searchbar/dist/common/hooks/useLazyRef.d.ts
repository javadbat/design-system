import { MutableRefObject } from "react";
type InitFunc<T> = () => T;
export declare const useLazyRef: <T>(initValFunc: InitFunc<T>) => MutableRefObject<any>;
export {};
