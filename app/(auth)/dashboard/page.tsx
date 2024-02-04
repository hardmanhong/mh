'use client';
import { trpc } from '@/utils/trpc';

export default function Dashboard() {
  const hello = trpc.hello.hello.useQuery({ text: 'client' });
  const hi = trpc.hello.hi.useQuery();
  console.log('hello', hello.data);
  console.log('hi', hi);
  return (
    <div>
      dashboard <p>{hello.data?.greeting}</p> <p>{hi.data}</p>
    </div>
  );
}
