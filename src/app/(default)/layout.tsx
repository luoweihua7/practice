import { PropsWithChildren, memo } from 'react';

import DefaultLayout from '@/layouts/default';

import DefaultFooter from './footer';

const ExampleLayout = memo(({ children }: PropsWithChildren) => {
  return <DefaultLayout footer={DefaultFooter}>{children}</DefaultLayout>;
});

export default ExampleLayout;
