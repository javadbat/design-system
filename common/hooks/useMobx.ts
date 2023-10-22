import { useLazyRef } from "./useLazyRef";

type Initializers = any[]
type Constructor<T extends object = object> = new (...args: any[]) => T;

export const useMobx = <T extends {}>(Store:Constructor<T>, initializers:Initializers):T => {
    const vm = useLazyRef(() => new Store(...initializers));
    return vm.current;
};
