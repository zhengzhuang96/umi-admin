import React from 'react';
import { Space, ColorPicker, Button, message, Tooltip } from 'antd';
import { SettingOutlined, CheckOutlined } from '@ant-design/icons';
import { useIntl } from 'umi';
import { useSnapshot } from 'valtio';
import { layoutActions, layoutStore } from '@/stores/layout';
import configManager from '@/utils/config';

// 预设主题色
const presetColors = [
  '#1890ff', // 默认蓝色
  '#52c41a', // 绿色
  '#fa541c', // 橙色
  '#722ed1', // 紫色
  '#faad14', // 黄色
  '#f5222d', // 红色
  '#13c2c2', // 青色
  '#eb2f96', // 粉色
];

const ThemeColorPicker: React.FC = () => {
  const intl = useIntl();
  const layout = useSnapshot(layoutStore);

  // 获取当前主题色
  const currentColor = layout.themeColor || configManager.getThemeConfig()?.primaryColor || '#1890ff';

  // 处理颜色选择
  const handleColorChange = (color: any) => {
    const hexColor = color.toHexString();
    layoutActions.setThemeColor(hexColor);
    message.success(intl.formatMessage({ id: 'message.success' }));
  };

  // 重置为默认颜色
  const handleReset = () => {
    const defaultColor = configManager.getThemeConfig()?.primaryColor || '#1890ff';
    layoutActions.setThemeColor(defaultColor);
    message.success(intl.formatMessage({ id: 'message.success' }));
  };

  // 快速选择预设颜色
  const handlePresetColorClick = (color: string) => {
    layoutActions.setThemeColor(color);
    message.success(intl.formatMessage({ id: 'message.success' }));
  };

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      {/* 当前颜色显示 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span>{intl.formatMessage({ id: 'theme.currentColor' })}:</span>
        <div
          style={{
            width: 20,
            height: 20,
            backgroundColor: currentColor,
            borderRadius: 4,
            border: '1px solid #d9d9d9',
          }}
        />
        <span style={{ fontFamily: 'monospace' }}>{currentColor}</span>
      </div>

      {/* 颜色选择器 */}
      <div>
        <div style={{ marginBottom: 8 }}>
          {intl.formatMessage({ id: 'theme.customColor' })}:
        </div>
        <ColorPicker
          value={currentColor}
          onChange={handleColorChange}
          showText
          presets={[
            {
              label: intl.formatMessage({ id: 'theme.presetColors' }),
              colors: presetColors,
            },
          ]}
        />
      </div>

      {/* 预设颜色 */}
      <div>
        <div style={{ marginBottom: 8 }}>
          {intl.formatMessage({ id: 'theme.presetColors' })}:
        </div>
        <Space wrap>
          {presetColors.map((color) => (
            <Tooltip key={color} title={color}>
              <div
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: color,
                  borderRadius: 4,
                  cursor: 'pointer',
                  border: color === currentColor ? '2px solid #1890ff' : '1px solid #d9d9d9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => handlePresetColorClick(color)}
              >
                {color === currentColor && (
                  <CheckOutlined style={{ color: '#fff', fontSize: 12 }} />
                )}
              </div>
            </Tooltip>
          ))}
        </Space>
      </div>

      {/* 重置按钮 */}
      <Button type="dashed" onClick={handleReset}>
        {intl.formatMessage({ id: 'theme.resetToDefault' })}
      </Button>
    </Space>
  );
};

export default ThemeColorPicker;
