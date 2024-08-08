'use client';

import Image from 'next/image';
import { memo } from 'react';

interface LogoProps {
  className?: string;
  height?: number;
  width?: number;
}

const Logo = ({ width, height, ...rest }: LogoProps) => {
  return <Image alt="logo" height={height ?? 512} src="/images/logo.png" width={width ?? 512} {...rest} />;
};

export default memo(Logo);
