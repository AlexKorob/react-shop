import './styles.scss';
import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HomeOutlined,
         BuildOutlined,
         ShoppingCartOutlined,
         LoginOutlined,
         LogoutOutlined, } from '@ant-design/icons';
import { connect } from 'react-redux';

import { BackgroundDiv, LayoutWrapper } from './styles';

const { Header, Footer, Sider, Content } = AntLayout;

export const LayoutComponent = ({
  defaultKey, header, slider, content, footer, user
}) => {
  const [collapsed, setCollapse] = useState(true);
  const onCollapse = () => {
    setCollapse(!collapsed);
  }

  return (
    <LayoutWrapper>
      <Header style={{color: 'white'}}>
        {header || 'Header'}
        <Link to='/login'>
          {!user.isAuth && <LoginOutlined />}
          {user.isAuth && <LogoutOutlined />}
        </Link>
      </Header>

      <AntLayout>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={[defaultKey || 'Home']} mode="inline">
            <Menu.Item key='1' icon={<HomeOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<BuildOutlined />}>
              <Link to='/details'>Details</Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<ShoppingCartOutlined />}>
              <Link to='/cart'>Cart</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>
          <BackgroundDiv primary={false} color='black'>
            {content || 'Content'}
          </BackgroundDiv>
        </Content>
      </AntLayout>
      <Footer>{footer || 'Footer'}</Footer>
    </LayoutWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export const Layout = connect(mapStateToProps)(LayoutComponent);
