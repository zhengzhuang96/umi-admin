// 配置管理工具
import appConfig from '@/config/app';

// 全局配置对象
class ConfigManager {
  private config = appConfig;

  // 获取配置
  get<T = any>(key?: string): T {
    if (!key) {
      return this.config as T;
    }

    const keys = key.split('.');
    let value: any = this.config;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return undefined as T;
      }
    }

    return value as T;
  }

  // 设置配置
  set(key: string, value: any): void {
    const keys = key.split('.');
    let current: any = this.config;

    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (!(k in current)) {
        current[k] = {};
      }
      current = current[k];
    }

    current[keys[keys.length - 1]] = value;
  }

  // 获取应用名称
  getAppName(): string {
    return this.get<string>('name') || 'Umi Admin';
  }

  // 获取主题配置
  getThemeConfig() {
    return this.get('theme');
  }

  // 获取布局配置
  getLayoutConfig() {
    return this.get('layout');
  }

  // 获取请求配置
  getRequestConfig() {
    return this.get('request');
  }

  // 获取权限配置
  getAccessConfig() {
    return this.get('access');
  }

  // 获取国际化配置
  getLocaleConfig() {
    return this.get('locale');
  }

  // 获取功能开关
  getFeatures() {
    return this.get('features');
  }

  // 检查功能是否开启
  isFeatureEnabled(feature: string): boolean {
    const features = this.getFeatures();
    return features?.[feature] || false;
  }
}

// 创建全局配置实例
export const configManager = new ConfigManager();

// 导出常用配置的快捷方式
export const appName = configManager.getAppName();
export const themeConfig = configManager.getThemeConfig();
export const layoutConfig = configManager.getLayoutConfig();
export const requestConfig = configManager.getRequestConfig();
export const accessConfig = configManager.getAccessConfig();
export const localeConfig = configManager.getLocaleConfig();

export default configManager;
