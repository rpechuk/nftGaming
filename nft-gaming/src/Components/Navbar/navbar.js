import { Menu, Avatar, Badge } from 'antd';
import {
  AppstoreOutlined,
  UserOutlined,
  NotificationOutlined,
  MessageOutlined,
  ShopOutlined,
  WalletOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import React, { Component } from 'react';

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} theme="dark" selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="crate" icon={<AppstoreOutlined />}>
          Crates
        </Menu.Item>
        <Menu.Item key="market"  icon={<ShopOutlined />}>
          Marketplace
        </Menu.Item>
        <Menu.Item key="collection"  icon={<WalletOutlined />}>
          Collection
        </Menu.Item>
        <Menu.Item key="contact"  icon={<PhoneOutlined />}>
          Contact Us
        </Menu.Item>

        <Menu.Item key="User" style={{float: 'right'}}>
          <Avatar
          size={24}
          icon={<UserOutlined />}
          />
        </Menu.Item>
        <Menu.Item key="Notification" style={{float: 'right'}}>
          <Badge dot={true} size="small">
            <NotificationOutlined />
          </Badge>
        </Menu.Item>
        <Menu.Item key="Msg" style={{float: 'right'}}>
          <Badge count={5} size="small">
            <MessageOutlined />
          </Badge>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;
