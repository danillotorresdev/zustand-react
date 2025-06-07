import { useForm } from 'react-hook-form';
import { useShallow } from 'zustand/react/shallow';

import { useStore } from '@/store';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function UserProfile() {
  console.log('UserProfile rendered!');

  const { user, setUsername } = useStore(
    useShallow(
      state => ({
        user: state.user.data,
        setUsername: state.user.setUsername,
      })
    )
  );

  const form = useForm({
    defaultValues: {
      username: user.username,
    },
  });

  const handleSubmit = form.handleSubmit(formData => {
    setUsername(formData.username);
  });

  return (
    <div>
      <Avatar className="mb-4">
        <AvatarImage
          src={`https://github.com/${user.username}.png`}
          alt={`@${user.username}`}
        />
        <AvatarFallback>
          {user.username.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <form className="flex gap-4" onSubmit={handleSubmit}>
        <Input {...form.register('username')} />
        <Button>Salvar</Button>
      </form>
    </div>
  );
}
