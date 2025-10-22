import { proxy } from 'valtio';

interface SettingsState {
  // 基础设置
  siteName: string;
  siteDescription: string;
  themeMode: 'light' | 'dark' | 'auto';
  language: string;

  // 布局设置
  fixedHeader: boolean;
  fixedSidebar: boolean;
  navMode: 'side' | 'top' | 'mix';
  compactMode: boolean;

  // 请求设置
  apiUrl: string;
  timeout: number;
  enableLog: boolean;

  // 功能开关
  watermark: boolean;
  errorBoundary: boolean;
  performance: boolean;
  keepAlive: boolean;
}

// 从localStorage加载保存的设置
const loadSettings = (): Partial<SettingsState> => {
  try {
    const saved = localStorage.getItem('appSettings');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
};

// 默认设置
const defaultSettings: SettingsState = {
  siteName: 'Umi Admin',
  siteDescription: '基于 Umi Max 的企业级管理后台',
  themeMode: 'light',
  language: 'zh-CN',
  fixedHeader: true,
  fixedSidebar: true,
  navMode: 'side',
  compactMode: false,
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://api.example.com'
    : 'http://localhost:8000',
  timeout: 10000,
  enableLog: process.env.NODE_ENV === 'development',
  watermark: false,
  errorBoundary: true,
  performance: true,
  keepAlive: true,
};

// 合并默认设置和保存的设置
const initialSettings = { ...defaultSettings, ...loadSettings() };

export const settingsStore = proxy<SettingsState>(initialSettings);

export const settingsActions = {
  // 保存设置
  saveSettings: (newSettings: Partial<SettingsState>) => {
    Object.assign(settingsStore, newSettings);

    // 保存到localStorage
    try {
      localStorage.setItem('appSettings', JSON.stringify(settingsStore));
    } catch (error) {
      console.error('保存设置失败:', error);
    }
  },

  // 重置设置
  resetSettings: () => {
    Object.assign(settingsStore, defaultSettings);
    localStorage.removeItem('appSettings');
  },

  // 更新单个设置
  updateSetting: <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => {
    settingsStore[key] = value;
    settingsActions.saveSettings({ [key]: value });
  },

  // 获取所有设置
  getSettings: () => {
    return { ...settingsStore };
  },

  // 初始化设置
  initSettings: () => {
    const saved = loadSettings();
    Object.assign(settingsStore, saved);
  },
};

// 初始化设置
settingsActions.initSettings();
