import { Signal } from './Signal';
import { SignalBinding } from './SignalBinding';

export class SignalFour<T, U, K, M> extends Signal {

    public add(listener: (param1: T, param2: U, param3: K, param4: M, ...rest: any[]) => any, listenerContext?: any,
               priority?: number, ...args: any[]): SignalBinding {
        return super.add(listener, listenerContext, priority, ...args);
    }

    public addOnce(listener: (param1: T, param2: U, param3: K, param4: M, ...rest: any[]) => any, listenerContext?: any,
                   priority?: number, ...args: any[]): SignalBinding {
        return super.addOnce(listener, listenerContext, priority, ...args);
    }

    public dispatch(param1: T, param2: U, param3: K, param4: M, ...params: any[]): boolean {
        return super.dispatch(param1, param2, param3, param4, ...params);
    }

    public has(listener: (param1: T, param2: U, param3: K, param4: M, ...rest: any[]) => any, context?: any): boolean {
        return super.has(listener, context);
    }

    public remove(listener: (param1: T, param2: U, param3: K, param4: M, ...rest: any[]) => any,
                  context?: any): (param1: T, param2: U, param3: K, param4: M, ...rest: any[]) => any {
        return super.remove(listener, context) as (param1: T, param2: U, param3: K, param4: M, ...rest: any[]) => any;
    }

    public validateListener(listener: (param1: T, param2: U, param3: K, param4: M, ...rest: any[]) => any,
                            fnName: string): void {
        super.validateListener(listener, fnName);
    }

}
