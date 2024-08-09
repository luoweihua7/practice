import React, { PropsWithChildren, memo } from 'react';

import DefaultFooter from './footer';
import DefaultHeader from './header';

interface IDefaultLayoutProps extends PropsWithChildren {
  footer?: React.ReactNode;
}

const DefaultLayout = memo(({ children, footer: CustomFooter }: IDefaultLayoutProps) => {
  return (
    <div className="relative">
      <div className="relative">
        <DefaultHeader />
      </div>
      {children}
      {CustomFooter ? <CustomFooter /> : <DefaultFooter />}
    </div>
  );
});

export default DefaultLayout;
