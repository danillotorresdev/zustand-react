import { Counter } from './components/app/Counter';
import { UserProfile } from './components/app/UserProfile';

export function App() {
  console.log('App rendered!');

  return (
    <div className="min-h-screen p-6 grid place-items-center">
      <div className="space-y-10">
        <Counter />
        <UserProfile />
      </div>
    </div>
  );
}
