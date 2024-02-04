import { Header } from '@/components/header';
export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='px-16'>
      <Header />
      {children}
    </div>
  );
}
