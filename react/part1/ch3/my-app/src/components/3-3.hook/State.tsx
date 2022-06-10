import { useReducer } from "react";

// export default function State() {
//   const initialCount = 0;
//   const [count, setCount] = useState<number>(initialCount);
//   return (
//     <div>
//       count: {count}
//       <button onClick={() => setCount(initialCount)}>Reset</button>
//       <button onClick={() => setCount((pre) => pre + 1)}>+</button>
//       <button onClick={() => setCount((pre) => pre - 1)}>-</button>
//     </div>
//   );
// }

interface CountState {
  count: number;
  name: string;
}
export default function State() {
  const initialState = { count: 0, name: "jimy" };
  function reducer(state: CountState, action: any) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "increment":
        return { count: state.count + 1, name: "u" };
      case "decrement":
        return { count: state.count - 1, name: "i" };

      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      count(reducer): {state.count} {state.name}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
