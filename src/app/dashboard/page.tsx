import { memo } from 'react';

import DashboardLayout from '@/layouts/dashboard';

const DashboardPage = memo(() => {
  return (
    <DashboardLayout>
      <div>hello world</div>
    </DashboardLayout>
  );
});

export default DashboardPage;
