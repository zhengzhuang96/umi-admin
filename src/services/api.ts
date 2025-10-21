// 封装的请求库
// 注意：Umi Max的request对象在运行时自动可用，不需要导入

// 定义响应类型
export interface ResponseData<T = any> {
  success: boolean;
  data: T;
  message?: string;
  code?: number;
}

// 定义请求配置
interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  params?: any;
  headers?: Record<string, string>;
  timeout?: number;
}

// 基础请求函数
export const http = {
  get<T = any>(url: string, options?: Omit<RequestOptions, 'method'>): Promise<ResponseData<T>> {
    // @ts-ignore
    return request(url, {
      method: 'GET',
      ...options,
    });
  },

  post<T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'method' | 'data'>): Promise<ResponseData<T>> {
    // @ts-ignore
    return request(url, {
      method: 'POST',
      data,
      ...options,
    });
  },

  put<T = any>(url: string, data?: any, options?: Omit<RequestOptions, 'method' | 'data'>): Promise<ResponseData<T>> {
    // @ts-ignore
    return request(url, {
      method: 'PUT',
      data,
      ...options,
    });
  },

  delete<T = any>(url: string, options?: Omit<RequestOptions, 'method'>): Promise<ResponseData<T>> {
    // @ts-ignore
    return request(url, {
      method: 'DELETE',
      ...options,
    });
  },
};

// 模拟登录API
export const authAPI = {
  login: (username: string, password: string): Promise<ResponseData<{ token: string; userInfo: any }>> => {
    // 模拟登录逻辑
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
          resolve({
            success: true,
            data: {
              token: 'mock-token-123456',
              userInfo: {
                id: 1,
                username: 'admin',
                name: '管理员',
                avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                role: 'admin',
              },
            },
            message: '登录成功',
          });
        } else {
          resolve({
            success: false,
            data: null as any,
            message: '用户名或密码错误',
          });
        }
      }, 1000);
    });
  },

  logout: (): Promise<ResponseData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem('token');
        resolve({
          success: true,
          data: null,
          message: '退出成功',
        });
      }, 500);
    });
  },
};
