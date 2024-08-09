import { Box, Button, Container, Flex } from '@radix-ui/themes';
import { PropsWithChildren, memo } from 'react';

import GlobalLayout from '@/layouts/GlobalLayout';

const DashboardLayout = memo(({ children }: PropsWithChildren) => {
  return (
    <GlobalLayout>
      <Flex display="flex" direction="row" justify="center" items="center" className="min-h-screen">
        <Box className="bg-transparent m-4 p-4 rounded-lg w-64">
          <Button size={2} className="w-full mb-4">
            Demo
          </Button>
        </Box>
        <Flex className="bg-transparent m-4 p-4 rounded-lg flex-1 w-full">{children}</Flex>
      </Flex>
    </GlobalLayout>
  );
});

export default DashboardLayout;
