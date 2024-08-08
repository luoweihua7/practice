import { PropsWithChildren, memo } from 'react';

import DefaultLayout from '@/layouts/default';

const PageLayout = memo(({ children }: PropsWithChildren) => {
  return <DefaultLayout>{children}</DefaultLayout>;
});

export default PageLayout;
