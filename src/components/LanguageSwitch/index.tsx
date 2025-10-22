import React from 'react';
import { Dropdown, Button, Space, message } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useIntl, setLocale } from 'umi';
import configManager from '@/utils/config';

const LanguageSwitch: React.FC = () => {
  const intl = useIntl();

  // 获取国际化配置
  const localeConfig = configManager.getLocaleConfig();
  const languages = localeConfig?.languages || [];

  // 当前语言状态
  const currentLanguage = intl.locale;

  const handleLanguageChange = async (languageKey: string) => {
    try {
      // 调用Umi的setLocale方法切换语言
      await setLocale(languageKey, false);
      message.success(intl.formatMessage({ id: 'message.success' }));
    } catch (error) {
      console.error('切换语言失败:', error);
      message.error(intl.formatMessage({ id: 'message.error' }));
    }
  };

  const languageItems = languages.map((lang: any) => ({
    key: lang.key,
    label: lang.label,
    onClick: () => handleLanguageChange(lang.key),
  }));

  // 获取当前语言的显示名称
  const currentLanguageLabel = languages.find(
    (lang: any) => lang.key === currentLanguage
  )?.label || intl.formatMessage({ id: 'header.language' });

  return (
    <Dropdown
      menu={{ items: languageItems }}
      placement="bottomRight"
      trigger={['click']}
    >
      <Button type="text" icon={<GlobalOutlined />}>
        <Space>
          {currentLanguageLabel}
        </Space>
      </Button>
    </Dropdown>
  );
};

export default LanguageSwitch;
