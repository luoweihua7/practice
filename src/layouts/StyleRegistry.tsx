'use client';

import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { ConfigProvider } from 'antd';
import { useServerInsertedHTML } from 'next/navigation';
import React, { useRef } from 'react';

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  const isInsert = useRef(false);

  useServerInsertedHTML(() => {
    // avoid duplicate css insert
    // refs: https://github.com/vercel/next.js/discussions/49354#discussioncomment-6279917
    if (isInsert.current) return;
    isInsert.current = true;

    return <style dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} id="antd" />;
  });
  return (
    <ConfigProvider>
      <StyleProvider cache={cache} hashPriority="high">
        {children}
      </StyleProvider>
    </ConfigProvider>
  );
};

export default StyledComponentsRegistry;
