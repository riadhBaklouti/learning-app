export interface MenuItem {
  label: string;
  url: string;
  icon: string;
  status: MenuItemStatus
}

export enum MenuItemStatus {
  SELECTED,
  ACTIVE,
}
