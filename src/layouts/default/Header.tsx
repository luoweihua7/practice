import { Button, Layout } from 'antd';
import Link from 'next/link';
import { PropsWithChildren, memo } from 'react';

import Logo from '@/components/Logo';

const { Header, Content, Footer, Sider } = Layout;

interface ILink {
  href: string;
  label: string;
  prefetch?: boolean;
}

const DefaultHeader = memo(({ children }: PropsWithChildren) => {
  const links: ILink[] = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/ai-features', label: 'AI Features' },
    { href: '/security', label: 'Security' },
    { href: '/our-story', label: 'Our Story' },
  ];

  return (
    <Header className="flex flex-row items-center justify-between w-full h-16 !bg-transparent px-0">
      <Link href="/">
        <Logo height={40} width={40} />
      </Link>
      <div className="flex justify-center items-center h-10 mx-2">
        {links?.map(({ href, label, prefetch }) => (
          <Link className="text-base font-medium text-slate-500 px-4 py-2 border border-transparent hover:text-slate-800 hover:border-zinc-400 hover:rounded-3xl" href={href} key={href} prefetch={!!prefetch}>
            {label}
          </Link>
        ))}
      </div>
      <div className="flex items-center h-10 mx-2">
        <Link className="ml-2 mr-4 text-base text-gray-500 hover:text-gray-900" href="/dashboard" prefetch={false}>
          Dashboard
        </Link>
        <Button className="text-base font-medium text-slate-600 hover:text-slate-900" href="/login" shape="round" size={'large'} type="default">
          Login
        </Button>
      </div>
    </Header>
  );
});

export default DefaultHeader;
