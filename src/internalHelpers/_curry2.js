// @flow

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
export type Fn1<A, B> = (a: A, ...rest: Array<void>) => B;
export type Fn2<A, B, C> = (a: A, b: B, ...rest: Array<void>) => C;

export type CurriedFn2<A, B, C> =
  & Fn1<A, Fn1<B, C>>
  & Fn2<A, B, C>;

// eslint-disable-next-line no-unused-vars
declare function curry<A, B, C>(f: Fn2<A, B, C>): CurriedFn2<A, B, C>;

function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    const combined = acc.concat(Array.prototype.slice.call(arguments))
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined)
  }
}

export default function curry(f: Function) { // eslint-disable-line no-redeclare
  return curried(f, f.length, [])
}
