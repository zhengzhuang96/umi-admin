// Umi 类型声明
declare module 'umi' {
  export const Outlet: React.ComponentType<any>;
  export const history: any;
  export const useNavigate: () => (path: string) => void;
  export const useModel: (model: string) => any;
  export const useIntl: () => {
    formatMessage: (options: { id: string }) => string;
    locale: string;
  };
  export const setLocale: (locale: string, reload?: boolean) => Promise<void>;
}
