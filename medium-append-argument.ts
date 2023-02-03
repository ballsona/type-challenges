/* _____________ Your Code Here _____________ */

type AppendArgument<Fn extends Function, A extends unknown> = Fn extends (
  ...props: infer T
) => infer Q
  ? (...props: [...T, A]) => Q
  : Fn;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;

type s = Case1 extends (a: number, b: string, c: boolean) => number
  ? true
  : false;

type Result1 = (a: number, b: string, x: boolean) => number;

type Case2 = AppendArgument<() => void, undefined>;
type Result2 = (x: undefined) => void;

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  AppendArgument<unknown, undefined>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/191/answer
  > View solutions: https://tsch.js.org/191/solutions
  > More Challenges: https://tsch.js.org
*/
