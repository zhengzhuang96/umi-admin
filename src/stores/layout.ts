import { proxy } from 'valtio';
import configManager from '@/utils/config';

interface LayoutState {
  sidebarVisible: boolean;
  themeColor: string;
}

// 从配置中获取默认主题色
const defaultThemeColor = configManager.getThemeConfig()?.primaryColor || '#1890ff';

export const layoutStore = proxy<LayoutState>({
  sidebarVisible: false,
  themeColor: defaultThemeColor,
});

export const layoutActions = {
  toggleSidebar: () => {
    layoutStore.sidebarVisible = !layoutStore.sidebarVisible;
  },

  showSidebar: () => {
    layoutStore.sidebarVisible = true;
  },

  hideSidebar: () => {
    layoutStore.sidebarVisible = false;
  },

  setThemeColor: (color: string) => {
    layoutStore.themeColor = color;
    // 保存到localStorage以便持久化
    localStorage.setItem('themeColor', color);
  },

  // 初始化主题色
  initThemeColor: () => {
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
      layoutStore.themeColor = savedColor;
    }
  },
};

// 初始化主题色
layoutActions.initThemeColor();
