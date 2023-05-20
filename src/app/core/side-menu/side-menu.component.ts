import {Component} from '@angular/core';
import {MenuItem, MenuItemStatus} from "./model/menu.item";
import {
  CHAT_PAGE_URL,
  CLASSES_PAGE_URL,
  DASHBOARD_PAGE_URL,
  LEARNING_PLAN_PAGE_URL,
  RESOURCES_PAGE_URL,
  SETTINGS_PAGE_URL
} from "../utils/navigation.utils";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  host: {'class': 'side-menu-container'},
})
export class SideMenuComponent {

  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      url: DASHBOARD_PAGE_URL,
      icon: 'icon-home',
      status: MenuItemStatus.ACTIVE,
    },
    {
      label: 'Classes',
      url: CLASSES_PAGE_URL,
      icon: 'icon-folder',
    status: MenuItemStatus.ACTIVE,
    },
    {
      label: 'Resources',
      url: RESOURCES_PAGE_URL,
      icon: 'icon-book',
      status: MenuItemStatus.ACTIVE,
    },
    {
      label: 'Learning Plan',
      url: LEARNING_PLAN_PAGE_URL,
      icon: 'icon-calendar',
      status: MenuItemStatus.ACTIVE,
    },
    {
      label: 'Chat',
      url: CHAT_PAGE_URL,
      icon: 'icon-chat',
      status: MenuItemStatus.ACTIVE,
    },
    {
      label: 'Setting',
      url: SETTINGS_PAGE_URL,
      icon: 'icon-settings',
      status: MenuItemStatus.ACTIVE,
    },
  ];

  updateSelectedItem(selectedItemIndex: number) {
    this.menuItems.forEach(item => item.status = MenuItemStatus.ACTIVE);
    this.menuItems[selectedItemIndex].status = MenuItemStatus.SELECTED;
  }

  protected readonly MenuItemStatus = MenuItemStatus;
}
