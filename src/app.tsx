import { useState } from 'react';
import { useModel } from '@umijs/max';
import { ConfigProvider, theme } from 'antd';

export async function getInitialState() {
  return {
    name: 'Umi Admin',
    userInfo: {
      name: '管理员',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    },
  };
}

export function rootContainer(container: any) {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#0ea5e9',
        },
      }}
    >
      {container}
    </ConfigProvider>
  );
}
