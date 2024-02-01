// flow-typed signature: 29413d0c394e8c918dddf378f5ddad46
// flow-typed version: 9a968c602c/ramda_v0.x.x/flow_>=v0.201.x

/* eslint-disable no-unused-vars, no-redeclare */

type Transformer<A, B> = {
  '@@transducer/step': <I, R>(r: A, a: any) => R,
  '@@transducer/init': () => A,
  '@@transducer/result': (result: any) => B,
  ...
};

type Primitives = string | number | null | void | boolean;

declare type $npm$ramda$Placeholder = { '@@functional/placeholder': true, ... };

declare opaque type $npm$ramda$Reduced<T>;

declare module ramda {
  declare type UnaryFn<A, R> = (a: A) => R;
  declare type UnaryPromiseFn<A, R> = UnaryFn<A, Promise<R>>;
  declare type BinaryFn<A, B, R> = ((a: A, b: B) => R) &
    ((a: A) => (b: B) => R);
  declare type UnarySameTypeFn<T> = UnaryFn<T, T>;
  declare type BinarySameTypeFn<T> = BinaryFn<T, T, T>;
  declare type NestedObject<T> = { [k: string]: T | NestedObject<T>, ... };
  declare type UnaryPredicateFn<T> = (x: T) => boolean;
  declare type MapUnaryPredicateFn = <V>(V) => V => boolean;
  declare type BinaryPredicateFn<T> = (x: T, y: T) => boolean;
  declare type BinaryPredicateFn2<T, S> = (x: T, y: S) => boolean;

  declare interface ObjPredicate {
    (value: any, key: string): boolean;
  }

  declare type __CurriedFunction1<A, R, AA: A> = (...r: [AA]) => R;
  declare type CurriedFunction1<A, R> = __CurriedFunction1<A, R, any>;

  declare type __CurriedFunction2<A, B, R, AA: A, BB: B> = ((
    ...r: [AA]
  ) => CurriedFunction1<BB, R>) &
    ((...r: [AA, BB]) => R);
  declare type CurriedFunction2<A, B, R> = __CurriedFunction2<A, B, R, any, any>;

  declare type __CurriedFunction3<A, B, C, R, AA: A, BB: B, CC: C> = ((
    ...r: [AA]
  ) => CurriedFunction2<BB, CC, R>) &
    ((...r: [AA, BB]) => CurriedFunction1<CC, R>) &
    ((...r: [AA, BB, CC]) => R);
  declare type CurriedFunction3<A, B, C, R> = __CurriedFunction3<A, B, C, R, any, any, any>;

  declare type __CurriedFunction4<
    A,
    B,
    C,
    D,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D
  > = ((...r: [AA]) => CurriedFunction3<BB, CC, DD, R>) &
    ((...r: [AA, BB]) => CurriedFunction2<CC, DD, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction1<DD, R>) &
    ((...r: [AA, BB, CC, DD]) => R);
  declare type CurriedFunction4<A, B, C, D, R> = __CurriedFunction4<A, B, C, D, R, any, any, any, any>;

  declare type __CurriedFunction5<
    A,
    B,
    C,
    D,
    E,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D,
    EE: E
  > = ((...r: [AA]) => CurriedFunction4<BB, CC, DD, EE, R>) &
    ((...r: [AA, BB]) => CurriedFunction3<CC, DD, EE, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction2<DD, EE, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction1<EE, R>) &
    ((...r: [AA, BB, CC, DD, EE]) => R);
  declare type CurriedFunction5<A, B, C, D, E, R> = __CurriedFunction5<A, B, C, D, E, R, any, any, any, any, any>;

  declare type __CurriedFunction6<
    A,
    B,
    C,
    D,
    E,
    F,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D,
    EE: E,
    FF: F
  > = ((...r: [AA]) => CurriedFunction5<BB, CC, DD, EE, FF, R>) &
    ((...r: [AA, BB]) => CurriedFunction4<CC, DD, EE, FF, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction3<DD, EE, FF, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction2<EE, FF, R>) &
    ((...r: [AA, BB, CC, DD, EE]) => CurriedFunction1<FF, R>) &
    ((...r: [AA, BB, CC, DD, EE, FF]) => R);
  declare type CurriedFunction6<A, B, C, D, E, F, R> = __CurriedFunction6<A, B, C, D, E, F, R, any, any, any, any, any, any>;

  declare type Curry = (<A, R>((...r: [A]) => R) => CurriedFunction1<A, R>) &
    (<A, B, R>((...r: [A, B]) => R) => CurriedFunction2<A, B, R>) &
    (<A, B, C, R>((...r: [A, B, C]) => R) => CurriedFunction3<A, B, C, R>) &
    (<A, B, C, D, R>(
      (...r: [A, B, C, D]) => R
    ) => CurriedFunction4<A, B, C, D, R>) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R
    ) => CurriedFunction5<A, B, C, D, E, R>) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R
    ) => CurriedFunction6<A, B, C, D, E, F, R>);

  declare type Partial = (<A, R>((...r: [A]) => R, args: [A]) => () => R) &
    (<A, B, R>((...r: [A, B]) => R, args: [A]) => B => R) &
    (<A, B, R>((...r: [A, B]) => R, args: [A, B]) => () => R) &
    (<A, B, C, R>((...r: [A, B, C]) => R, args: [A]) => (B, C) => R) &
    (<A, B, C, R>((...r: [A, B, C]) => R, args: [A, B]) => C => R) &
    (<A, B, C, R>((...r: [A, B, C]) => R, args: [A, B, C]) => () => R) &
    (<A, B, C, D, R>((...r: [A, B, C, D]) => R, args: [A]) => (B, C, D) => R) &
    (<A, B, C, D, R>((...r: [A, B, C, D]) => R, args: [A, B]) => (C, D) => R) &
    (<A, B, C, D, R>((...r: [A, B, C, D]) => R, args: [A, B, C]) => D => R) &
    (<A, B, C, D, R>(
      (...r: [A, B, C, D]) => R,
      args: [A, B, C, D]
    ) => () => R) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R,
      args: [A]
    ) => (B, C, D, E) => R) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R,
      args: [A, B]
    ) => (C, D, E) => R) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R,
      args: [A, B, C]
    ) => (D, E) => R) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R,
      args: [A, B, C, D]
    ) => E => R) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R,
      args: [A, B, C, D, E]
    ) => () => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A]
    ) => (B, C, D, E, F) => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A, B]
    ) => (C, D, E, F) => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A, B, C]
    ) => (D, E, F) => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A, B, C, D]
    ) => (E, F) => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A, B, C, D, E]
    ) => F => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A, B, C, D, E, F]
    ) => () => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A]
    ) => (B, C, D, E, F, G) => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B]
    ) => (C, D, E, F, G) => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B, C]
    ) => (D, E, F, G) => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B, C, D]
    ) => (E, F, G) => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B, C, D, E]
    ) => (F, G) => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B, C, D, E, F]
    ) => G => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B, C, D, E, F, G]
    ) => () => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A]
    ) => (B, C, D, E, F, G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B]
    ) => (C, D, E, F, G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C]
    ) => (D, E, F, G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C, D]
    ) => (E, F, G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C, D, E]
    ) => (F, G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C, D, E, F]
    ) => (G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C, D, E, F, G]
    ) => H => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C, D, E, F, G, H]
    ) => () => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A]
    ) => (B, C, D, E, F, G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B]
    ) => (C, D, E, F, G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C]
    ) => (D, E, F, G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D]
    ) => (E, F, G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D, E]
    ) => (F, G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D, E, F]
    ) => (G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D, E, F, G]
    ) => (H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D, E, F, G, H]
    ) => I => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D, E, F, G, H, I]
    ) => () => R);

  declare var pipe: {
    <A, B, C, D, E, F, G>(
      ab: UnaryFn<A, B>,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>,
      fg: UnaryFn<F, G>
    ): UnaryFn<A, G>,
    <A0, A1, B, C, D, E, F, G>(
      ab: (A0, A1) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>,
      fg: UnaryFn<F, G>
    ): (A0, A1) => G,
    <A0, A1, A2, B, C, D, E, F, G>(
      ab: (A0, A1, A2) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>,
      fg: UnaryFn<F, G>
    ): (A0, A1, A2) => G,
    <A0, A1, A2, A3, B, C, D, E, F, G>(
      ab: (A0, A1, A2, A3) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>,
      fg: UnaryFn<F, G>
    ): (A0, A1, A2, A3) => G,
    <A0, A1, A2, A3, A4, B, C, D, E, F, G>(
      ab: (A0, A1, A2, A3, A4) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>,
      fg: UnaryFn<F, G>
    ): (A0, A1, A2, A3, A4) => G,
    <A0, A1, A2, A3, A4, A5, B, C, D, E, F, G>(
      ab: (A0, A1, A2, A3, A4, A5) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>,
      fg: UnaryFn<F, G>
    ): (A0, A1, A2, A3, A4, A5) => G,
    <A, B, C, D, E, F>(
      ab: UnaryFn<A, B>,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>
    ): UnaryFn<A, F>,
    <A0, A1, B, C, D, E, F>(
      ab: (A0, A1) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>
    ): (A0, A1) => F,
    <A0, A1, A2, B, C, D, E, F>(
      ab: (A0, A1, A2) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>
    ): (A0, A1, A2) => F,
    <A0, A1, A2, A3, B, C, D, E, F>(
      ab: (A0, A1, A2, A3) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>
    ): (A0, A1, A2, A3) => F,
    <A0, A1, A2, A3, A4, B, C, D, E, F>(
      ab: (A0, A1, A2, A3, A4) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>
    ): (A0, A1, A2, A3, A4) => F,
    <A0, A1, A2, A3, A4, A5, B, C, D, E, F>(
      ab: (A0, A1, A2, A3, A4, A5) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>
    ): (A0, A1, A2, A3, A4, A5) => F,
    <A, B, C, D, E>(
      ab: UnaryFn<A, B>,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>
    ): UnaryFn<A, E>,
    <A0, A1, B, C, D, E>(
      ab: (A0, A1) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>
    ): (A0, A1) => E,
    <A0, A1, A2, B, C, D, E>(
      ab: (A0, A1, A2) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>
    ): (A0, A1, A2) => E,
    <A0, A1, A2, A3, B, C, D, E>(
      ab: (A0, A1, A2, A3) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>
    ): (A0, A1, A2, A3) => E,
    <A0, A1, A2, A3, A4, B, C, D, E>(
      ab: (A0, A1, A2, A3, A4) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>
    ): (A0, A1, A2, A3, A4) => E,
    <A0, A1, A2, A3, A4, A5, B, C, D, E>(
      ab: (A0, A1, A2, A3, A4, A5) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>
    ): (A0, A1, A2, A3, A4, A5) => E,
    <A, B, C, D>(
      ab: UnaryFn<A, B>,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>
    ): UnaryFn<A, D>,
    <A0, A1, B, C, D>(
      ab: (A0, A1) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>
    ): (A0, A1) => D,
    <A0, A1, A2, B, C, D>(
      ab: (A0, A1, A2) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>
    ): (A0, A1, A2) => D,
    <A0, A1, A2, A3, B, C, D>(
      ab: (A0, A1, A2, A3) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>
    ): (A0, A1, A2, A3) => D,
    <A0, A1, A2, A3, A4, B, C, D>(
      ab: (A0, A1, A2, A3, A4) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>
    ): (A0, A1, A2, A3, A4) => D,
    <A0, A1, A2, A3, A4, A5, B, C, D>(
      ab: (A0, A1, A2, A3, A4, A5) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>
    ): (A0, A1, A2, A3, A4, A5) => D,
    <A, B, C>(ab: UnaryFn<A, B>, bc: UnaryFn<B, C>): UnaryFn<A, C>,
    <A0, A1, B, C>(ab: (A0, A1) => B, bc: UnaryFn<B, C>): (A0, A1) => C,
    <A0, A1, A2, B, C>(
      ab: (A0, A1, A2) => B,
      bc: UnaryFn<B, C>
    ): (A0, A1, A2) => C,
    <A0, A1, A2, A3, B, C>(
      ab: (A0, A1, A2, A3) => B,
      bc: UnaryFn<B, C>
    ): (A0, A1, A2, A3) => C,
    <A0, A1, A2, A3, A4, B, C>(
      ab: (A0, A1, A2, A3, A4) => B,
      bc: UnaryFn<B, C>
    ): (A0, A1, A2, A3, A4) => C,
    <A0, A1, A2, A3, A4, A5, B, C>(
      ab: (A0, A1, A2, A3, A4, A5) => B,
      bc: UnaryFn<B, C>
    ): (A0, A1, A2, A3, A4, A5) => C,
    <A, B>(ab: UnaryFn<A, B>): UnaryFn<A, B>,
    <A0, A1, B>(ab: (A0, A1) => B): (A0, A1) => B,
    <A0, A1, A2, B>(ab: (A0, A1, A2) => B): (A0, A1, A2) => B,
    <A0, A1, A2, A3, B>(ab: (A0, A1, A2, A3) => B): (A0, A1, A2, A3) => B,
    <A0, A1, A2, A3, A4, B>(
      ab: (A0, A1, A2, A3, A4) => B
    ): (A0, A1, A2, A3, A4) => B,
    <A0, A1, A2, A3, A4, A5, B>(
      ab: (A0, A1, A2, A3, A4, A5) => B
    ): (A0, A1, A2, A3, A4, A5) => B,
    ...
  };

  declare type Pipe = typeof pipe;

  declare type PipeP = (<A, B, C, D, E, F, G>(
    ab: UnaryPromiseFn<A, B>,
    bc: UnaryPromiseFn<B, C>,
    cd: UnaryPromiseFn<C, D>,
    de: UnaryPromiseFn<D, E>,
    ef: UnaryPromiseFn<E, F>,
    fg: UnaryPromiseFn<F, G>
  ) => UnaryPromiseFn<A, G>) &
    (<A, B, C, D, E, F>(
      ab: UnaryPromiseFn<A, B>,
      bc: UnaryPromiseFn<B, C>,
      cd: UnaryPromiseFn<C, D>,
      de: UnaryPromiseFn<D, E>,
      ef: UnaryPromiseFn<E, F>
    ) => UnaryPromiseFn<A, F>) &
    (<A, B, C, D, E>(
      ab: UnaryPromiseFn<A, B>,
      bc: UnaryPromiseFn<B, C>,
      cd: UnaryPromiseFn<C, D>,
      de: UnaryPromiseFn<D, E>
    ) => UnaryPromiseFn<A, E>) &
    (<A, B, C, D>(
      ab: UnaryPromiseFn<A, B>,
      bc: UnaryPromiseFn<B, C>,
      cd: UnaryPromiseFn<C, D>
    ) => UnaryPromiseFn<A, D>) &
    (<A, B, C>(
      ab: UnaryPromiseFn<A, B>,
      bc: UnaryPromiseFn<B, C>
    ) => UnaryPromiseFn<A, C>) &
    (<A, B>(ab: UnaryPromiseFn<A, B>) => UnaryPromiseFn<A, B>);

  declare type Compose = (<A, B, C, D, E, F, G>(
    fg: UnaryFn<F, G>,
    ef: UnaryFn<E, F>,
    de: UnaryFn<D, E>,
    cd: UnaryFn<C, D>,
    bc: UnaryFn<B, C>,
    ab: UnaryFn<A, B>
  ) => UnaryFn<A, G>) &
    (<A, B, C, D, E, F>(
      ef: UnaryFn<E, F>,
      de: UnaryFn<D, E>,
      cd: UnaryFn<C, D>,
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>
    ) => UnaryFn<A, F>) &
    (<A, B, C, D, E>(
      de: UnaryFn<D, E>,
      cd: UnaryFn<C, D>,
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>
    ) => UnaryFn<A, E>) &
    (<A, B, C, D>(
      cd: UnaryFn<C, D>,
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>
    ) => UnaryFn<A, D>) &
    (<A, B, C>(bc: UnaryFn<B, C>, ab: UnaryFn<A, B>) => UnaryFn<A, C>) &
    (<A, B>(ab: UnaryFn<A, B>) => UnaryFn<A, B>);

  // This kind of filter allows us to do type refinement on the result, but we
  // still need Filter so that non-refining predicates still pass a type check.
  declare type RefineFilter = (<
    K,
    V,
    P: $Pred<1>,
    T: Array<V> | $ReadOnlyArray<V>
  >(
    fn: P,
    xs: T
  ) => Array<$Refine<V, P, 1>>) &
    (<K, V, P: $Pred<1>, T: Array<V> | $ReadOnlyArray<V>>(
      fn: P
    ) => (xs: T) => Array<$Refine<V, P, 1>>);

  declare type Filter = (<K, V, T: $ReadOnlyArray<V> | { +[key: K]: V, ... }>(
    fn: UnaryPredicateFn<V>,
    xs: T
  ) => T) &
    (<K, V, T: { [key: K]: V, ... } | Array<V>>(
      fn: UnaryPredicateFn<V>,
      xs: T
    ) => T) &
    (<K, V, T: $ReadOnlyArray<V> | { +[key: K]: V, ... }>(
      fn: UnaryPredicateFn<V>
    ) => (xs: T) => T) &
    (<K, V, T: Array<V> | { [key: K]: V, ... }>(
      fn: UnaryPredicateFn<V>
    ) => (xs: T) => T);

  declare interface Monad<A> {
    chain<B>(f: (A) => Monad<B>): Monad<B>;
  }

  declare class Semigroup<T> {}

  declare class Chain {
    chain<T, V: Monad<T> | Array<T>>(fn: (a: T) => V, x: V): V;
    chain<T, V: Monad<T> | Array<T>>(fn: (a: T) => V): (x: V) => V;
  }

  declare class GenericContructor<T> {
    constructor(x: T): GenericContructor<any>;
  }

  declare class GenericContructorMulti {
    constructor(...args: Array<any>): GenericContructor<any>;
  }

  /**
   * DONE:
   * Function*
   * List*
   * Logic
   * Math
   * Object*
   * Relation
   * String
   * Type
   */

  declare var compose: Compose;
  declare var pipeK: PipeK;
  declare var pipeP: PipeP;
  declare var curry: Curry;
  declare function curryN(
    length: number,
    fn: (...args: Array<any>) => any
  ): Function;

  // *Math
  declare var add: CurriedFunction2<number, number, number>;
  declare var inc: UnaryFn<number, number>;
  declare var dec: UnaryFn<number, number>;
  declare var mean: UnaryFn<Array<number>, number>;
  declare var divide: CurriedFunction2<number, number, number>;
  declare var mathMod: CurriedFunction2<number, number, number>;
  declare var median: UnaryFn<Array<number>, number>;
  declare var modulo: CurriedFunction2<number, number, number>;
  declare var multiply: CurriedFunction2<number, number, number>;
  declare var negate: UnaryFn<number, number>;
  declare var product: UnaryFn<Array<number>, number>;
  declare var subtract:
    & CurriedFunction2<number,  number, number>
    & CurriedFunction2<Date, Date, number>
    & CurriedFunction2<Date, number, number>
    & CurriedFunction2<number, Date, number>

  declare var sum: UnaryFn<Array<number>, number>;

  // Filter
  // To refine with filter, be sure to import the RefineFilter type, and cast
  // filter to a RefineFilter.
  // ex:
  // import { type RefineFilter, filter } from 'ramda'
  // const notNull = (x): bool %checks => x != null
  // const ns: Array<number> = (filter: RefineFilter)(notNull, [1, 2, null])
  declare var filter: RefineFilter & Filter;
  // reject doesn't get RefineFilter since it performs the opposite work of
  // filter, and we don't have a kind of $NotPred type.
  declare var reject: Filter;

  // *String
  declare var match: CurriedFunction2<RegExp, string, Array<string | void>>;
  declare var replace: CurriedFunction3<
    RegExp | string,
    string | ((substring: string, ...args: Array<string>) => string),
    string,
    string
  >;
  declare var split: CurriedFunction2<RegExp | string, string, Array<string>>;
  declare var test: CurriedFunction2<RegExp, string, boolean>;
  // startsWith and endsWith use the same signature:
  declare type EdgeWith<A> = (((Array<A>) => (Array<A>) => boolean) &
    ((Array<A>, Array<A>) => boolean)) &
    ((string => string => boolean) & ((string, string) => boolean));
  declare var startsWith: EdgeWith<any>;
  declare var endsWith: EdgeWith<any>;
  declare function toLower(a: string): string;
  declare function toString(x: any): string;
  declare function toUpper(a: string): string;
  declare function trim(a: string): string;

  // *Type
  declare function is<T>(t: T): (v: any) => boolean;
  declare function is<T>(t: T, v: any): boolean;
  declare var propIs: CurriedFunction3<any, string, Object, boolean>;
  declare function type(x: ?any): string;
  declare function isArrayLike(x: any): boolean;

  declare function isNil(x: mixed): boolean %checks(x === undefined ||
    x === null);

  // *List
  declare function adjust<T>(
    fn: (a: T) => T
  ): (index: number) => (src: Array<T>) => Array<T>;
  declare function adjust<T>(
    fn: (a: T) => T,
    index: number
  ): (src: Array<T>) => Array<T>;
  declare function adjust<T>(
    fn: (a: T) => T,
    index: number,
    src: Array<T>
  ): Array<T>;

  declare function all<T>(fn: UnaryPredicateFn<T>, xs: Array<T>): boolean;
  declare function all<T>(fn: UnaryPredicateFn<T>): (xs: Array<T>) => boolean;

  declare function any<T>(fn: UnaryPredicateFn<T>, xs: Array<T>): boolean;
  declare function any<T>(fn: UnaryPredicateFn<T>): (xs: Array<T>) => boolean;

  declare function aperture<T>(n: number, xs: Array<T>): Array<Array<T>>;
  declare function aperture<T>(n: number): (xs: Array<T>) => Array<Array<T>>;

  declare function append<E>(x: E, xs: Array<E>): Array<E>;
  declare function append<E>(x: E): (xs: Array<E>) => Array<E>;

  declare function prepend<E>(x: E, xs: Array<E>): Array<E>;
  declare function prepend<E>(x: E): (xs: Array<E>) => Array<E>;

  declare function chain<A, B>(f: (x: A) => B[], xs: A[]): B[];
  declare function chain<A, B>(f: (x: A) => B[]): (xs: A[]) => B[];

  declare function concat<V, T: Array<V>>(x: T, y: T): T;
  declare function concat<V, T: Array<V>>(x: T): (y: T) => T;

  declare function concat(x: string, y: string): string;
  declare function concat(x: string): (y: string) => string;

  declare type Contains =
    & ((string, string) => boolean)
    & ((string) => ((string => boolean)))
    & (<A, T: $ReadOnlyArray<A> | Array<A>>(a: A) => (b: T) => boolean)
    & (<A, T: $ReadOnlyArray<A> | Array<A>>(a: A, b: T) => boolean)

  declare var contains: Contains;

  declare function drop<V, T: Array<V> | string>(n: number): (xs: T) => T;
  declare function drop<V, T: Array<V> | string>(n: number, xs: T): T;

  declare function dropLast<V, T: Array<V> | string>(n: number): (xs: T) => T;
  declare function dropLast<V, T: Array<V> | string>(n: number, xs: T): T;

  declare function dropLastWhile<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>
  ): (xs: T) => T;
  declare function dropLastWhile<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>,
    xs: T
  ): T;

  declare function dropWhile<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>
  ): (xs: T) => T;
  declare function dropWhile<V, T: Array<V>>(fn: UnaryPredicateFn<V>, xs: T): T;

  declare function dropRepeats<V, T: Array<V>>(xs: T): T;

  declare function dropRepeatsWith<V, T: Array<V>>(
    fn: BinaryPredicateFn<V>
  ): (xs: T) => T;
  declare function dropRepeatsWith<V, T: Array<V>>(
    fn: BinaryPredicateFn<V>,
    xs: T
  ): T;

  declare function groupBy<T>(
    fn: (x: T) => string,
    xs: Array<T>
  ): { [key: string]: Array<T>, ... };
  declare function groupBy<T>(
    fn: (x: T) => string
  ): (xs: Array<T>) => { [key: string]: Array<T>, ... };

  declare function groupWith<T, V: Array<T> | string>(
    fn: BinaryPredicateFn<T>,
    xs: V
  ): Array<V>;
  declare function groupWith<T, V: Array<T> | string>(
    fn: BinaryPredicateFn<T>
  ): (xs: V) => Array<V>;

  declare function head<T, V: Array<T>>(xs: V): ?T;
  declare function head<T, V: string>(xs: V): V;

  declare function into<I, T, A: Array<T>, R: Array<any> | string | Object>(
    accum: R,
    xf: (a: A) => I,
    input: A
  ): R;
  declare function into<I, T, A: Array<T>, R>(
    accum: Transformer<I, R>,
    xf: (a: A) => R,
    input: A
  ): R;

  declare function indexOf<E>(x: ?E, xs: Array<E>): number;
  declare function indexOf<E>(x: ?E): (xs: Array<E>) => number;

  declare function indexBy<V, T: { [key: string]: any, ... }>(
    fn: (x: T) => string
  ): (xs: Array<T>) => { [key: string]: T, ... };
  declare function indexBy<V, T: { [key: string]: any, ... }>(
    fn: (x: T) => string,
    xs: Array<T>
  ): { [key: string]: T, ... };

  declare function insert<T>(
    index: number
  ): (elem: T) => (src: Array<T>) => Array<T>;
  declare function insert<T>(
    index: number,
    elem: T
  ): (src: Array<T>) => Array<T>;
  declare function insert<T>(index: number, elem: T, src: Array<T>): Array<T>;

  declare function insertAll<T, S>(
    index: number
  ): (elem: Array<S>) => (src: Array<T>) => Array<S | T>;
  declare function insertAll<T, S>(
    index: number,
    elems: Array<S>
  ): (src: Array<T>) => Array<S | T>;
  declare function insertAll<T, S>(
    index: number,
    elems: Array<S>,
    src: Array<T>
  ): Array<S | T>;

  declare function join(x: string, xs: Array<any>): string;
  declare function join(x: string): (xs: Array<any>) => string;

  declare function last<T, V: Array<T>>(xs: V): ?T;
  declare function last<T, V: string>(xs: V): V;

  declare function none<T>(fn: UnaryPredicateFn<T>, xs: Array<T>): boolean;
  declare function none<T>(fn: UnaryPredicateFn<T>): (xs: Array<T>) => boolean;

  declare function nth<V, T: Array<V>>(i: number, xs: T): ?V;
  declare function nth<V, T: Array<V> | string>(
    i: number
  ): ((xs: string) => string) & ((xs: T) => ?V);
  declare function nth<T: string>(i: number, xs: T): T;

  declare type Find = (<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>
  ) => (xs: T) => ?V) &
    (<V, T: Array<V>>(fn: UnaryPredicateFn<V>, xs: T) => ?V);

  declare var find: Find;

  declare function findLast<V, O: { [key: string]: any, ... }, T: Array<V> | O>(
    fn: UnaryPredicateFn<V>
  ): (xs: T | O) => ?V | O;
  declare function findLast<V, O: { [key: string]: any, ... }, T: Array<V> | O>(
    fn: UnaryPredicateFn<V>,
    xs: T | O
  ): ?V | O;

  declare function findIndex<K, V, T: Array<V> | { [key: K]: V, ... }>(
    fn: UnaryPredicateFn<V>
  ): (xs: T) => number;
  declare function findIndex<K, V, T: Array<V> | { [key: K]: V, ... }>(
    fn: UnaryPredicateFn<V>,
    xs: T
  ): number;
  declare function findLastIndex<K, V, T: Array<V> | { [key: K]: V, ... }>(
    fn: UnaryPredicateFn<V>
  ): (xs: T) => number;
  declare function findLastIndex<K, V, T: Array<V> | { [key: K]: V, ... }>(
    fn: UnaryPredicateFn<V>,
    xs: T
  ): number;

  declare function forEach<T, V>(fn: (x: T) => ?V, xs: Array<T>): Array<T>;
  declare function forEach<T, V>(fn: (x: T) => ?V): (xs: Array<T>) => Array<T>;

  declare function forEachObjIndexed<O: Object, A, B>(
    fn: (val: A, key: string, o: O) => B,
    o: { [key: string]: A, ... }
  ): O;

  declare function forEachObjIndexed<O: Object, A, B>(
    fn: (val: A, key: string, o: O) => B,
    ...args: Array<void>
  ): (o: { [key: string]: A, ... }) => O;

  declare function lastIndexOf<E>(x: E, xs: Array<E>): number;
  declare function lastIndexOf<E>(x: E): (xs: Array<E>) => number;

  declare var map: {
    <T, R, R, FN: (x: T) => R, SR, S: { +map: FN => SR, ... }>(fn: FN, xs: S): SR,
    <T, R, FN: (x: T) => R>(
      fn: FN
    ): (<SR, S: { +map: FN => SR, ... }>(xs: S) => SR) &
      ((xs: { [key: string]: T, ... }) => { [key: string]: R, ... }) &
      ((xs: { +[key: string]: T, ... }) => { +[key: string]: R, ... }) &
      ((xs: Array<T>) => Array<R>) &
      ((xs: $ReadOnlyArray<T>) => $ReadOnlyArray<R>),
    <T, R>(fn: (x: T) => R, xs: Array<T>): Array<R>,
    <T, R>(fn: (x: T) => R, xs: $ReadOnlyArray<T>): $ReadOnlyArray<R>,
    <T, R>(fn: (x: T) => R, xs: { [key: string]: T, ... }): { [key: string]: R, ... },
    <T, R>(fn: (x: T) => R, xs: { +[key: string]: T, ... }): { +[key: string]: R, ... },
    ...
  };

  declare type AccumIterator<A, B, R> = (acc: R, x: A) => [R, B];
  declare function mapAccum<A, B, R>(
    fn: AccumIterator<A, B, R>,
    acc: R,
    xs: Array<A>
  ): [R, Array<B>];
  declare function mapAccum<A, B, R>(
    fn: AccumIterator<A, B, R>
  ): (acc: R, xs: Array<A>) => [R, Array<B>];

  declare function mapAccumRight<A, B, R>(
    fn: AccumIterator<A, B, R>,
    acc: R,
    xs: Array<A>
  ): [R, Array<B>];
  declare function mapAccumRight<A, B, R>(
    fn: AccumIterator<A, B, R>
  ): (acc: R, xs: Array<A>) => [R, Array<B>];

  declare function intersperse<E>(x: E, xs: Array<E>): Array<E>;
  declare function intersperse<E>(x: E): (xs: Array<E>) => Array<E>;

  declare function pair<A, B>(a: A, b: B): [A, B];
  declare function pair<A, B>(a: A): (b: B) => [A, B];

  declare function partition<K, V, T: Array<V> | { [key: K]: V, ... }>(
    fn: UnaryPredicateFn<V>,
    xs: T
  ): [T, T];
  declare function partition<K, V, T: Array<V> | { [key: K]: V, ... }>(
    fn: UnaryPredicateFn<V>
  ): (xs: T) => [T, T];

  declare function pluck<
    V,
    K: string | number,
    T: Array<Array<V> | { [key: string]: V, ... }>
  >(
    k: K,
    xs: T
  ): Array<V>;
  declare function pluck<
    V,
    K: string | number,
    T: Array<Array<V> | { [key: string]: V, ... }>
  >(
    k: K
  ): (xs: T) => Array<V>;

  declare var range: CurriedFunction2<number, number, Array<number>>;

  declare function reduced<T>(
    x: T | $npm$ramda$Reduced<T>
  ): $npm$ramda$Reduced<T>;

  declare function remove<T>(
    from: number
  ): ((to: number) => (src: Array<T>) => Array<T>) &
    ((to: number, src: Array<T>) => Array<T>);
  declare function remove<T>(
    from: number,
    to: number
  ): (src: Array<T>) => Array<T>;
  declare function remove<T>(from: number, to: number, src: Array<T>): Array<T>;

  declare function repeat<T>(x: T, times: number): Array<T>;
  declare function repeat<T>(x: T): (times: number) => Array<T>;

  declare function slice<V, T: Array<V> | string>(
    from: number
  ): ((to: number) => (src: T) => T) & ((to: number, src: T) => T);
  declare function slice<V, T: Array<V> | string>(
    from: number,
    to: number
  ): (src: T) => T;
  declare function slice<V, T: Array<V> | string>(
    from: number,
    to: number,
    src: T
  ): T;

  declare function sort<V, T: Array<V>>(fn: (a: V, b: V) => number, xs: T): T;
  declare function sort<V, T: Array<V>>(
    fn: (a: V, b: V) => number
  ): (xs: T) => T;

  declare function sortWith<V, T: Array<V>>(
    fns: Array<(a: V, b: V) => number>,
    xs: T
  ): T;
  declare function sortWith<V, T: Array<V>>(
    fns: Array<(a: V, b: V) => number>
  ): (xs: T) => T;

  declare function descend<A, B>((A) => B): ((A) => A) => number;
  declare function ascend<A, B>((A) => B): ((A) => A) => number;

  declare function times<T>(fn: (i: number) => T, n: number): Array<T>;
  declare function times<T>(fn: (i: number) => T): (n: number) => Array<T>;

  declare function take<V, T: Array<V> | string>(n: number, xs: T): T;
  declare function take<V, T: Array<V> | string>(n: number): (xs: T) => T;

  declare function takeLast<V, T: Array<V> | string>(n: number, xs: T): T;
  declare function takeLast<V, T: Array<V> | string>(n: number): (xs: T) => T;

  declare function takeLastWhile<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>,
    xs: T
  ): T;
  declare function takeLastWhile<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>
  ): (xs: T) => T;

  declare function takeWhile<V, T: Array<V>>(fn: UnaryPredicateFn<V>, xs: T): T;
  declare function takeWhile<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>
  ): (xs: T) => T;

  declare function unfold<T, R>(
    fn: (seed: T) => [R, T] | boolean
  ): (seed: T) => Array<R>;
  declare function unfold<T, R>(
    fn: (seed: T) => [R, T] | boolean,
    seed: T
  ): Array<R>;

  declare function uniqBy<T, V>(fn: (x: T) => V): (xs: Array<T>) => Array<T>;
  declare function uniqBy<T, V>(fn: (x: T) => V, xs: Array<T>): Array<T>;

  declare function uniqWith<T>(
    fn: BinaryPredicateFn<T>
  ): (xs: Array<T>) => Array<T>;
  declare function uniqWith<T>(
    fn: BinaryPredicateFn<T>,
    xs: Array<T>
  ): Array<T>;

  declare function update<T>(
    index: number
  ): ((elem: T) => (src: Array<T>) => Array<T>) &
    ((elem: T, src: Array<T>) => Array<T>);
  declare function update<T>(
    index: number,
    elem: T
  ): (src: Array<T>) => Array<T>;
  declare function update<T>(index: number, elem: T, src: Array<T>): Array<T>;

  // TODO `without` as a transducer
  declare function without<T>(xs: Array<T>, src: Array<T>): Array<T>;
  declare function without<T>(xs: Array<T>): (src: Array<T>) => Array<T>;

  declare function xprod<T, S>(xs: Array<T>, ys: Array<S>): Array<[T, S]>;
  declare function xprod<T, S>(xs: Array<T>): (ys: Array<S>) => Array<[T, S]>;

  declare function zip<T, S>(xs: Array<T>, ys: Array<S>): Array<[T, S]>;
  declare function zip<T, S>(xs: Array<T>): (ys: Array<S>) => Array<[T, S]>;

  declare function zipObj<T: string, S>(
    xs: Array<T>,
    ys: Array<S>
  ): { [key: T]: S, ... };
  declare function zipObj<T: string, S>(
    xs: Array<T>
  ): (ys: Array<S>) => { [key: T]: S, ... };

  declare type NestedArray<T> = Array<T | NestedArray<T>>;
  declare function flatten<T>(xs: NestedArray<T>): Array<T>;

  declare function fromPairs<T, V>(pair: Array<[T, V]>): { [key: string]: V, ... };

  declare function init<T, V: Array<T> | string>(xs: V): V;

  declare function length<T>(
    xs: Array<T> | string | { length: number, ... }
  ): number;

  declare function reverse<T, V: Array<T> | string>(xs: V): V;

  declare type Reduce = (<A, B>(
    fn: (acc: A, elm: B) => $npm$ramda$Reduced<A> | A
  ) => ((init: A) => (xs: Array<B> | $ReadOnlyArray<B>) => A) &
    ((init: A, xs: Array<B> | $ReadOnlyArray<B>) => A)) &
    (<A, B>(
      fn: (acc: A, elm: B) => $npm$ramda$Reduced<A> | A,
      init: A
    ) => (xs: Array<B> | $ReadOnlyArray<B>) => A) &
    (<A, B>(
      fn: (acc: A, elm: B) => $npm$ramda$Reduced<A> | A,
      init: A,
      xs: Array<B> | $ReadOnlyArray<B>
    ) => A);

  declare var reduce: Reduce;

  declare function reduceBy<A, B>(
    fn: (acc: B, elem: A) => B
  ): ((
    acc: B
  ) => ((
    keyFn: (elem: A) => string
  ) => (xs: Array<A>) => { [key: string]: B, ... }) &
    ((keyFn: (elem: A) => string, xs: Array<A>) => { [key: string]: B, ... })) &
    ((
      acc: B,
      keyFn: (elem: A) => string
    ) => (xs: Array<A>) => { [key: string]: B, ... }) &
    ((
      acc: B,
      keyFn: (elem: A) => string,
      xs: Array<A>
    ) => { [key: string]: B, ... });
  declare function reduceBy<A, B>(
    fn: (acc: B, elem: A) => B,
    acc: B
  ): ((keyFn: (elem: A) => string) => (xs: Array<A>) => { [key: string]: B, ... }) &
    ((keyFn: (elem: A) => string, xs: Array<A>) => { [key: string]: B, ... });
  declare function reduceBy<A, B>(
    fn: (acc: B, elem: A) => B,
    acc: B,
    keyFn: (elem: A) => string
  ): (xs: Array<A>) => { [key: string]: B, ... };
  declare function reduceBy<A, B>(
    fn: (acc: B, elem: A) => B,
    acc: B,
    keyFn: (elem: A) => string,
    xs: Array<A>
  ): { [key: string]: B, ... };

  declare function reduceRight<A, B>(
    fn: (elem: B, acc: A) => A
  ): ((init: A, xs: Array<B>) => A) & ((init: A) => (xs: Array<B>) => A);
  declare function reduceRight<A, B>(
    fn: (elem: B, acc: A) => A,
    init: A
  ): (xs: Array<B>) => A;
  declare function reduceRight<A, B>(
    fn: (elem: B, acc: A) => A,
    init: A,
    xs: Array<B>
  ): A;

  declare function reduceWhile<A, B>(
    pred: (acc: A, curr: B) => boolean
  ): ((
    fn: (a: A, b: B) => A
  ) => (
    init: A
  ) => (
    xs: Array<B>
  ) => A & ((fn: (a: A, b: B) => A) => (init: A, xs: Array<B>) => A)) &
    ((fn: (a: A, b: B) => A, init: A) => (xs: Array<B>) => A) &
    ((fn: (a: A, b: B) => A, init: A, xs: Array<B>) => A);

  declare function reduceWhile<A, B>(
    pred: (acc: A, curr: B) => boolean,
    fn: (a: A, b: B) => A
  ): ((init: A) => (xs: Array<B>) => A) & ((init: A, xs: Array<B>) => A);

  declare function reduceWhile<A, B>(
    fn: (acc: A, curr: B) => boolean,
    fn: (a: A, b: B) => A,
    init: A,
    xs: Array<B>
  ): A;

  declare function scan<A, B>(
    fn: (acc: A, elem: B) => A
  ): ((init: A, xs: Array<B>) => Array<A>) &
    ((init: A) => (xs: Array<B>) => Array<A>);
  declare function scan<A, B>(
    fn: (acc: A, elem: B) => A,
    init: A
  ): (xs: Array<B>) => Array<A>;
  declare function scan<A, B>(
    fn: (acc: A, elem: B) => A,
    init: A,
    xs: Array<B>
  ): Array<A>;

  declare function splitAt<V, T: Array<V> | string>(i: number, xs: T): [T, T];
  declare function splitAt<V, T: Array<V> | string>(
    i: number
  ): (xs: T) => [T, T];
  declare function splitEvery<V, T: Array<V> | string>(
    i: number,
    xs: T
  ): Array<T>;
  declare function splitEvery<V, T: Array<V> | string>(
    i: number
  ): (xs: T) => Array<T>;
  declare function splitWhen<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>,
    xs: T
  ): [T, T];
  declare function splitWhen<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>
  ): (xs: T) => [T, T];

  declare function tail<T, V: Array<T> | string>(xs: V): V;

  declare function transpose<T>(xs: Array<Array<T>>): Array<Array<T>>;

  declare function uniq<T>(xs: Array<T>): Array<T>;

  declare function unnest<T>(xs: NestedArray<T>): NestedArray<T>;

  declare function zipWith<T, S, R>(
    fn: (a: T, b: S) => R
  ): ((xs: Array<T>, ys: Array<S>) => Array<R>) &
    ((xs: Array<T>) => (ys: Array<S>) => Array<R>);
  declare function zipWith<T, S, R>(
    fn: (a: T, b: S) => R,
    xs: Array<T>
  ): (ys: Array<S>) => Array<R>;
  declare function zipWith<T, S, R>(
    fn: (a: T, b: S) => R,
    xs: Array<T>,
    ys: Array<S>
  ): Array<R>;

  // *Relation
  declare function equals<T>(x: T): (y: T) => boolean;
  declare function equals<T>(x: T, y: T): boolean;

  declare function eqBy<A, B>(
    fn: (x: A) => B
  ): ((x: A, y: A) => boolean) & ((x: A) => (y: A) => boolean);
  declare function eqBy<A, B>(fn: (x: A) => B, x: A): (y: A) => boolean;
  declare function eqBy<A, B>(fn: (x: A) => B, x: A, y: A): boolean;

  // Flow cares about the order in which these appear. Generally function
  // siguatures should go from smallest arity to largest arity.
  declare type PropEq = (<T>(
    prop: $Keys<T>
  ) => ((val: mixed) => (obj: T) => boolean) &
    ((val: mixed, obj: T) => boolean)) &
    (<T>(prop: $Keys<T>, val: mixed) => (obj: T) => boolean) &
    (<T>(prop: $Keys<T>, val: mixed, obj: T) => boolean) &
    // Array variants.
    (<T>(
      prop: number
    ) => ((val: mixed) => (obj: Array<any>) => boolean) &
      ((val: mixed, obj: Array<any>) => boolean)) &
    (<T>(prop: number, val: mixed) => (obj: Array<any>) => boolean) &
    (<T>(prop: number, val: mixed, obj: Array<any>) => boolean);
  declare var propEq: PropEq;

  declare function pathEq(
    path: Array<string>
  ): ((val: any) => (o: Object) => boolean) &
    ((val: any, o: Object) => boolean);
  declare function pathEq(
    path: Array<string>,
    val: any
  ): (o: Object) => boolean;
  declare function pathEq(path: Array<string>, val: any, o: Object): boolean;

  declare function clamp<T: number | string | Date>(
    min: T
  ): ((max: T) => (v: T) => T) & ((max: T, v: T) => T);
  declare function clamp<T: number | string | Date>(
    min: T,
    max: T
  ): (v: T) => T;
  declare function clamp<T: number | string | Date>(min: T, max: T, v: T): T;

  declare function countBy<T>(
    fn: (x: T) => string
  ): (list: Array<T>) => { [key: string]: number, ... };
  declare function countBy<T>(
    fn: (x: T) => string,
    list: Array<T>
  ): { [key: string]: number, ... };

  declare function difference<T>(xs1: Array<T>): (xs2: Array<T>) => Array<T>;
  declare function difference<T>(xs1: Array<T>, xs2: Array<T>): Array<T>;

  declare function differenceWith<T>(
    fn: BinaryPredicateFn<T>
  ): ((xs1: Array<T>) => (xs2: Array<T>) => Array<T>) &
    ((xs1: Array<T>, xs2: Array<T>) => Array<T>);
  declare function differenceWith<T>(
    fn: BinaryPredicateFn<T>,
    xs1: Array<T>
  ): (xs2: Array<T>) => Array<T>;
  declare function differenceWith<T>(
    fn: BinaryPredicateFn<T>,
    xs1: Array<T>,
    xs2: Array<T>
  ): Array<T>;

  declare function eqBy<T>(fn: (x: T) => T, x: T, y: T): boolean;
  declare function eqBy<T>(fn: (x: T) => T): (x: T, y: T) => boolean;
  declare function eqBy<T>(fn: (x: T) => T, x: T): (y: T) => boolean;
  declare function eqBy<T>(fn: (x: T) => T): (x: T) => (y: T) => boolean;

  declare function gt<T>(x: T): (y: T) => boolean;
  declare function gt<T>(x: T, y: T): boolean;

  declare function gte<T>(x: T): (y: T) => boolean;
  declare function gte<T>(x: T, y: T): boolean;

  declare function identical<T>(x: T): (y: T) => boolean;
  declare function identical<T>(x: T, y: T): boolean;

  declare function includes<V, T: Array<V> | string>(x?: V, y: T): boolean;
  declare function includes<V, T: Array<V> | string>(x?: V) : (y: T) => boolean;

  declare function innerJoin<A, B>(
    pred: (a: A, b: B) => boolean
  ): (
    a: Array<A>
  ) => (b: Array<B>) => Array<A> & ((a: Array<A>, b: Array<B>) => Array<A>);
  declare function innerJoin<A, B>(
    pred: (a: A, b: B) => boolean,
    a: Array<A>
  ): (b: Array<B>) => Array<A>;
  declare function innerJoin<A, B>(
    pred: (a: A, b: B) => boolean,
    a: Array<A>,
    b: Array<B>
  ): Array<A>;

  declare function intersection<T>(x: Array<T>, y: Array<T>): Array<T>;
  declare function intersection<T>(x: Array<T>): (y: Array<T>) => Array<T>;

  declare function intersectionWith<T>(
    fn: BinaryPredicateFn<T>
  ): ((x: Array<T>, y: Array<T>) => Array<T>) &
    ((x: Array<T>) => (y: Array<T>) => Array<T>);
  declare function intersectionWith<T>(
    fn: BinaryPredicateFn<T>,
    x: Array<T>
  ): (y: Array<T>) => Array<T>;
  declare function intersectionWith<T>(
    fn: BinaryPredicateFn<T>,
    x: Array<T>,
    y: Array<T>
  ): Array<T>;

  declare function lt<T>(x: T): (y: T) => boolean;
  declare function lt<T>(x: T, y: T): boolean;

  declare function lte<T>(x: T): (y: T) => boolean;
  declare function lte<T>(x: T, y: T): boolean;

  declare function max<T>(x: T): (y: T) => T;
  declare function max<T>(x: T, y: T): T;

  declare function maxBy<T, V>(
    fn: (x: T) => V
  ): ((x: T, y: T) => T) & ((x: T) => (y: T) => T);
  declare function maxBy<T, V>(fn: (x: T) => V, x: T): (y: T) => T;
  declare function maxBy<T, V>(fn: (x: T) => V, x: T, y: T): T;

  declare function min<T>(x: T): (y: T) => T;
  declare function min<T>(x: T, y: T): T;

  declare function minBy<T, V>(
    fn: (x: T) => V
  ): ((x: T, y: T) => T) & ((x: T) => (y: T) => T);
  declare function minBy<T, V>(fn: (x: T) => V, x: T): (y: T) => T;
  declare function minBy<T, V>(fn: (x: T) => V, x: T, y: T): T;

  declare function sortBy<T, V>(fn: (x: T) => V): (x: Array<T>) => Array<T>;
  declare function sortBy<T, V>(fn: (x: T) => V, x: Array<T>): Array<T>;

  declare function symmetricDifference<T>(
    x: Array<T>
  ): (y: Array<T>) => Array<T>;
  declare function symmetricDifference<T>(x: Array<T>, y: Array<T>): Array<T>;

  declare function symmetricDifferenceWith<T>(
    fn: BinaryPredicateFn<T>
  ): ((x: Array<T>) => (y: Array<T>) => Array<T>) &
    ((x: Array<T>, y: Array<T>) => Array<T>);
  declare function symmetricDifferenceWith<T>(
    fn: BinaryPredicateFn<T>,
    x: Array<T>
  ): (y: Array<T>) => Array<T>;
  declare function symmetricDifferenceWith<T>(
    fn: BinaryPredicateFn<T>,
    x: Array<T>,
    y: Array<T>
  ): Array<T>;

  declare function union<T>(x: Array<T>): (y: Array<T>) => Array<T>;
  declare function union<T>(x: Array<T>, y: Array<T>): Array<T>;

  declare function unionWith<T>(
    fn: BinaryPredicateFn<T>
  ): ((x: Array<T>) => (y: Array<T>) => Array<T>) &
    ((x: Array<T>, y: Array<T>) => Array<T>);
  declare function unionWith<T>(
    fn: BinaryPredicateFn<T>,
    x: Array<T>
  ): (y: Array<T>) => Array<T>;
  declare function unionWith<T>(
    fn: BinaryPredicateFn<T>,
    x: Array<T>,
    y: Array<T>
  ): Array<T>;

  // *Object
  declare var assoc: {
    <T, S>(
      key: string,
      ...args: Array<void>
    ): ((val: T) => (src: S) => { [k: string]: T, ... }) &
      ((val: T, src: S) => { [k: string]: T, ... } & S),
    <T, S>(
      key: string,
      val: T,
      ...args: Array<void>
    ): (src: S) => { [k: string]: T, ... } & S,
    <T, S: Object, K: $Keys<S>>(
      key: K,
      val: T,
      src: S
    ): { [k: string]: T, ... } & S,
    <T, S: Object>(
      key: string,
      val: T,
      src: S
    ): {
      [k: string]: T,
      ...$Exact<S>,
      ...
    },
    ...
  };

  declare function assocPath<T, S>(
    key: Array<string>,
    ...args: Array<void>
  ): ((val: T) => (src: S) => { [k: string]: T, ... }) &
    ((val: T) => (src: S) => { [k: string]: T, ... } & S);
  declare function assocPath<T, S>(
    key: Array<string>,
    val: T,
    ...args: Array<void>
  ): (src: S) => { [k: string]: T, ... } & S;
  declare function assocPath<T, S>(
    key: Array<string>,
    val: T,
    src: S
  ): { [k: string]: T, ... } & S;

  declare function clone<T>(src: T): $Shape<T>;

  declare function dissoc<T>(
    key: string,
    ...args: Array<void>
  ): (src: { [k: string]: T, ... }) => { [k: string]: T, ... };
  declare function dissoc<T>(
    key: string,
    src: { [k: string]: T, ... }
  ): { [k: string]: T, ... };

  declare function dissocPath<T>(
    key: Array<string>,
    ...args: Array<void>
  ): (src: { [k: string]: T, ... }) => { [k: string]: T, ... };
  declare function dissocPath<T>(
    key: Array<string>,
    src: { [k: string]: T, ... }
  ): { [k: string]: T, ... };

  declare function evolve<A: Object>(NestedObject<Function>): A => A;
  declare function evolve<A: Object>(NestedObject<Function>, A): A;

  declare function eqProps(
    key: string,
    ...args: Array<void>
  ): ((o1: Object) => (o2: Object) => boolean) &
    ((o1: Object, o2: Object) => boolean);
  declare function eqProps(
    key: string,
    o1: Object,
    ...args: Array<void>
  ): (o2: Object) => boolean;
  declare function eqProps(key: string, o1: Object, o2: Object): boolean;

  declare function has(key: string): (o: Object) => boolean;
  declare function has(key: string, o: Object): boolean;

  declare function hasIn(key: string, o: Object): boolean;
  declare function hasIn(key: string): (o: Object) => boolean;

  declare function invert(o: Object): { [k: string]: Array<string>, ... };
  declare function invertObj(o: Object): { [k: string]: string, ... };

  declare function keys(o: ?Object): Array<string>;

  declare type Lens = <T, V>(x: T) => V;

  declare function lens<T, U, V>(
    getter: (s: T) => U,
    setter: (a: U, s: T) => V
  ): Lens;
  declare function lens<T, U, V>(
    getter: (s: T) => U
  ): (setter: (a: U, s: T) => V) => Lens;

  declare function lensIndex(n: number): Lens;

  declare function lensPath(a: $ReadOnlyArray<string | number>): Lens;

  declare function lensProp(str: string): Lens;

  declare function mapObjIndexed<A, B>(
    fn: (val: A, key: string, o: Object) => B,
    o: { [key: string]: A, ... }
  ): { [key: string]: B, ... };
  declare function mapObjIndexed<A, B>(
    fn: (val: A, key: string, o: Object) => B,
    ...args: Array<void>
  ): (o: { [key: string]: A, ... }) => { [key: string]: B, ... };

  declare type Merge = (<A, B>(a: A, b: B) => A & B) &
    (<A, B>(a: A) => (b: B) => A & B);

  declare var merge: Merge;

  declare function mergeAll<T>(
    os: Array<{ [k: string]: T, ... }>
  ): { [k: string]: T, ... };

  declare var mergeDeepLeft: Merge;

  declare var mergeDeepRight: (<A, B>(a: A, b: B) => B & A) &
    (<A, B>(a: A) => (b: B) => B & A);

  declare type MergeWith = (<A, B, T: $Values<A> & $Values<B>>(
    fn: (a: T, b: T) => T,
    a: A,
    b: B
  ) => A & B) &
    (<A, B, T>(fn: (a: T, b: T) => T) => (a: A) => (b: B) => A & B) &
    (<A, B, T>(fn: (a: T, b: T) => T) => (a: A, b: B) => A & B) &
    (<A, B, T>(fn: (a: T, b: T) => T, a: A) => (b: B) => A & B);

  declare type MergeWithKey = (<
    A,
    B,
    S: $Keys<A> & $Keys<B>,
    T: $ElementType<A, $Keys<A>> & $ElementType<B, $Keys<B>>
  >(
    fn: (s: S, a: T, b: T) => T,
    a: A,
    b: B
  ) => A & B) &
    (<S, T, A, B>(fn: (s: S, a: T, b: T) => T) => (a: A, b: B) => A & B) &
    (<S, T, A, B>(fn: (s: S, a: T, b: T) => T) => (a: A) => (b: B) => A & B) &
    (<S, T, A, B>(fn: (s: S, a: T, b: T) => T, a: A) => (b: B) => A & B);

  declare var mergeDeepWith: MergeWith;

  declare var mergeDeepWithKey: MergeWithKey;

  declare var mergeWith: MergeWith;

  declare var mergeWithKey: MergeWithKey;

  declare function objOf<T>(key: string): (val: T) => { [key: string]: T, ... };
  declare function objOf<T>(key: string, val: T): { [key: string]: T, ... };

  declare function omit<T: Object>(keys: Array<string>): (val: T) => Object;
  declare function omit<T: Object>(keys: Array<string>, val: T): Object;

  declare function over<T, V, U>(lens: Lens, x: (any) => mixed, val: V): U;
  declare function over<T, V, U>(
    lens: Lens
  ): ((x: (any) => mixed) => (val: V) => U) &
    ((x: (any) => mixed, val: V) => U);

  declare function path<V>(p: Array<mixed>): (o: NestedObject<V>) => V;
  declare function path<V>(p: Array<mixed>): (o: null | void) => void;
  declare function path<V>(p: Array<mixed>): (o: mixed) => ?V;
  declare function path<V, A: NestedObject<V>>(p: Array<mixed>, o: A): V;
  declare function path<V, A: null | void>(p: Array<mixed>, o: A): void;
  declare function path<V, A: mixed>(p: Array<mixed>, o: A): ?V;

  declare function path<V>(p: Array<string>): (o: NestedObject<V>) => V;
  declare function path<V>(p: Array<string>): (o: null | void) => void;
  declare function path<V>(p: Array<string>): (o: mixed) => ?V;
  declare function path<V, A: NestedObject<V>>(p: Array<string>, o: A): V;
  declare function path<V, A: null | void>(p: Array<string>, o: A): void;
  declare function path<V, A: mixed>(p: Array<string>, o: A): ?V;

  declare function pathOr<T, V, A: NestedObject<V>>(
    or: T
  ): ((p: Array<string>) => (o: ?A) => V | T) &
    ((p: Array<string>, o: ?A) => V | T);
  declare function pathOr<T, V, A: NestedObject<V>>(
    or: T,
    p: Array<string>
  ): (o: ?A) => V | T;
  declare function pathOr<T, V, A: NestedObject<V>>(
    or: T,
    p: Array<string>,
    o: ?A
  ): V | T;

  declare function pick<A>(
    keys: Array<string>
  ): (val: { [key: string]: A, ... }) => { [key: string]: A, ... };
  declare function pick<A>(
    keys: Array<string>,
    val: { [key: string]: A, ... }
  ): { [key: string]: A, ... };

  declare function pickAll<A>(
    keys: Array<string>
  ): (val: { [key: string]: A, ... }) => { [key: string]: ?A, ... };
  declare function pickAll<A>(
    keys: Array<string>,
    val: { [key: string]: A, ... }
  ): { [key: string]: ?A, ... };

  declare function pickBy<A>(
    fn: BinaryPredicateFn2<A, string>
  ): (val: { [key: string]: A, ... }) => { [key: string]: A, ... };
  declare function pickBy<A>(
    fn: BinaryPredicateFn2<A, string>,
    val: { [key: string]: A, ... }
  ): { [key: string]: A, ... };

  declare function project<T>(
    keys: Array<string>
  ): (val: Array<{ [key: string]: T, ... }>) => Array<{ [key: string]: T, ... }>;
  declare function project<T>(
    keys: Array<string>,
    val: Array<{ [key: string]: T, ... }>
  ): Array<{ [key: string]: T, ... }>;

  declare function prop<T: string, O>(key: T): (o: O) => $ElementType<O, T>;
  declare function prop<T: string, O>(
    __: $npm$ramda$Placeholder,
    o: O
  ): (key: T) => $ElementType<O, T>;
  declare function prop<T: string, O>(key: T, o: O): $ElementType<O, T>;

  // propOr 1 argument => (function (2 arguments) or (function (1 argument) => function (1 argument)))
  declare function propOr<DefaultValue, Property: string, Obj: Object>(
    defaultValue: DefaultValue
  ): ((
    property: Property
  ) => ((object: Primitives) => DefaultValue) &
    ((
      object: Obj
    ) => $ElementType<{
    [Property]: DefaultValue,
    ...Obj,
    ...
  }, Property>)) &
    (((property: Property, object: Primitives) => DefaultValue) &
      ((
        property: Property,
        object: Obj
      ) => $ElementType<{
    [Property]: DefaultValue,
    ...Obj,
    ...
  }, Property>));

  // propOr 2 arguments => function (1 argument)
  declare function propOr<DefaultValue, Property: string, Obj: Object>(
    defaultValue: DefaultValue,
    property: $npm$ramda$Placeholder
  ): (
    property: Property
  ) => ((object: Primitives) => DefaultValue) &
    ((
      object: Obj
    ) => $ElementType<{
    [Property]: DefaultValue,
    ...Obj,
    ...
  }, Property>);

  declare function propOr<DefaultValue, Property: string, Obj: Object>(
    defaultValue: $npm$ramda$Placeholder,
    property: Property
  ): (
    defaultValue: DefaultValue
  ) => ((object: Primitives) => DefaultValue) &
    ((
      object: Obj
    ) => $ElementType<{
    [Property]: DefaultValue,
    ...Obj,
    ...
  }, Property>);

  declare function propOr<DefaultValue, Property: string, Obj: Object>(
    defaultValue: DefaultValue,
    property: Property
  ): ((object: Primitives) => DefaultValue) &
    ((
      object: Obj
    ) => $ElementType<{
    [Property]: DefaultValue,
    ...Obj,
    ...
  }, Property>);

  // propOr 3 arguments
  //propOr(defaultValue, __, object)
  declare function propOr<DefaultValue, Property: string>(
    defaultValue: DefaultValue,
    property: $npm$ramda$Placeholder,
    object: Primitives
  ): (p: Property) => DefaultValue;
  declare function propOr<DefaultValue, Property: string, Obj: Object>(
    defaultValue: DefaultValue,
    property: $npm$ramda$Placeholder,
    object: Obj
  ): (
    property: Property
  ) => $ElementType<{
    [Property]: DefaultValue,
    ...Obj,
    ...
  }, Property>;
  //propOr(defaultValue, property, __)
  declare function propOr<DefaultValue, Property: string, Obj: Object>(
    defaultValue: DefaultValue,
    property: Property,
    object: $npm$ramda$Placeholder
  ): ((property: Primitives) => DefaultValue) &
    ((
      property: Obj
    ) => $ElementType<{
    [Property]: DefaultValue,
    ...Obj,
    ...
  }, Property>);
  //propOr(__, property, object)
  declare function propOr<DefaultValue, Property: string>(
    defaultValue: $npm$ramda$Placeholder,
    property: Property,
    object: Primitives
  ): (defaultValue: DefaultValue) => DefaultValue;
  declare function propOr<DefaultValue, Property: string, Obj: Object>(
    defaultValue: $npm$ramda$Placeholder,
    property: Property,
    object: Obj
  ): (
    defaultValue: DefaultValue
  ) => $ElementType<{
    [Property]: DefaultValue,
    ...Obj,
    ...
  }, Property>;
  //propOr(defaultValue, property, object)
  declare function propOr<DefaultValue, Property: string>(
    defaultValue: DefaultValue,
    property: Property,
    object: Primitives
  ): DefaultValue;
  declare function propOr<DefaultValue, Property: string, Obj: Object>(
    defaultValue: DefaultValue,
    property: Property,
    object: Obj
  ): $ElementType<{
    [Property]: DefaultValue,
    ...Obj,
    ...
  }, Property>;

  declare function keysIn(o: Object): Array<string>;

  declare function props<T: string, O>(
    keys: Array<T>
  ): (o: O) => Array<$ElementType<O, T>>;
  declare function props<T: string, O>(
    keys: Array<T>,
    o: O
  ): Array<$ElementType<O, T>>;

  declare function set<T, V, U>(lens: Lens, x: T, val: V): U;
  declare function set<T, V, U>(
    lens: Lens
  ): ((x: (any) => mixed) => (val: V) => U) &
    ((x: (any) => mixed, val: V) => U);

  declare function toPairs<T, O: { [k: string]: T, ... }>(
    o: O
  ): Array<[$Keys<O>, T]>;

  declare function toPairsIn<T, O: { [k: string]: T, ... }>(
    o: O
  ): Array<[string, T]>;

  declare function values<T>(o: T): Array<$Values<T>>;

  declare function valuesIn<T, O: { [k: string]: T, ... }>(o: O): Array<T | any>;

  declare function where<O>(
    predObj: $ObjMap<O, MapUnaryPredicateFn>,
    o: O
  ): boolean;
  declare function where<O>(
    predObj: $ObjMap<O, MapUnaryPredicateFn>
  ): O => boolean;

  declare function whereEq<T, S, O: { [k: string]: T, ... }, Q: { [k: string]: S, ... }>(
    predObj: O
  ): (o: $Shape<O & Q>) => boolean;
  declare function whereEq<T, S, O: { [k: string]: T, ... }, Q: { [k: string]: S, ... }>(
    predObj: O,
    o: $Shape<O & Q>
  ): boolean;

  declare function view<T, V>(lens: Lens, val: T): V;
  declare function view<T, V>(lens: Lens): (val: T) => V;

  // *Function
  declare var __: $npm$ramda$Placeholder;

  declare var T: (_: any) => true;
  declare var F: (_: any) => false;

  declare function addIndex<A, B>(
    iterFn: (fn: (x: A) => B, xs: Array<A>) => Array<B>
  ): (fn: (x: A, idx: number, xs: Array<A>) => B, xs: Array<A>) => Array<B>;

  declare function always<T>(x: T): (x: any) => T;

  declare function ap<T, V>(
    fns: Array<(x: T) => V>
  ): (xs: Array<T>) => Array<V>;
  declare function ap<T, V>(fns: Array<(x: T) => V>, xs: Array<T>): Array<V>;

  declare function apply<T, V>(
    fn: (...args: Array<T>) => V
  ): (xs: Array<T>) => V;
  declare function apply<T, V>(fn: (...args: Array<T>) => V, xs: Array<T>): V;

  declare function applySpec<
    V,
    S,
    A: Array<V>,
    T: NestedObject<(...args: A) => S>
  >(
    spec: T
  ): (...args: A) => NestedObject<S>;

  declare function applyTo<A, B>(a: A): (fn: (x: A) => B) => B;
  declare function applyTo<A, B>(a: A, fn: (x: A) => B): B;

  declare function binary<T>(
    fn: (...args: Array<any>) => T
  ): (x: any, y: any) => T;

  declare function bind<T>(
    fn: (...args: Array<any>) => any,
    thisObj: T
  ): (...args: Array<any>) => any;

  declare function call<T, V>(
    fn: (...args: Array<V>) => T,
    ...args: Array<V>
  ): T;

  declare function comparator<T>(
    fn: BinaryPredicateFn<T>
  ): (x: T, y: T) => number;

  // TODO add tests
  declare function construct<T>(
    ctor: Class<GenericContructor<T>>
  ): (x: T) => GenericContructor<T>;

  // TODO add tests
  declare function constructN<T>(
    n: number,
    ctor: Class<GenericContructorMulti<any>>
  ): (...args: any) => GenericContructorMulti<any>;

  // TODO make less generic
  declare function converge(after: Function, fns: Array<Function>): Function;

  declare function empty<T>(x: T): T;

  declare function flip<A, B, TResult>(
    fn: (arg0: A, arg1: B) => TResult
  ): CurriedFunction2<B, A, TResult>;
  declare function flip<A, B, C, TResult>(
    fn: (arg0: A, arg1: B, arg2: C) => TResult
  ): ((arg0: B, arg1: A) => (arg2: C) => TResult) &
    ((arg0: B, arg1: A, arg2: C) => TResult);
  declare function flip<A, B, C, D, TResult>(
    fn: (arg0: A, arg1: B, arg2: C, arg3: D) => TResult
  ): ((arg1: B, arg0: A) => (arg2: C, arg3: D) => TResult) &
    ((arg1: B, arg0: A, arg2: C, arg3: D) => TResult);
  declare function flip<A, B, C, D, E, TResult>(
    fn: (arg0: A, arg1: B, arg2: C, arg3: D, arg4: E) => TResult
  ): ((arg1: B, arg0: A) => (arg2: C, arg3: D, arg4: E) => TResult) &
    ((arg1: B, arg0: A, arg2: C, arg3: D, arg4: E) => TResult);

  declare function identity<T>(x: T): T;

  declare function invoker<A, B, C, D, O: { [k: string]: Function, ... }>(
    arity: number,
    name: $Keys<O>
  ): CurriedFunction2<A, O, D> &
    CurriedFunction3<A, B, O, D> &
    CurriedFunction4<A, B, C, O, D>;

  declare function juxt<T, S>(
    fns: Array<(...args: Array<S>) => T>
  ): (...args: Array<S>) => Array<T>;

  // TODO lift

  // TODO liftN

  declare function memoize<A, B, T: (...args: Array<A>) => B>(fn: T): T;

  declare function memoizeWith<A, B, C>(
    keyFn: (...args: Array<A>) => C
  ): (...args: Array<A>) => (...args: Array<A>) => B;
  declare function memoizeWith<A, B, C>(
    keyFn: (...args: Array<A>) => C,
    fn: (...args: Array<A>) => B
  ): (...args: Array<A>) => B;

  declare function nAry<T>(
    arity: number,
    fn: (...args: Array<any>) => T
  ): (...args: Array<any>) => T;

  declare function nthArg<T>(n: number): (...args: Array<T>) => T;

  declare var o: (<A, B, C>(
    fn1: (b: B) => C,
    ...rest: void[]
  ) => ((fn2: (a: A) => B, ...rest: void[]) => (x: A) => C) &
    ((fn2: (a: A) => B, x: A) => C)) &
    (<A, B, C>(
      fn1: (b: B) => C,
      fn2: (a: A) => B,
      ...rest: void[]
    ) => (x: A) => C) &
    (<A, B, C>(fn1: (b: B) => C, fn2: (a: A) => B, x: A) => C);

  declare function of<T>(x: T): Array<T>;

  declare function once<A, B, T: (...args: Array<A>) => B>(fn: T): T;

  declare var partial: Partial;
  // TODO partialRight

  declare type UnaryMonadFn<A, R> = UnaryFn<A, Monad<R>>;
  declare type PipeK = (<A, B, C, D, E, F, G, H, I, J, K, L: Monad<K>>(
    ab: UnaryMonadFn<A, B>,
    bc: UnaryMonadFn<B, C>,
    cd: UnaryMonadFn<C, D>,
    de: UnaryMonadFn<D, E>,
    ef: UnaryMonadFn<E, F>,
    fg: UnaryMonadFn<F, G>,
    gh: UnaryMonadFn<G, H>,
    hi: UnaryMonadFn<H, I>,
    ij: UnaryMonadFn<I, J>,
    jk: (J) => L
  ) => A => L) &
    (<A, B, C, D, E, F, G, H, I, J, K: Monad<J>>(
      ab: UnaryMonadFn<A, B>,
      bc: UnaryMonadFn<B, C>,
      cd: UnaryMonadFn<C, D>,
      de: UnaryMonadFn<D, E>,
      ef: UnaryMonadFn<E, F>,
      fg: UnaryMonadFn<F, G>,
      gh: UnaryMonadFn<G, H>,
      hi: UnaryMonadFn<H, I>,
      ij: (I) => K
    ) => A => K) &
    (<A, B, C, D, E, F, G, H, I, J: Monad<I>>(
      ab: UnaryMonadFn<A, B>,
      bc: UnaryMonadFn<B, C>,
      cd: UnaryMonadFn<C, D>,
      de: UnaryMonadFn<D, E>,
      ef: UnaryMonadFn<E, F>,
      fg: UnaryMonadFn<F, G>,
      gh: UnaryMonadFn<G, H>,
      hi: (H) => J
    ) => A => J) &
    (<A, B, C, D, E, F, G, H, I: Monad<H>>(
      ab: UnaryMonadFn<A, B>,
      bc: UnaryMonadFn<B, C>,
      cd: UnaryMonadFn<C, D>,
      de: UnaryMonadFn<D, E>,
      ef: UnaryMonadFn<E, F>,
      fg: UnaryMonadFn<F, G>,
      gh: (G) => I
    ) => A => I) &
    (<A, B, C, D, E, F, G, H: Monad<G>>(
      ab: UnaryMonadFn<A, B>,
      bc: UnaryMonadFn<B, C>,
      cd: UnaryMonadFn<C, D>,
      de: UnaryMonadFn<D, E>,
      ef: UnaryMonadFn<E, F>,
      fg: (F) => H
    ) => A => H) &
    (<A, B, C, D, E, F, G: Monad<F>>(
      ab: UnaryMonadFn<A, B>,
      bc: UnaryMonadFn<B, C>,
      cd: UnaryMonadFn<C, D>,
      de: UnaryMonadFn<D, E>,
      ef: (E) => G
    ) => A => G) &
    (<A, B, C, D, E, F: Monad<E>>(
      ab: UnaryMonadFn<A, B>,
      bc: UnaryMonadFn<B, C>,
      cd: UnaryMonadFn<C, D>,
      de: (D) => F
    ) => A => F) &
    (<A, B, C, D, E: Monad<D>>(
      ab: UnaryMonadFn<A, B>,
      bc: UnaryMonadFn<B, C>,
      cd: (C) => E
    ) => A => E) &
    (<A, B, C, D: Monad<C>>(ab: UnaryMonadFn<A, B>, bc: (B) => D) => A => D) &
    (<A, B, C: Monad<B>>(ab: (A) => C) => A => C);

  declare function tap<T>(fn: (x: T) => any): (x: T) => T;
  declare function tap<T>(fn: (x: T) => any, x: T): T;

  declare function tryCatch<A, B, E>(
    tryer: (a: A) => B
  ): ((catcher: (e: E, a: A) => B) => (a: A) => B) &
    ((catcher: (e: E, a: A) => B, a: A) => B);
  declare function tryCatch<A, B, E>(
    tryer: (a: A) => B,
    catcher: (e: E, a: A) => B
  ): (a: A) => B;
  declare function tryCatch<A, B, E>(
    tryer: (a: A) => B,
    catcher: (e: E, a: A) => B,
    a: A
  ): B;

  declare function unapply<T, V>(
    fn: (xs: Array<T>) => V
  ): (...args: Array<T>) => V;

  declare function unary<T>(fn: (...args: Array<any>) => T): (x: any) => T;

  declare var uncurryN: (<A, B, C>(2, (A) => B => C) => (A, B) => C) &
    (<A, B, C, D>(3, (A) => B => C => D) => (A, B, C) => D) &
    (<A, B, C, D, E>(4, (A) => B => C => D => E) => (A, B, C, D) => E) &
    (<A, B, C, D, E, F>(
      5,
      (A) => B => C => D => E => F
    ) => (A, B, C, D, E) => F) &
    (<A, B, C, D, E, F, G>(
      6,
      (A) => B => C => D => E => F => G
    ) => (A, B, C, D, E, F) => G) &
    (<A, B, C, D, E, F, G, H>(
      7,
      (A) => B => C => D => E => F => G => H
    ) => (A, B, C, D, E, F, G) => H) &
    (<A, B, C, D, E, F, G, H, I>(
      8,
      (A) => B => C => D => E => F => G => H => I
    ) => (A, B, C, D, E, F, G, H) => I);

  //TODO useWith

  declare function wrap<A, B, C, D, F: (...args: Array<A>) => B>(
    fn: F,
    fn2: (fn: F, ...args: Array<C>) => D
  ): (...args: Array<A | C>) => D;

  // *Logic

  declare function allPass<T>(
    fns: Array<(...args: Array<T>) => boolean>
  ): (...args: Array<T>) => boolean;

  declare function and<X, Y>(x: X): (y: Y) => X | Y;
  declare function and<X, Y>(x: X, y: Y): X | Y;

  declare function anyPass<T>(
    fns: Array<(...args: Array<T>) => boolean>
  ): (...args: Array<T>) => boolean;

  declare function both<T>(
    x: (...args: Array<T>) => boolean
  ): (y: (...args: Array<T>) => boolean) => (...args: Array<T>) => boolean;
  declare function both<T>(
    x: (...args: Array<T>) => boolean,
    y: (...args: Array<T>) => boolean
  ): (...args: Array<T>) => boolean;

  // The following code is generated from
  // https://github.com/LoganBarnett/typedef-gen due to Flow not being able to
  // preserve the input function's form as a return type.
  //
  // Begin generated complement declaration.

  declare function complement< Fn: () => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, Fn: (A) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, Fn: (A, B) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, Fn: (A, B, C) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, Fn: (A, B, C, D) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, Fn: (A, B, C, D, E) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, F, Fn: (A, B, C, D, E, F) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, F, G, Fn: (A, B, C, D, E, F, G) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, F, G, H, Fn: (A, B, C, D, E, F, G, H) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, F, G, H, I, Fn: (A, B, C, D, E, F, G, H, I) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, F, G, H, I, J, Fn: (A, B, C, D, E, F, G, H, I, J) => boolean>(
    f: Fn
  ): Fn;
  // End generated complement declaration.

  declare function cond<A, B>(
    fns: Array<[(...args: Array<A>) => boolean, (...args: Array<A>) => B]>
  ): (...args: Array<A>) => B;

  declare function defaultTo<T, V>(d: T): (x: ?V) => V | T;
  declare function defaultTo<T, V>(d: T, x: ?V): V | T;

  declare function either(
    x: (...args: Array<any>) => any
  ): (y: (...args: Array<any>) => any) => (...args: Array<any>) => any;
  declare function either(
    x: (...args: Array<any>) => any,
    y: (...args: Array<any>) => any
  ): (...args: Array<any>) => any;

  declare function ifElse<Args, B, C>(
    cond: (...args: Args) => boolean
  ): ((
    f1: (...args: Args) => B
  ) => (f2: (...args: Args) => C) => (...args: Args) => B | C) &
    ((
      f1: (...args: Args) => B,
      f2: (...args: Args) => C
    ) => (...args: Args) => B | C);
  declare function ifElse<Args, B, C>(
    cond: (...args: Args) => boolean,
    f1: (...args: Args) => B,
    f2: (...args: Args) => C
  ): (...args: Args) => B | C;

  declare function isEmpty(x: ?Array<any> | Object | string): boolean;

  declare function not(x: boolean): boolean;

  declare function or<X, Y>(x: X): (y: Y) => X | Y;
  declare function or<X, Y>(x: X, y: Y): X | Y;

  declare var pathSatisfies: CurriedFunction3<
    UnaryPredicateFn<any>,
    string[],
    Object,
    boolean
  >;

  declare function propSatisfies<T>(
    cond: (x: T) => boolean,
    prop: string,
    o: NestedObject<T>
  ): boolean;
  declare function propSatisfies<T>(
    cond: (x: T) => boolean,
    prop: string
  ): (o: NestedObject<T>) => boolean;
  declare function propSatisfies<T>(
    cond: (x: T) => boolean
  ): ((prop: string) => (o: NestedObject<T>) => boolean) &
    ((prop: string, o: NestedObject<T>) => boolean);

  declare function unless<T, V, S>(
    pred: UnaryPredicateFn<T>
  ): ((fn: (x: S) => V) => (x: T | S) => T | V) &
    ((fn: (x: S) => V, x: T | S) => T | V);
  declare function unless<T, V, S>(
    pred: UnaryPredicateFn<T>,
    fn: (x: S) => V
  ): (x: T | S) => V | T;
  declare function unless<T, V, S>(
    pred: UnaryPredicateFn<T>,
    fn: (x: S) => V,
    x: T | S
  ): T | V;

  declare function until<T>(
    pred: UnaryPredicateFn<T>
  ): ((fn: (x: T) => T) => (x: T) => T) & ((fn: (x: T) => T, x: T) => T);
  declare function until<T>(
    pred: UnaryPredicateFn<T>,
    fn: (x: T) => T
  ): (x: T) => T;
  declare function until<T>(
    pred: UnaryPredicateFn<T>,
    fn: (x: T) => T,
    x: T
  ): T;

  declare function when<T, V, S>(
    pred: UnaryPredicateFn<T>
  ): ((fn: (x: S) => V) => (x: T | S) => T | V) &
    ((fn: (x: S) => V, x: T | S) => T | V);
  declare function when<T, V, S>(
    pred: UnaryPredicateFn<T>,
    fn: (x: S) => V
  ): (x: T | S) => V | T;
  declare function when<T, V, S>(
    pred: UnaryPredicateFn<T>,
    fn: (x: S) => V,
    x: T | S
  ): T | V;
}
