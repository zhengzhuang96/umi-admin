import React from 'react';
import { Card, Form, Input, Switch, Button, Select, Divider, Space, message } from 'antd';
import { SaveOutlined } from '@ant-design/icons';
import { useIntl, setLocale } from 'umi';
import { useSnapshot } from 'valtio';
import { layoutStore } from '@/stores/layout';
import { settingsStore, settingsActions } from '@/stores/settings';
import configManager from '@/utils/config';
import ThemeColorPicker from '@/components/ThemeColorPicker';
import styles from './index.less';

const { Option } = Select;
const { TextArea } = Input;

const Settings: React.FC = () => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const layout = useSnapshot(layoutStore);
  const settings = useSnapshot(settingsStore);

  const onFinish = async (values: any) => {
    // 映射表单字段到设置存储
    const settingsToSave = {
      siteName: values.siteName,
      siteDescription: values.siteDescription,
      themeMode: values.theme,
      language: values.language,
      fixedHeader: values.fixedHeader,
      fixedSidebar: values.fixedSidebar,
      navMode: values.navMode,
      compactMode: values.compactMode,
      apiUrl: values.apiUrl,
      timeout: values.timeout || 10000,
      enableLog: values.enableLog,
      watermark: values.watermark,
      errorBoundary: values.errorBoundary,
      performance: values.performance,
      keepAlive: values.keepAlive,
    };

    // 保存设置
    settingsActions.saveSettings(settingsToSave);

    // 显示成功消息
    message.success(intl.formatMessage({ id: 'message.success' }));

    // 如果语言发生变化，使用setLocale切换语言
    if (values.language !== settings.language) {
      try {
        await setLocale(values.language, false);
        message.success(intl.formatMessage({ id: 'message.success' }));
      } catch (error) {
        console.error('切换语言失败:', error);
        message.error(intl.formatMessage({ id: 'message.error' }));
      }
    }
  };

  return (
    <div className={styles.settings}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{intl.formatMessage({ id: 'page.settings.title' })}</h1>
        <p className={styles.pageSubtitle}>{intl.formatMessage({ id: 'page.settings.subtitle' })}</p>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          siteName: settings.siteName,
          siteDescription: settings.siteDescription,
          theme: settings.themeMode,
          language: settings.language,
          fixedHeader: settings.fixedHeader,
          fixedSidebar: settings.fixedSidebar,
          navMode: settings.navMode,
          compactMode: settings.compactMode,
          apiUrl: settings.apiUrl,
          timeout: settings.timeout,
          enableLog: settings.enableLog,
          watermark: settings.watermark,
          errorBoundary: settings.errorBoundary,
          performance: settings.performance,
          keepAlive: settings.keepAlive,
        }}
      >
        <Card title={intl.formatMessage({ id: 'appInfo.basic' })} className={styles.settingCard}>
          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.appName' })}
            name="siteName"
            rules={[{ required: true, message: intl.formatMessage({ id: 'form.required' }) }]}
          >
            <Input placeholder={intl.formatMessage({ id: 'appInfo.appName' })} />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.description' })}
            name="siteDescription"
          >
            <TextArea
              placeholder={intl.formatMessage({ id: 'appInfo.description' })}
              rows={3}
            />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.mode' })}
            name="theme"
          >
            <Select>
              <Option value="light">{intl.formatMessage({ id: 'theme.mode.light' })}</Option>
              <Option value="dark">{intl.formatMessage({ id: 'theme.mode.dark' })}</Option>
              <Option value="auto">{intl.formatMessage({ id: 'theme.mode.auto' })}</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.defaultLanguage' })}
            name="language"
          >
            <Select>
              <Option value="zh-CN">简体中文</Option>
              <Option value="en-US">English</Option>
            </Select>
          </Form.Item>
        </Card>

        <Card title={intl.formatMessage({ id: 'appInfo.theme' })} className={styles.settingCard}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 8, fontWeight: 500 }}>
              {intl.formatMessage({ id: 'theme.colorPicker' })}
            </div>
            <ThemeColorPicker />
          </div>

          <Divider />

          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.compactMode' })}
            name="compactMode"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Card>

        <Card title={intl.formatMessage({ id: 'appInfo.layout' })} className={styles.settingCard}>
          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.fixedHeader' })}
            name="fixedHeader"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.fixedSidebar' })}
            name="fixedSidebar"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.navMode' })}
            name="navMode"
          >
            <Select>
              <Option value="side">{intl.formatMessage({ id: 'layout.navMode.side' })}</Option>
              <Option value="top">{intl.formatMessage({ id: 'layout.navMode.top' })}</Option>
              <Option value="mix">{intl.formatMessage({ id: 'layout.navMode.mix' })}</Option>
            </Select>
          </Form.Item>
        </Card>

        <Card title={intl.formatMessage({ id: 'appInfo.request' })} className={styles.settingCard}>
          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.baseURL' })}
            name="apiUrl"
            rules={[{ required: true, message: intl.formatMessage({ id: 'form.required' }) }]}
          >
            <Input placeholder={intl.formatMessage({ id: 'appInfo.baseURL' })} />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.timeout' })}
            name="timeout"
          >
            <Input type="number" addonAfter="ms" />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.enableLog' })}
            name="enableLog"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Card>

        <Card title={intl.formatMessage({ id: 'appInfo.features' })} className={styles.settingCard}>
          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.watermark' })}
            name="watermark"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.errorBoundary' })}
            name="errorBoundary"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.performance' })}
            name="performance"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            label={intl.formatMessage({ id: 'appInfo.keepAlive' })}
            name="keepAlive"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </Card>

        <Card title={intl.formatMessage({ id: 'page.settings.about' })} className={styles.settingCard}>
          <div className={styles.aboutInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{intl.formatMessage({ id: 'about.version' })}:</span>
              <span className={styles.infoValue}>Umi Admin v1.0.0</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{intl.formatMessage({ id: 'about.reactVersion' })}:</span>
              <span className={styles.infoValue}>18.3.1</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{intl.formatMessage({ id: 'about.antdVersion' })}:</span>
              <span className={styles.infoValue}>5.27.6</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{intl.formatMessage({ id: 'about.umiVersion' })}:</span>
              <span className={styles.infoValue}>4.5.3</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{intl.formatMessage({ id: 'about.buildTime' })}:</span>
              <span className={styles.infoValue}>2025-10-21</span>
            </div>
          </div>
        </Card>

        <div className={styles.formActions}>
          <Space>
            <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
              {intl.formatMessage({ id: 'common.save' })}
            </Button>
            <Button onClick={() => form.resetFields()}>
              {intl.formatMessage({ id: 'common.reset' })}
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
};

export default Settings;
