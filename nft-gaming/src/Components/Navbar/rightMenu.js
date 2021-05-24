import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="" class="menuButton">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="" class="menuButton">Signup</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;