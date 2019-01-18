import React, { Component } from 'react';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import routerConfig from '../../../config/routerConfig';

const headers = ['/dashboard', '/post', '/comment', '/file'];

export default class BasicHeader extends Component {

    render() {
        const { path } = this.props;
        const isMobile = false;
        return (
            <Layout.Header>
                <Menu
                    selectedKeys={[path]}
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >
                    {headers.map((url) => {
                        let item = null;
                        for (let i = 0; i < routerConfig.length; i++) {
                            if (url === routerConfig[i].path) {
                                item = routerConfig[i];
                                break;
                            }
                        }
                        return (
                            <Menu.Item
                                key={item.path}
                                disabled={item.disabled}
                            >
                                <Link to={item.path}>
                                    <span>
                                        {item.icon ? (
                                            <Icon size="small" type={item.icon} />
                                        ) : null}
                                        {!isMobile ? item.name : null}
                                    </span>
                                </Link>
                            </Menu.Item>
                        );
                    })}
                </Menu>
            </Layout.Header>
        );
    }
}