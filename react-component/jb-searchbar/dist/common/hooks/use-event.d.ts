/// <reference types="react" />
export declare function useEvent(dom: HTMLElement, event: any, handler: any, passive?: boolean): void;
export declare function useBindEvent<TRef extends React.MutableRefObject<any | null>, TEvent>(ref: TRef, event: string, handler: (e: TEvent) => void, passive?: boolean): void;
