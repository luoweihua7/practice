'use client';

import { Button, Form, Input } from 'antd';
import InputPassword from 'antd/es/input/Password';
import { KeyRound, UserRound } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';

import Logo from '@/components/Logo';

const SignInPage = memo(() => {
  const rules = {
    password: [
      {
        message: 'Please input your Password',
        required: true,
      },
    ],
    username: [
      {
        message: 'Please input your Username',
        required: true,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-white border-[1px] px-8 py-12 min-w-[420px] max-w-lg ">
      <Logo className="w-24 h-24" />
      <div className="font-semibold text-3xl">Login</div>
      <span className="my-2 text-gray-600">Login to Dashboard</span>
      <Form className="flex-center w-full gap-4 login-form">
        <Form.Item className="w-full" label={null} name="username" rules={rules.username}>
          <Input placeholder="Username" prefix={<UserRound className="login-input" />} size="large" />
        </Form.Item>
        <Form.Item className="w-full" name="password" rules={rules.password}>
          <InputPassword placeholder="Password" prefix={<KeyRound className="login-input" />} size="large" />
        </Form.Item>
        <Button className="!w-full !h-12" htmlType="submit" shape="round" size="large">
          Login
        </Button>
        <div className='flex flex-row items-center justify-center mt-4'>
          <span>Don&apos;t have an account? </span>
          <Link href="/signup">Sign up</Link>
        </div>
      </Form>
    </div>
  );
});

export default SignInPage;
