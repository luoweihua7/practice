import { App, Layout } from 'antd';
import { createStyles } from 'antd-style';
import { PropsWithChildren, memo } from 'react';

import StyleRegistry from '@/layouts/StyleRegistry';

const useStyles = createStyles(({ css }) => ({
  layout: css`
    background-color: transparent;
    min-height: 100vh;
  `,
}));

const GlobalLayout = memo(({ children }: PropsWithChildren) => {
  const { styles } = useStyles();

  return (
    <StyleRegistry>
      <App component={false}>
        <Layout className="flex flex-col w-full max-w-screen-2xl !min-h-screen !bg-transparent">{children}</Layout>
      </App>
    </StyleRegistry>
  );
});

GlobalLayout.displayName = 'GlobalLayout';

export default GlobalLayout;
