/* _____________ Your Code Here _____________ */

type SplitedString<S extends string> = S extends `${infer T}${infer R}`
  ? [T, ...SplitedString<R>]
  : [];

type LengthOfString2<S extends string> = SplitedString<S>['length'];

type LengthOfString<
  S extends string,
  arr extends unknown[] = [],
> = S extends `${infer T}${infer R}`
  ? LengthOfString<R, [T, ...arr]>
  : arr['length'];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/
