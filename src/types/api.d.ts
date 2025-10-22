// API 类型定义
declare namespace API {
  // 当前用户信息
  interface CurrentUser {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    access: 'admin' | 'user';
    permissions?: string[];
    roles?: string[];
  }

  // 登录请求
  interface LoginParams {
    username: string;
    password: string;
  }

  // 登录响应
  interface LoginResult {
    success: boolean;
    data?: {
      token: string;
      user: CurrentUser;
    };
    errorMessage?: string;
  }

  // 分页响应
  interface PaginationResult<T> {
    list: T[];
    total: number;
    page: number;
    pageSize: number;
  }

  // 通用响应
  interface Response<T = any> {
    success: boolean;
    data?: T;
    errorCode?: string;
    errorMessage?: string;
    showType?: number;
  }

  // 错误响应
  interface ErrorResponse {
    success: false;
    errorCode: string;
    errorMessage: string;
    showType: number;
  }
}
