import Image from 'next/image';
import { memo } from 'react';

import DefaultLayout from '@/layouts/default';

import Features from './home/features';
import Hero from './home/hero';

const HomePage = memo(() => {
  return (
    <DefaultLayout>
      <Hero />
      <Features />
    </DefaultLayout>
  );
});

export default HomePage;
