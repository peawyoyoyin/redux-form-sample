interface ActionWithoutPayload<T> {
  type: T
}

interface ActionWithPayload<T, P> {
  type: T,
  payload: P
}

export type Action<T, P = undefined> = P extends undefined ? ActionWithoutPayload<T> : ActionWithPayload<T, P>;

type ActionCreator<A extends Action<any, any>> = A extends ActionWithPayload<any, any> ? (payload: A['payload']) => A : () => A;
const actionCreator = <A extends Action<any, any>>(type: A['type']): ActionCreator<A> => ((payload) => ({ type, payload })) as ActionCreator<A>;

export const createActionCreator = <A extends Action<any, any>>(type: A['type']) => actionCreator<A>(type);
