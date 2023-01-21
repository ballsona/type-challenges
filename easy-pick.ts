/* _____________ Your Code Here _____________ */

// T는 해당 인터페이스
// K는 T의 프로퍼티 중 반드시 들어가야할 속성들 union
// MyPick 타입을 따르는 객체는 반드시 K 속성을 가지고 있어야한다.
type MyPick<T, K extends keyof T> = {
  [i in K]: T[i];
};

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}
