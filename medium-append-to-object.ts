/* _____________ Your Code Here _____________ */

// T : test1 , U : home, V : boolean
type AppendToObject<T, U extends string | number | symbol, V> = {
  [k in keyof T | U]: k extends keyof T ? T[k] : V;
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type test1 = {
  key: 'cat';
  value: 'green';
};

type testExpect1 = {
  key: 'cat';
  value: 'green';
  home: boolean;
};

type test2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
};

type testExpect2 = {
  key: 'dog' | undefined;
  value: 'white';
  sun: true;
  home: 1;
};

type test3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
};

type testExpect3 = {
  key: 'cow';
  value: 'yellow';
  sun: false;
  isMotherRussia: false | undefined;
};

type cases = [
  Expect<Equal<AppendToObject<test1, 'home', boolean>, testExpect1>>,
  Expect<Equal<AppendToObject<test2, 'home', 1>, testExpect2>>,
  Expect<
    Equal<
      AppendToObject<test3, 'isMotherRussia', false | undefined>,
      testExpect3
    >
  >,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/527/answer
  > View solutions: https://tsch.js.org/527/solutions
  > More Challenges: https://tsch.js.org
*/
