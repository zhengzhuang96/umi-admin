// 权限定义
export default function access(initialState: { currentUser?: API.CurrentUser | null }) {
  const { currentUser } = initialState || {};

  return {
    // 是否已登录
    isLoggedIn: !!currentUser,

    // 是否是管理员
    isAdmin: currentUser && currentUser.access === 'admin',

    // 是否是普通用户
    isUser: currentUser && currentUser.access === 'user',

    // 是否有特定权限
    canRead: (resource: string) => {
      if (!currentUser) return false;
      return currentUser.permissions?.includes(`${resource}:read`) || false;
    },

    canWrite: (resource: string) => {
      if (!currentUser) return false;
      return currentUser.permissions?.includes(`${resource}:write`) || false;
    },

    canDelete: (resource: string) => {
      if (!currentUser) return false;
      return currentUser.permissions?.includes(`${resource}:delete`) || false;
    },

    // 路由权限检查
    canAccessRoute: (route: any) => {
      if (!route.access) return true;
      if (!currentUser) return false;

      // 检查路由权限
      if (Array.isArray(route.access)) {
        return route.access.some((permission: string) =>
          currentUser.permissions?.includes(permission)
        );
      }

      return currentUser.permissions?.includes(route.access) || false;
    },
  };
}
