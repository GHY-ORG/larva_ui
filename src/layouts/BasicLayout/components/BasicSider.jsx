import React, { Component } from 'react';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { siderMenuConfig } from './../../../config/menuConfig';
import Logo from "./Logo";

export default class BasicSider extends Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };
    /**
     * 当前展开的菜单项
     */
    getOpenKeys = (path) => {
        let openKeys = [];
        Array.isArray(siderMenuConfig) && siderMenuConfig.forEach((item, index) => {
            if (path.startsWith(item.path)) {
                openKeys = [`${index}`];
            }
        });
        return openKeys;
    };
    render() {
        const { path } = this.props;
        return (<Layout.Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
        >
            <Logo />
            <Menu
                selectedKeys={[path]}
                defaultSelectedKeys={[path]}
                defaultOpenKeys={[`${this.getOpenKeys(path)}`]}
                theme="dark"
                mode="inline"
            >
                {siderMenuConfig && siderMenuConfig.length > 0 && siderMenuConfig.map((nav, index) => {
                    if (nav.children && nav.children.length > 0) {
                        return (
                            <Menu.SubMenu
                                key={index}
                                title={<span>{nav.icon ? (<Icon size="small" type={nav.icon} />) : null}
                                    <span>{nav.name}</span></span>}
                            >
                                {nav.children.map((item) => {
                                    const linkProps = {};
                                    if (item.newWindow) {
                                        linkProps.href = item.path;
                                        linkProps.target = '_blank';
                                    } else if (item.external) {
                                        linkProps.href = item.path;
                                    } else {
                                        linkProps.to = item.path;
                                    }
                                    return (
                                        <Menu.Item key={item.path}>
                                            <Link {...linkProps}>{item.name}</Link>
                                        </Menu.Item>
                                    );
                                })}
                            </Menu.SubMenu>
                        );
                    }
                    const linkProps = {};
                    if (nav.newWindow) {
                        linkProps.href = nav.path;
                        linkProps.target = '_blank';
                    } else if (nav.external) {
                        linkProps.href = nav.path;
                    } else {
                        linkProps.to = nav.path;
                    }
                    return (
                        <Menu.Item key={nav.path}>
                            <Link {...linkProps}>
                                <span>
                                    {nav.icon ? (
                                        <Icon size="small" type={nav.icon} />
                                    ) : null}
                                    <span>
                                        {nav.name}
                                    </span>
                                </span>
                            </Link>
                        </Menu.Item>
                    );
                })}
            </Menu>
            {/* 侧边菜单项 end */}
        </Layout.Sider>
        );
    }
}