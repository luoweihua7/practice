import { Theme } from '@radix-ui/themes';
import { memo } from 'react';

const GlobalLayout = memo(({ children }) => {
  return (
    <Theme radius="full" appearance="dark">
      {children}
    </Theme>
  );
});

export default GlobalLayout;
