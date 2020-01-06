import React from "react";
import {Nav, Container, Row, Col} from "react-bootstrap";
import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import DataList from './Content';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;


const App = () => (<Layout>
    <Layout>
        <Sider width={200} style={{background: 'rgb(27,35,46)'}}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{height: '100%', borderRight: 0}}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                <Icon type="user"/>
                Users
              </span>
                    }
                >
                    <Menu.Item key="1">Admin</Menu.Item>
                    <Menu.Item key="2">Developer</Menu.Item>
                    <Menu.Item key="3">Viewer</Menu.Item>
                    <Menu.Item key="4">Visitor</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                <Icon type="laptop"/>
                subnav 2
              </span>
                    }
                >
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                        <span>
                <Icon type="notification"/>
                subnav 3
              </span>
                    }
                >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
        <Layout style={{padding: '24px 24px 24px 24px'}}>
            <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    height: '75vh',
                    flexDirection: 'column',
                    boxShadow: '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)'
                }}
            >
                <DataList/>
            </Content>

            <Footer style={{textAlign: 'center'}}>Copyright © 2021 Litmus Automation. All rights reserved.</Footer>
        </Layout>
    </Layout>
    < /Layout>);

        export default App;

