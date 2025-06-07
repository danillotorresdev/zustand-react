import { useStore } from '@/store';
import { useShallow } from 'zustand/react/shallow';
import { Button } from '../ui/button';

export function Counter() {
  console.log('Counter rendered!');

  const { counter, increment } = useStore(
    useShallow(
      state => ({
        counter: state.counter.value,
        increment: state.counter.increment,
      })
    )
  );

  console.log(useStore.getState());

  return (
    <div className="space-y-2">
      <h1>Counter: {counter}</h1>
      <Button type="button" onClick={increment}>
        Incrementar
      </Button>
    </div>
  );
}
