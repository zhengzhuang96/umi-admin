import { proxy } from 'valtio';

interface LayoutState {
  sidebarVisible: boolean;
}

export const layoutStore = proxy<LayoutState>({
  sidebarVisible: false,
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
};
