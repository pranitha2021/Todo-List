import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

// Custom hook for counter state and actions
export const useCounter = () => {
  const count = useSelector((state) => state.counter.value); // Access counter state
  const dispatch = useDispatch();

  // Define action dispatchers
  const incrementCount = () => dispatch(increment());
  const decrementCount = () => dispatch(decrement());
  const incrementByAmountCount = (amount) => dispatch(incrementByAmount(amount));

  return { count, incrementCount, decrementCount, incrementByAmountCount };
};
