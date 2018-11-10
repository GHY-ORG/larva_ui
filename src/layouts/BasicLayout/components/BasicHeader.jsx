import React, { Component } from 'react';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { headerMenuConfig } from './../../../config/menuConfig';

export default class BasicHeader extends Component {
    render() {
        const { isMobile } = this.props;
        return (
            <Layout.Header style={{ background: '#fff' }}>
                {/* Header 菜单项 begin */}
                {headerMenuConfig && headerMenuConfig.length > 0 ? (
                    <Menu
                        mode="horizontal"
                        style={{ float: "right" }}
                        selectedKeys={[]}
                    >
                        {headerMenuConfig.map((nav, idx) => {
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
                                <Menu.Item key={idx}>
                                    {linkProps.to ? (
                                        <Link {...linkProps}>
                                            {nav.icon ? (
                                                <Icon type={nav.icon} size="small" />
                                            ) : null}
                                            {!isMobile ? nav.name : null}
                                        </Link>
                                    ) : (
                                            <a {...linkProps}>
                                                {nav.icon ? (
                                                    <Icon type={nav.icon} size="small" />
                                                ) : null}
                                                {!isMobile ? nav.name : null}
                                            </a>
                                        )}
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                ) : null}
                {/* Header 菜单项 end */}
            </Layout.Header>
        );
    }
}