interface MockeryOpts {
  delay: number
}

type Action<T> = (resolve: (value?: T) => void, reject: (value?: any) => void) => void;

const defaultOpts: MockeryOpts = {
  delay: 0
};

export const MockeryPromise = <T>(action: Action<T>, opts: MockeryOpts = defaultOpts) => new Promise<T>((resolve, reject) => {
  const { delay } = opts;

  setTimeout(() => {
    action(resolve, reject);
  }, delay);
})
