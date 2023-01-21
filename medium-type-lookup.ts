/* _____________ Your Code Here _____________ */

type LookUp<U, T> = U extends { type: T } ? U : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

interface Cat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

interface Dog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

type AnimalType = Cat | Dog;

type ex = AnimalType extends { type: string } ? true : false;
type cases = [
  Expect<Equal<LookUp<AnimalType, 'dog'>, Dog>>,
  Expect<Equal<LookUp<AnimalType, 'cat'>, Cat>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/62/answer
  > View solutions: https://tsch.js.org/62/solutions
  > More Challenges: https://tsch.js.org
*/
