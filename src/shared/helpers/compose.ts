export type UnaryFunction<T> = (argument: T) => T;

function compose<T>(...fns: Array<UnaryFunction<T>>): UnaryFunction<T> {
  return (input: T) => {
    let result = input;

    for (let index = fns.length - 1; index >= 0; index -= 1) {
      const fn = fns[index];
      result = fn(result);
    }

    return result;
  };
}

export { compose };
