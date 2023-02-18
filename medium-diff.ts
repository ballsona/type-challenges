/* _____________ Your Code Here _____________ */

type Diff<T, S> = {
  [i in
    | Exclude<keyof T, keyof S>
    | Exclude<keyof S, keyof T>]: i extends keyof T
    ? T[i]
    : i extends keyof S
    ? S[i]
    : never;
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/645/answer
  > View solutions: https://tsch.js.org/645/solutions
  > More Challenges: https://tsch.js.org
*/
