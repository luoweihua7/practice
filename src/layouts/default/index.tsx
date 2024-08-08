'use client';

import { createStyles } from 'antd-style';
import { memo } from 'react';

import GlobalLayout from '@/layouts/GlobalLayout';

import Header from './Header';

const useStyles = createStyles(({ css }) => ({
  'flex-1': css`
    flex: 1;
  `,
}));

const DefaultLayout = memo(({ children }) => {
  const { styles } = useStyles();

  return (
    <GlobalLayout>
      <Header />
      {children}
    </GlobalLayout>
  );
});

export default DefaultLayout;
